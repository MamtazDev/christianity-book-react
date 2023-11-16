import PSPDFKit from "pspdfkit";
import { useEffect } from "react";
import pdfBooks from '../../assets/book/book.pdf'
// G:\FREELANCE PROJECT\OTHERS\devidlory\christianity-book-react\node_modules\pspdfkit\dist
// We need to inform PSPDFKit where to look for its library assets, i.e. the location of the `pspdfkit-lib` directory.
const baseUrl = `${window.location.protocol}//${window.location.host}/node_modules/pspdfkit/dist/`;


export default function ReadBooks2() {
  // Load the PDF when the component mounts
  useEffect(() => {
    console.log('base',baseUrl)

    PSPDFKit.load({
      baseUrl,
      disableWebAssemblyStreaming: true,
      container: "#pspdfkit",
      document: pdfBooks,
      
    })
    .then(instance => {
      instance.setViewState(viewState => {
        return (
             viewState.set("sidebarMode", PSPDFKit.SidebarMode.THUMBNAILS)
        )
      });
     
      console.log("PSPDFKit loaded", instance);
    })
    .catch(error => {
      console.error(error.message);
    });
      
    // PSPDFKit.load({
    //   container: "#your-container-id",
    //   document: pdfBooks,
    //   // other configuration options
    // })
    // .then(instance => {
    //   console.log("PSPDFKit loaded", instance);
    // })
    // .catch(error => {
    //   console.error(error.message);
    // });

    // Cleanup
    // return () => PSPDFKit.unload("#your-container-id");
  }, []);

    return <div id="pspdfkit" style={{ width: "100%", height: "100vh" }} />;
  }
  
