import React, { useCallback, useEffect, useRef } from "react";
import PSPDFKit from "pspdfkit";
import { BASE_URL } from "../../config/confir";

import { useState } from "react";

import AudioPlayer from "../AudioPlayer/AudioPlayer";
import AudioPlayerAll from "../AudioPlayer/AudioPlayerAll";
import { useParams } from "react-router-dom";

export default function PdfViewerComponent(props) {
  const containerRef = useRef(null);
  const instanceRef = useRef(null);
  const param = useParams();

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

  console.log("audioFileName", audioFileName);

  const increment = useCallback(() => {
    let newArray = props.allFiles?.audios?.map((item) => {
      return {
        audioFileName: `${BASE_URL}/files/audios/${item.audioFileName}`,
      };
    });

    setAllAudios(newArray);
  }, [props.allFiles]);

  useEffect(() => {
    increment();
    console.log("pageIndex", lastIndex);
    const foundAudioFileName = findAudioFileName(
      props.allFiles?.audios,
      pageIndex ?? lastIndex,
    );
    if (foundAudioFileName) {
      setAudioFileName(`${BASE_URL}/files/audios/${foundAudioFileName}`);
    }
  }, [pageIndex, props.allFiles]);

  async function loadPSPDFKit(container, outlineElements, lastIndex) {
    try {
      // Ensure that there's only one PSPDFKit instance.
      if (instanceRef.current) {
        PSPDFKit.unload(container);
      }

      instanceRef.current = await PSPDFKit.load({
        container,
        document: `${BASE_URL}/files/${props.allFiles.pdf}`,
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

      instanceRef.current.addEventListener("viewState.change", (viewState) => {
        setPageIndex(viewState.toJS().currentPageIndex);
        console.log(viewState.toJS().currentPageIndex);
      });
    } catch (error) {
      console.error("Error loading PSPDFKit:", error);
    }
  }

  useEffect(() => {
    const container = containerRef.current;

    if (props.allFiles) {
      const outlineElement = props.allFiles?.audios?.map((item) => {
        return new PSPDFKit.OutlineElement({
          action: new PSPDFKit.Actions.GoToAction({
            pageIndex: item.pageIndex,
          }),
          children: PSPDFKit.Immutable.List([]),
          title: item.bookOutlineName,
        });
      });
      props.allFiles !== null &&
        loadPSPDFKit(container, outlineElement, lastIndex);
    }

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
      <div ref={containerRef} style={{ width: "100%", height: "100vh" }} />
    </>
  );
}
