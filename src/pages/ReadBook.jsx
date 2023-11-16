import React, { useEffect, useState } from "react";
import PageHeading from "../components/Utils/PageHeading";
import ReadBooks from "../components/ReadBook/ReadBooks";
import Pagination from "../components/Utils/Pagination";
import ReadBooks2 from "../components/ReadBook/ReadBooks2";

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

          <ReadBooks2/>
        </div>
        {/* <Pagination /> */}
      </div>
    </>
  );
};

export default ReadBook;
