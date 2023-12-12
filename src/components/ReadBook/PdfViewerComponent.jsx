import React, { useContext, useEffect, useRef } from "react";
import PSPDFKit from "pspdfkit";
import { BASE_URL } from "../../config/confir";
import { AuthContext } from "../../contexts/AuthProvider";
import {createNewPdfFromBuffer} from "./BufferToPdf";
// import { PDFDocument } from 'pdf-lib'
import pdfjs from 'pdfjs-dist';
import { useState } from "react";
import pdfBooks from "../../assets/book/Christianity is My Mental Disorder.pdf";
import AudioPlayer from "../AudioPlayer/AudioPlayer";

export default function PdfViewerComponent(props) {
  const containerRef = useRef(null);
  const instanceRef = useRef(null);
  const { blobPdf } = props;

  const [audioSrc, setAudioSrc] = useState('');

  const { user } = useContext(AuthContext);
  // console.log('user: ', user.data.pdfBuffer.toString('base64'))
// const [buff, setBuff]= useState([])

  // const Mypdf = async (blobPdfs)=>{
  //   const blob = new Blob([blobPdfs]);
  //   const buf =  await blob.arrayBuffer();
  //   setBuff(buf)
  // }
//   async function createObjectURL(object) {
//     return (window.URL) ? window.URL.createObjectURL(object) : window.webkitURL.createObjectURL(object);
// }
  const AudioFetch = async (filename)=>{
      // fetch(`http://localhost:8000/audio?filename=${filename}`)

      // .then(data=>setAudio(data))
      setAudioSrc(`http://localhost:8000/audio?filename=${filename}`)
      
  }

  useEffect(() => {
    AudioFetch(1)
    // console.log('user',user.data.pdfBuffer)
    // convertToPDF();
    // Mypdf(user.data.pdfBuffer)
    // if(blobPdf.length !==0){
    //   // URL.createObjectURL(blobPdf)
    // const documentBlobObjectUrl = URL.createObjectURL(blobPdf);

    // console.log('documentBlobObjectUrl',documentBlobObjectUrl)
    // }
    // const file = new File(["Hello, world!"], , { type: "application/pdf" });
//     console.log(typeof blobPdf)
//     const blob = new Blob([blobPdf], { type : 'application/pdf' });
    
// //     const arrayBuffer = Uint8Array.from(props.document).buffer;
//       const url = URL.createObjectURL(blob);
//       console.log('url',url)
    


  }, []);

  // const audioSrc = 'http://localhost:8000/audio';

  useEffect(() => {
   
   
    const container = containerRef.current;
    
    async function loadPSPDFKit() {
      try {
        // Ensure that there's only one PSPDFKit instance.
        if (instanceRef.current) {
          PSPDFKit.unload(container);
        }
      
        // Load PSPDFKit instance
        instanceRef.current = await PSPDFKit.load({
          container,
          document: props.document,
          baseUrl: `${window.location.protocol}//${window.location.host}/`,
        });


        const outline = PSPDFKit.Immutable.List([
          new PSPDFKit.OutlineElement({
            action: new PSPDFKit.Actions.GoToAction({ pageIndex: 1 }),
            children: PSPDFKit.Immutable.List([]),
            title: "My outline element 1"
          }),
          new PSPDFKit.OutlineElement({
            action: new PSPDFKit.Actions.GoToAction({ pageIndex: 2 }),
            children: PSPDFKit.Immutable.List([]),
            title: "My outline element 2"
          }),
          new PSPDFKit.OutlineElement({
            action: new PSPDFKit.Actions.GoToAction({ pageIndex: 5 }),
            children: PSPDFKit.Immutable.List([]),
            title: "My outline element 5"
          })
        ]);

        instanceRef.current.setDocumentOutline(outline);

        instanceRef.current.addEventListener("viewState.change", (viewState) => {
          AudioFetch(viewState.toJS().currentPageIndex)
          console.log(viewState.toJS().currentPageIndex);
        });



        // Add event listener for annotations change
        // instanceRef.current.addEventListener(
        //   "annotations.change",
        //   handleAnnotationsChange
        // );


      } catch (error) {
        console.error("Error loading PSPDFKit:", error);
      }
    }

    blobPdf && loadPSPDFKit() 

    // Cleanup
    return () => {
      if (instanceRef.current) {
        PSPDFKit.unload(container);
        instanceRef.current = null;
      }
    };
  }, [props.document,blobPdf]);

  const savePdfToServer = async () => {
    try {
      // Capture PDF data from the PSPDFKit instance
      // const pdfData = await instanceRef.current.exportPDF();
      // const blob = new Blob([pdfData], { type: "application/pdf" });

      // // Get the size of the Blob
      // // const blobSize = blob.size;
      // // console.log("Blob Size: ", blobSize, "bytes");

      // const formData = new FormData();
      // formData.append("file", blob);

      // // Send PDF data to the server
      // const response = await fetch(
      //   // `${BASE_URL}/api/users/updateBuffer/${user?.data?._id}`,
      //   `${BASE_URL}/upload/${user?.data?._id}`,
      //   {
      //     method: "PUT",
      //     body: formData,
      //   }
      // );

    
          
       

    //   const arrayBuffer = await instanceRef.current.exportPDF();
    // const blob = new Blob([arrayBuffer], { type: 'application/pdf' });
    // const formData = new FormData();
    // formData.append("file", blob);
    // const response = await fetch(`${BASE_URL}/upload/${user?.data?._id}`, {
    //   method: "PUT",
    //   body: formData
    // });

      // const resData = await response.json();

      // if (response.ok) {
      //   console.log("PDF saved successfully.");
      // } else {
      //   console.error("Failed to save PDF:", response.statusText);
      // }
    } catch (error) {
      console.error("Error exporting or saving PDF:", error);
    }
  };

  const handleAnnotationsChange = async () => {
    try {
      // Specify the page index (e.g., 0 for the first page)
      const pageIndex = 0;

      // Retrieve annotations from PSPDFKit for a specific page
      const annotations = await instanceRef.current.getAnnotations(pageIndex);

      // Log annotations in JSON format
      console.log("Changes from PDF: ", JSON.stringify(annotations, null, 2));

      // Save the PDF to the server when annotations change
      // savePdfToServer();
    } catch (error) {
      console.error("Error fetching annotations:", error);
    }
  };

  // This div element will render the document to the DOM.
  return <>
  <AudioPlayer src={audioSrc}/>
  <div ref={containerRef} style={{ width: "100%", height: "100vh" }} />;
  
  </>
}
