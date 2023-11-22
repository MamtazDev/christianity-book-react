// import PSPDFKit from "pspdfkit";
// import { useEffect } from "react";
// import pdfBooks from '../../assets/book/book.pdf'
// // G:\FREELANCE PROJECT\OTHERS\devidlory\christianity-book-react\node_modules\pspdfkit\dist
// // We need to inform PSPDFKit where to look for its library assets, i.e. the location of the `pspdfkit-lib` directory.
// const baseUrl = `${window.location.protocol}//${window.location.host}/node_modules/pspdfkit/dist/`;


// export default function ReadBooks2() {
//   // Load the PDF when the component mounts
//   useEffect(() => {
//     console.log('base',baseUrl)

//     PSPDFKit.load({
//       baseUrl,
//       disableWebAssemblyStreaming: true,
//       container: "#pspdfkit",
//       document: pdfBooks,
      
//     })
//     .then(instance => {
//       instance.setViewState(viewState => {
//         return (
//              viewState.set("sidebarMode", PSPDFKit.SidebarMode.THUMBNAILS)
//         )
//       });
     
//       console.log("PSPDFKit loaded", instance);
//     })
//     .catch(error => {
//       console.error(error.message);
//     });
      
//     // PSPDFKit.load({
//     //   container: "#your-container-id",
//     //   document: pdfBooks,
//     //   // other configuration options
//     // })
//     // .then(instance => {
//     //   console.log("PSPDFKit loaded", instance);
//     // })
//     // .catch(error => {
//     //   console.error(error.message);
//     // });

//     // Cleanup
//     // return () => PSPDFKit.unload("#your-container-id");
//   }, []);

//     return <div id="pspdfkit" style={{ width: "100%", height: "100vh" }} />;
//   }
  



import React, { useEffect, useRef } from "react";
import PSPDFKit from "pspdfkit";
import pdfBooks from "../../assets/book/book.pdf";

const baseUrl = `${window.location.protocol}//${window.location.host}/node_modules/pspdfkit/dist/`;

export default function ReadBooks2({url}) {
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


  // const arrayBuffer = await instance.exportPDF();
  // const blob = new Blob([arrayBuffer], { type: 'application/pdf' });
  // const formData = new FormData();
  // formData.append("file", blob);
  // await fetch("/upload", {
  //   method: "POST",
  //   body: formData
  // });

  const handleAnnotationsChange = async () => {
    try {
      // Specify the page index (e.g., 0 for the first page)
      const pageIndex = 0;

      // Retrieve annotations (notes, bookmarks, etc.) from PSPDFKit for a specific page
      const annotations = await instanceRef.current.getAnnotations(pageIndex);

      // Log annotations in JSON format
      console.log("Changes from PDF: ",JSON.stringify(annotations, null, 2));
    } catch (error) {
      console.error("Error fetching annotations:", error);
    }
  };

  return <div id="pspdfkit" style={{ width: "100%", height: "100vh" }} />;
}