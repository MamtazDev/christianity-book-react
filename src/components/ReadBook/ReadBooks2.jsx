import React, { useContext } from "react";

import PdfViewerComponent from "./PdfViewerComponent";

export default function ReadBooks2({ allFiles }) {
  return (
    <>
      <PdfViewerComponent allFiles={allFiles && allFiles[0]} />
    </>
  );
}
