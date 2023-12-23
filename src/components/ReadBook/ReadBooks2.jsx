import React, { useContext } from "react";

import pdfBooks from "../../assets/book/RFT-Part-1.pdf";

import PdfViewerComponent from "./PdfViewerComponent";


export default function ReadBooks2({ audios, allFiles }) {

  return (
    <>
      <PdfViewerComponent
        document={pdfBooks}
        audios={audios}
        allFiles={allFiles && allFiles[0]}
      />
    </>
  );
}
