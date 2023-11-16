import React, { useEffect, useState } from "react";
import PageHeading from "../components/Utils/PageHeading";
import PdfViewerComponent from "../components/ReadBook/PDFReader";

const ReadBook = () => {

  const [document, setDocument] = useState("document.pdf");

  const handleOpen = () => setDocument("another-example.pdf");
  // const handleOpenAnother = () => setDocument("document.pdf");
  
  const handleFileChange = (event) => {
    setDocument(URL.createObjectURL(event.target.files[0]));
  };

  return (
    <>
      <div className="container ">
        <div className="mb-5">
          <PageHeading path="/read-book">Read Book</PageHeading>
          <h3 className="mb-5 bookName">
            Christianity is My Mental Disorder: A Client
            <br className="d-none d-lg-block" />
            Guide to Recovery.
          </h3>
          
          {/* <ReadBooks /> */}
          <div className="App">
            <input type="file" accept="application/pdf" onChange={handleFileChange} />

            <button className="App-button" onClick={handleOpen}>
              Open another document
            </button>

            {/* <button className="App-button" onClick={handleOpenAnother}>
              Open another handleOpenAnother
            </button> */}
            <div className="">
              <PdfViewerComponent document={document} />
            </div>
          </div>


          {/* <PDFReader/> */}
        </div>
        {/* <Pagination /> */}
      </div>
    </>
  );
};

export default ReadBook;
