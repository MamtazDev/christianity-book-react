import React, { useEffect, useRef } from "react";
import PSPDFKit from "pspdfkit";
import pdfBooks from "../../assets/book/book.pdf";

const baseUrl = `${window.location.protocol}//${window.location.host}/node_modules/pspdfkit/dist/`;

export default function ReadBooks2({ url, setArrayBuffer }) {
  const instanceRef = useRef(null);

  useEffect(() => {
    const handleAnnotationAdded = async (event) => {
      try {
        const { annotation } = event;

        console.log('e-anotation',annotation)
  
        if (event && event.annotations) {
          const { annotations } = event;
  
          // Process each annotation
          annotations.forEach((annotation) => {
            if (annotation instanceof PSPDFKit.Annotations.TextAnnotation) {
              console.log("Note added:", annotation);
            } else if (annotation instanceof PSPDFKit.Annotations.HighlightAnnotation) {
              console.log("Highlight added:", annotation);
            }
          }); }
          else{
            console.log("Annotation is not working fine.")
          }
  
        // Save the PDF to the server when annotations change
        savePdfToServer();
      } catch (error) {
        console.error("Error handling annotation added:", error);
      }
    };
  
    PSPDFKit.load({
      baseUrl,
      disableWebAssemblyStreaming: true,
      container: "#pspdfkit1",
      document: pdfBooks,
    })
      .then((loadedInstance) => {
        instanceRef.current = loadedInstance;
  
        // Add event listener for annotations change
        instanceRef.current.addEventListener("annotations.change", handleAnnotationsChange);
  
        // Add event listener for annotation added
        instanceRef.current.addEventListener("annotations.change", handleAnnotationAdded);
  
        // Set initial view state (if needed)
        instanceRef.current.setViewState((viewState) => {
          return viewState.set("sidebarMode", PSPDFKit.SidebarMode.THUMBNAILS);
        });
  
        console.log("PSPDFKit loaded", instanceRef.current);
      })
      .catch((error) => {
        console.error(error.message);
      });
  
    // Cleanup
    return () => {
      // Remove the event listeners
      if (instanceRef.current) {
        instanceRef.current.removeEventListener("annotations.change", handleAnnotationsChange);
        instanceRef.current.removeEventListener("annotations.change", handleAnnotationAdded);
        PSPDFKit.unload("#pspdfkit1");
        console.log("Cleanup function called");
      }
    };
  }, [url]);




  const savePdfToServer = async () => {
    try {
      // Capture PDF data from the PSPDFKit instance
      const pdfData = await instanceRef.current.exportPDF();

      // console.log("pdfData", pdfData)
      setArrayBuffer(pdfData)

      // Send PDF data to the server
      const response = await fetch("https://your-server-endpoint.com/save-pdf", {
        method: "POST",
        headers: {
          "Content-Type": "application/pdf",
        },
        body: pdfData,
      });

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

      // console.log('annotation', annotations)




      // Filter annotations for highlights and notes
      // const highlights = annotations.filter(annotation => annotation.type === "highlight" &&  console.log("Highlights:", highlights));
      // const notes = annotations.filter(annotation => annotation.type === "note" && console.log("Notes:", notes));

      // Log highlights and notes in the console
     
      
      

      // Log annotations in JSON format
      // console.log("Changes from PDF: ", JSON.stringify(annotations, null, 2));

      // Save the PDF to the server when annotations change
      savePdfToServer();
    } catch (error) {
      console.error("Error fetching annotations:", error);
    }
  };

  return <div id="pspdfkit1" style={{ width: "100%", height: "100vh" }} />;
}
