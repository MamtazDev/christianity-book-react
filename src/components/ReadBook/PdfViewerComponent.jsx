import React, { useContext, useEffect, useRef } from "react";
import PSPDFKit from "pspdfkit";
import { BASE_URL } from "../../config/confir";
import { AuthContext } from "../../contexts/AuthProvider";

export default function PdfViewerComponent(props) {
  const containerRef = useRef(null);
  const instanceRef = useRef(null);
  const { blobPdf } = props;

  const { user } = useContext(AuthContext);

  useEffect(() => {
    console.log("blobPdf", blobPdf);
  }, []);


  



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
          baseUrl: `${window.location.protocol}//${window.location.host}/public/`,
        });

        // Add event listener for annotations change
        instanceRef.current.addEventListener(
          "annotations.change",
          handleAnnotationsChange
        );

        console.log("PSPDFKit loaded", instanceRef.current);
      } catch (error) {
        console.error("Error loading PSPDFKit:", error);
      }
    }

    loadPSPDFKit();

    // Cleanup
    return () => {
      if (instanceRef.current) {
        PSPDFKit.unload(container);
        instanceRef.current = null;
      }
    };
  }, [props.document]);

  const savePdfToServer = async () => {
    try {
      // Capture PDF data from the PSPDFKit instance
      const pdfData = await instanceRef.current.exportPDF();
      const blob = new Blob([pdfData], { type: "application/pdf" });

      // Get the size of the Blob
      const blobSize = blob.size;
      console.log("Blob Size: ", blobSize, "bytes");

      const formData = new FormData();
      formData.append("file", blob);

      // Send PDF data to the server
      const response = await fetch(
        // `${BASE_URL}/api/users/updateBuffer/${user?.data?._id}`,
        `${BASE_URL}/upload/${user?.data?._id}`,
        {
          method: "PUT",

          body: formData,
        }
      );

      const resData = await response.json();

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

      // Retrieve annotations from PSPDFKit for a specific page
      const annotations = await instanceRef.current.getAnnotations(pageIndex);

      // Log annotations in JSON format
      console.log("Changes from PDF: ", JSON.stringify(annotations, null, 2));

      // Save the PDF to the server when annotations change
      savePdfToServer();
    } catch (error) {
      console.error("Error fetching annotations:", error);
    }
  };

  // This div element will render the document to the DOM.
  return <div ref={containerRef} style={{ width: "100%", height: "100vh" }} />;
}
