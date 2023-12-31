import React, { useEffect, useRef } from "react";
import PSPDFKit from "pspdfkit";
import pdfBooks from "../../assets/book/book.pdf";
import PdfViewerComponent from "./PdfViewerComponent";

const baseUrl = `${window.location.protocol}//${window.location.host}/node_modules/pspdfkit/dist/`;

export default function ReadBooks3({ arrayBuffer }) {
  const instanceRef = useRef(null);
  const containerRef = useRef(null);
  useEffect(() => {
    console.log("arrayBuffer", arrayBuffer);

    const container = containerRef.current;
    if (instanceRef.current) {
      PSPDFKit.unload(container);
    }

    // Load PSPDFKit instance
    instanceRef.current = PSPDFKit.load({
      container,
      document: arrayBuffer,
      baseUrl: `${window.location.protocol}//${window.location.host}/public/`,
    });

    // PSPDFKit.load({
    //   baseUrl,
    //   disableWebAssemblyStreaming: true,
    //   container: "#pspdfkit",
    //   // document: arrayBuffer,
    //   document: pdfBooks,
    // })
    //   .then((loadedInstance) => {
    //     // Set the instance variable using the useRef
    //     instanceRef.current = loadedInstance;

    //     // Add event listener for annotations change
    //     instanceRef.current.addEventListener("annotations.change", handleAnnotationsChange);

    //     // Set initial view state (if needed)
    //     instanceRef.current.setViewState((viewState) => {
    //       return viewState.set("sidebarMode", PSPDFKit.SidebarMode.THUMBNAILS);
    //     });

    //     console.log("PSPDFKit loaded", instanceRef.current);
    //   })
    //   .catch((error) => {
    //     console.error(error.message);
    //   });

    // // Cleanup
    // return () => PSPDFKit.unload("#pspdfkit");
  }, [arrayBuffer]);

  const savePdfToServer = async () => {
    try {
      // Capture PDF data from the PSPDFKit instance
      const pdfData = await instanceRef.current.exportPDF();

      console.log("pdfData", pdfData);

      // Send PDF data to the server
      const response = await fetch(
        "https://your-server-endpoint.com/save-pdf",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/pdf",
          },
          body: pdfData,
        }
      );

      if (response.ok) {
        console.log("PDF saved successfully.");
      } else {
        console.error("Failed to save PDF:", response.statusText);
      }
    } catch (error) {
      console.error("Error exporting or saving PDF:", error);
    }
  };

  const handleAnnotationsChange = async () => {
    try {
      // Specify the page index (e.g., 0 for the first page)
      const pageIndex = 0;

      // Retrieve annotations (notes, bookmarks, etc.) from PSPDFKit for a specific page
      const annotations = await instanceRef.current.getAnnotations(pageIndex);

      // Log annotations in JSON format
      console.log("Changes from PDF: ", JSON.stringify(annotations, null, 2));

      // Save the PDF to the server when annotations change
      savePdfToServer();
    } catch (error) {
      console.error("Error fetching annotations:", error);
    }
  };

  return <PdfViewerComponent document={arrayBuffer} />;
  // return <div id="pspdfkit" style={{ width: "100%", height: "100vh" }} />;
}

// import React, { useEffect, useRef } from "react";
// import PSPDFKit from "pspdfkit";
// import pdfBooks from "../../assets/book/Christianity is My Mental Disorder.pdf";

// import PdfViewerComponent from "./PdfViewerComponent";

// // const baseUrl = `${window.location.protocol}//${window.location.host}/node_modules/pspdfkit/dist/`;
// const baseUrl =  `${window.location.protocol}//${window.location.host}/`;

// export default function ReadBooks3({  arrayBuffer }) {
//   const instanceRef = useRef(null);

//   const handleAnnotationAdded = async (event) => {
//     console.log(event,'eeveent')
//     if (event && event.annotations) {
//       const { annotations } = event;

//       console.log('e-anotation',annotations)
//       // Process each annotation
//       annotations.forEach((annotation) => {
//         if (annotation instanceof PSPDFKit.Annotations.TextAnnotation) {
//           console.log("Note added:", annotation);
//         } else if (annotation instanceof PSPDFKit.Annotations.HighlightAnnotation) {
//           console.log("Highlight added:", annotation);
//         }
//       }); }
//       else{
//         console.log("Annotation is not working fine.")
//       }

//   };

//   useEffect(() => {

//     console.log('sdfkit',PSPDFKit)
//     PSPDFKit.load({
//       baseUrl,
//       disableWebAssemblyStreaming: true,
//       container: "#pspdfkit1",
//       document: pdfBooks,
//     })
//       .then((loadedInstance) => {
//         instanceRef.current = loadedInstance;

//         // Add event listener for annotations change
//         instanceRef.current.addEventListener(
//           "annotations.change",
//           handleAnnotationsChange
//         );

//         loadedInstance.addEventListener("annotations.change", async () => {
//           console.log("Something in the annotations has changed.");
//           try {
//             let Notean = new PSPDFKit.Annotations.NoteAnnotation;
//             // console.log('an',an)
//             console.log('Notean',Notean)
//           } catch (error) {
//             console.error("Error retrieving annotations:", error);
//           }
//         });

//         loadedInstance.addEventListener("annotations.create", async createdAnnotations => {
//         console.log('createdAnnotations',createdAnnotations)

//         });

//         // Set initial view state (if needed)
//         instanceRef.current.setViewState((viewState) => {
//           return viewState.set("sidebarMode", PSPDFKit.SidebarMode.THUMBNAILS);
//         });

//         console.log("PSPDFKit loaded", loadedInstance);
//       })
//       .catch((error) => {
//         console.error(error.message);
//       });

//     // Cleanupf
//     // Cleanupf
//     return () => {
//       // Remove the event listeners
//       if (instanceRef.current) {
//         instanceRef.current.removeEventListener(
//           "annotations.change",
//           handleAnnotationsChange
//         );
//         instanceRef.current.removeEventListener(
//           "annotations.change",
//           handleAnnotationAdded
//         );
//         PSPDFKit.unload("#pspdfkit1");
//         console.log("Cleanup function called");
//       }
//     };
//   }, [arrayBuffer]);

//   const savePdfToServer = async () => {
//     try {
//       // Capture PDF data from the PSPDFKit instance
//       const pdfData = await instanceRef.current.exportPDF();

//       console.log("pdfData: ", pdfData)
//       // setArrayBuffer(pdfData);

//       // Send PDF data to the server
//       const response = await fetch(
//         "https://your-server-endpoint.com/save-pdf",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/pdf",
//           },
//           body: pdfData,
//         }
//       );

//       if (response.ok) {
//         console.log("PDF saved successfully.");
//       } else {
//         console.error("Failed to save PDF:", response.statusText);
//       }
//     } catch (error) {
//       console.error("Error exporting or saving PDF:", error);
//     }
//   };

//   const handleAnnotationsChange = async () => {
//     try {
//       // Specify the page index (e.g., 0 for the first page)
//       const pageIndex = 0;

//       // Retrieve annotations (notes, bookmarks, etc.) from PSPDFKit for a specific page
//       const annotations = await instanceRef.current.getAnnotations(pageIndex);

//       savePdfToServer();
//     } catch (error) {
//       console.error("Error fetching annotations:", error);
//     }
//   };

//   return <div id="pspdfkit1" style={{ width: "100%", height: "100vh" }} />;
//   // return <>
//   //   <PdfViewerComponent document= {arrayBuffer}/>
//   // </>

// }
