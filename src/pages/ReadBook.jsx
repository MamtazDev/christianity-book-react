import React, { useEffect, useState } from "react";
import PageHeading from "../components/Utils/PageHeading";
import ReadBooks from "../components/ReadBook/ReadBooks";
import Pagination from "../components/Utils/Pagination";
import ReadBooks2 from "../components/ReadBook/ReadBooks2";
import ReadBooks3 from "../components/ReadBook/ReadBooks3";

const ReadBook = () => {

  const [document, setDocument] = useState("document.pdf");

  const handleOpen = () => setDocument("another-example.pdf");
  // const handleOpenAnother = () => setDocument("document.pdf");
  
  const handleFileChange = (event) => {
    setDocument(URL.createObjectURL(event.target.files[0]));
  };


  const [arrayBuffer, setArrayBuffer] = useState(null)

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

          <ReadBooks2  setArrayBuffer={setArrayBuffer} url={"https://www.africau.edu/images/default/sample.pdf"}  />
          {/* <ReadBooks3 arrayBuffer={arrayBuffer} url={"https://www.africau.edu/images/default/sample.pdf"}  /> */}
        </div>
        {/* <Pagination /> */}
      </div>
    </>
  );
};

export default ReadBook;
