import React, { useCallback, useEffect, useRef } from "react";
import PSPDFKit from "pspdfkit";
import { BASE_URL } from "../../config/confir";

import { useState } from "react";

import AudioPlayer from "../AudioPlayer/AudioPlayer";
import AudioPlayerAll from "../AudioPlayer/AudioPlayerAll";

export default function PdfViewerComponent(props) {
  const containerRef = useRef(null);
  const instanceRef = useRef(null);

  const [pageIndex, setPageIndex] = useState();

  const findAudioFileName = (array, pageIndex) => {
    const matchedObject = array?.find((obj) => obj?.pageIndex === pageIndex);
    return matchedObject ? matchedObject.audioFileName : null;
  };
  const [audioFileName, setAudioFileName] = useState("");
  const [allAudios, setAllAudios] = useState([]);

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
    const foundAudioFileName = findAudioFileName(
      props.allFiles?.audios,
      pageIndex,
    );
    if (foundAudioFileName) {
      setAudioFileName(`${BASE_URL}/files/audios/${foundAudioFileName}`);
    }
  }, [pageIndex, props.allFiles]);

  async function loadPSPDFKit(container, outlineElements) {
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
      props.allFiles !== null && loadPSPDFKit(container, outlineElement);
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
