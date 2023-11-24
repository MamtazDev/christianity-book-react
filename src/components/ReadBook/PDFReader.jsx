// import { useEffect, useRef } from "react";

// export default function PdfViewerComponent(props) {
//   const containerRef = useRef(null);

//   useEffect(() => {
//     const container = containerRef.current;
//     let PSPDFKit;

//     (async function () {
//       PSPDFKit = await import("pspdfkit");
//       await PSPDFKit.load({
//         // Container where PSPDFKit should be mounted.
//         container,
//         // The document to open.
//         document: props.document,
//         // Use the public directory URL as a base URL. PSPDFKit will download its library assets from here.
//         baseUrl: `${window.location.protocol}//${window.location.host}/${process.env.PUBLIC_URL}`,
//       });
//     })();

//     return () => PSPDFKit && PSPDFKit.unload(container);
//   }, [props.document]);

//   return <div ref={containerRef} style={{ width: "100%", height: "90vh" }} />;
// }



// import React, { useEffect, useRef } from "react";

// export default function PdfViewerComponent(props) {
//   const containerRef = useRef(null);
//   let instance;
//   const container = containerRef.current;
  
//   useEffect(() => {

//     console.log("useEffect: Component mounted");


//     (async function () {
//       instance = await import("pspdfkit").then((pspdfkit) => pspdfkit.default);
//       await instance.load({
//         container,
//         document: props.document,
//         baseUrl: `${window.location.protocol}//${window.location.host}/${process.env.PUBLIC_URL}`,
//         // Enable the "Note" tool in the UI
//         enableAnnotationToolbar: true,
//       });

//       // Add an event listener to listen for annotation create events
//       // instance.addEventListener("annotations.create", (event) => {
//       //   const { annotations } = event;
//       //   // Log information about the created annotations
//       //   console.log("Annotations created:", annotations);
//       // });
//     })();

//     return () => {
//       if (instance) {
//         instance.unload(container);
//       }
//     };
//   }, [props.document]);

//   return <div ref={containerRef} style={{ width: "500px", height: "90vh" }} />;
// }





import React, { useEffect, useRef } from "react";

export default function PdfViewerComponent(props) {
  const containerRef = useRef(null);
  let instance;


  useEffect(() => {
    const container = containerRef.current;

    (async function () {
      instance = await import("pspdfkit").then((pspdfkit) => pspdfkit.default);
      await instance.load({
        container,
        document: props.document,
        baseUrl: `${window.location.protocol}//${window.location.host}/${process.env.PUBLIC_URL}`,
        // Enable the "Note" tool in the UI
        enableAnnotationToolbar: true,
      });

      // Add an event listener to listen for annotation create events
      instance.addEventListener("annotations.create", (event) => {
        const { annotations } = event;
        // Log information about the created annotations
        console.log("Annotations created:", annotations);
      });
    })();

    return () => {
      if (instance) {
        instance.unload(container);
      }
    };
  }, [props.document]);

  return <div ref={containerRef} style={{ width: "100%", height: "90vh" }} />;
}



