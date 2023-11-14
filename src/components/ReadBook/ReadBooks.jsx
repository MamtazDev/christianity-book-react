import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import pdfBooks from '../../assets/book/book.pdf'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const ReadBooks = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div className=" previewBook mb-ebook mb-5">
      <div className="row bookHeight m-0 gap-5">
        <div className="col-lg-3 bookScroll">
          <div className="bookIndex">

          </div>
        </div>

        <div className="col-lg-9">
          <div className="detalisPage">
            <Document
              file={pdfBooks} // Replace with your PDF file URL or path
              onLoadSuccess={onDocumentLoadSuccess}
            >
              <Page
                pageNumber={pageNumber}
                width={600} // Adjust the width as needed
              />
            </Document>
            <p>
              Page {pageNumber} of {numPages}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ReadBooks;
