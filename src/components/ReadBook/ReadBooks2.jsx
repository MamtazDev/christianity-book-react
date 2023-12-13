import React, { useContext} from "react";

import pdfBooks from "../../assets/book/RFT-Part-1.pdf";

import PdfViewerComponent from "./PdfViewerComponent";

import { AuthContext } from "../../contexts/AuthProvider";


export default function ReadBooks2() {
  const { user } = useContext(AuthContext);
  return (
    <>
      <PdfViewerComponent
        document={pdfBooks}
      />
    </>
  );
}
