import React, { useCallback, useContext, useEffect, useRef } from "react";
import PSPDFKit from "pspdfkit";
import { BASE_URL, AWS_BUCKET_PATH } from "../../config/confir";

import { useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";

import AudioPlayer from "../AudioPlayer/AudioPlayer";
import AudioPlayerAll from "../AudioPlayer/AudioPlayerAll";
import { useParams } from "react-router-dom";
import { getBookBuffer } from "../../api/books";

export default function PdfViewerComponent(props) {
  const containerRef = useRef(null);
  const instanceRef = useRef(null);
  const param = useParams();
  const { user } = useContext(AuthContext);
  const [pageIndex, setPageIndex] = useState();
  const [lastIndex, setLastIndex] = useState(0);

  const getPrevData = useCallback(() => {
    let previousReadingRecords = localStorage.getItem(
      `previousReadingRecord-${param.id}`,
    );
    let lastIndexFile = JSON.parse(previousReadingRecords);

    if (param.id === lastIndexFile?.pageID && lastIndexFile.pageIndex > 0) {
      setLastIndex(lastIndexFile.pageIndex);
    }
  }, [param.id]);

  useEffect(() => {
    getPrevData();
    if (pageIndex !== null && pageIndex > 0) {
      let obj = {
        pageID: param.id,
        pageIndex: pageIndex ?? lastIndex,
      };
      localStorage.setItem(
        `previousReadingRecord-${param.id}`,
        JSON.stringify(obj),
      );
    }
  }, [param.id, pageIndex]);

  const findAudioFileName = (array, pageIndex) => {
    const matchedObject = array?.find((obj) => obj?.pageIndex === pageIndex);
    return matchedObject ? matchedObject.audioFileName : null;
  };
  const [audioFileName, setAudioFileName] = useState("");
  const [allAudios, setAllAudios] = useState([]);

  const audioLoad = useCallback(() => {
    let newArray = props.allFiles?.audios?.map((item) => {
      return {
        audioFileName: `${AWS_BUCKET_PATH}/${item.audioFileName}`,
      };
    });

    setAllAudios(newArray);
  }, [props.allFiles]);

  useEffect(() => {
    audioLoad();

    const foundAudioFileName = findAudioFileName(
      props.allFiles?.audios,
      pageIndex ?? lastIndex,
    );
    if (foundAudioFileName) {
      setAudioFileName(`${AWS_BUCKET_PATH}/${foundAudioFileName}`);
    }
  }, [pageIndex, props.allFiles]);

  const [isLoading, setLoading] = useState(true);

  async function loadPSPDFKit(
    container,
    outlineElements,
    lastIndex,
    documentBlobObjectUrl,
  ) {
    try {
      // Ensure that there's only one PSPDFKit instance.
      if (instanceRef.current) {
        PSPDFKit.unload(container);
      }

      // // Fetch the PDF and read the response as an `ArrayBuffer`.
      instanceRef.current = await PSPDFKit.load({
        container,
        document:
          documentBlobObjectUrl ?? `${AWS_BUCKET_PATH}/${props.allFiles.pdf}`,
        baseUrl: `${window.location.protocol}//${window.location.host}/`,
      });

      if (lastIndex) {
        instanceRef.current.setViewState((viewState) =>
          viewState.set("currentPageIndex", lastIndex),
        );
      }

      instanceRef.current.setViewState((viewState) => {
        return viewState.set(
          "sidebarMode",
          PSPDFKit.SidebarMode.DOCUMENT_OUTLINE,
        );
      });

      const outline = PSPDFKit.Immutable.List([...outlineElements]);
      instanceRef.current.setDocumentOutline(outline);

      // Event Listener edit ,update, delete
      instanceRef.current.addEventListener(
        "annotations.willChange",
        handleAnnotationsChange,
      );
      instanceRef.current.addEventListener(
        "annotations.create",
        handleAnnotationsChange,
      );
      instanceRef.current.addEventListener(
        "annotations.update",
        handleAnnotationsChange,
      );
      instanceRef.current.addEventListener(
        "annotations.delete",
        handleAnnotationsChange,
      );
      // Event Listener edit ,update, delete
      instanceRef.current.addEventListener("viewState.change", (viewState) => {
        setPageIndex(viewState.toJS().currentPageIndex);
        console.log(viewState.toJS().currentPageIndex);
      });
    } catch (error) {
      console.error("Error loading PSPDFKit:", error);
    } finally {
      setLoading(false);
    }
  }

  const handleAnnotationsChange = async () => {
    try {
      // Specify the page index (e.g., 0 for the first page)
      const arrayBuffer = await instanceRef.current.exportPDF();
      const blob = new Blob([arrayBuffer], { type: "application/pdf" });
      const formData = new FormData();
      formData.append("file", blob);
      await fetch(`${BASE_URL}/upload/${user?.data?._id}?bookId=${param.id}`, {
        method: "PUT",
        body: formData,
      });
      console.log("blob saved");
    } catch (error) {
      console.error("Error fetching annotations:", error);
    }
  };

  const loadPDF = useCallback(
    async (container) => {
      const outlineElement = props.allFiles?.audios?.map((item) => {
        return new PSPDFKit.OutlineElement({
          action: new PSPDFKit.Actions.GoToAction({
            pageIndex: item.pageIndex,
          }),
          children: PSPDFKit.Immutable.List([]),
          title: item.bookOutlineName,
        });
      });

      let getBookk = await getBookBuffer(user.data._id, param.id);
      let documentBlobObjectUrl;
      if (getBookk.data) {
        let binary = atob(getBookk.data?.pdfBuffer); // Decode Base64 to binary
        let array = [];
        for (let i = 0; i < binary.length; i++) {
          array.push(binary.charCodeAt(i));
        }
        let blob = new Blob([new Uint8Array(array)], {
          type: "application/pdf",
        });
        documentBlobObjectUrl = URL.createObjectURL(blob);
      }
      await loadPSPDFKit(
        container,
        outlineElement,
        lastIndex,
        documentBlobObjectUrl,
      );
    },
    [props.allFiles],
  );

  useEffect(() => {
    const container = containerRef.current;
    loadPDF(container);

    // Cleanup
    return () => {
      if (instanceRef.current) {
        PSPDFKit.unload(container);
        instanceRef.current = null;
      }
    };
  }, [props.allFiles]);

  return (
    <>
      <div className="d-flex justify-content-between align-items-center flex-wrap">
        {allAudios && <AudioPlayerAll audioFiles={allAudios} />}
        <AudioPlayer src={audioFileName} />
      </div>
      {isLoading && <div>Loading....</div>}
      <div ref={containerRef} style={{ width: "100%", height: "100vh" }} />
    </>
  );
}
