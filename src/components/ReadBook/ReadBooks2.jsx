import React, { useEffect, useRef } from "react";
import PSPDFKit from "pspdfkit";
import pdfBooks from "../../assets/book/book.pdf";

const baseUrl = `${window.location.protocol}//${window.location.host}/node_modules/pspdfkit/dist/`;

export default function ReadBooks2({ url }) {
  const instanceRef = useRef(null);

  useEffect(() => {
    PSPDFKit.load({
      baseUrl,
      disableWebAssemblyStreaming: true,
      container: "#pspdfkit",
      document: url,
    })
      .then((loadedInstance) => {
        // Set the instance variable using the useRef
        instanceRef.current = loadedInstance;

        // Add event listener for annotations change
        instanceRef.current.addEventListener("annotations.change", handleAnnotationsChange);

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
    return () => PSPDFKit.unload("#pspdfkit");
  }, []);

  const savePdfToServer = async () => {
    try {
      // Capture PDF data from the PSPDFKit instance
      const pdfData = await instanceRef.current.exportPDF();

      console.log("pdfData", pdfData)

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

      // Log annotations in JSON format
      console.log("Changes from PDF: ", JSON.stringify(annotations, null, 2));

      // Save the PDF to the server when annotations change
      savePdfToServer();
    } catch (error) {
      console.error("Error fetching annotations:", error);
    }
  };

  return <div id="pspdfkit" style={{ width: "100%", height: "100vh" }} />;
}
