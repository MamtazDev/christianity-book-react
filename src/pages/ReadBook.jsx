import React, { useContext, useEffect, useState } from "react";
import PageHeading from "../components/Utils/PageHeading";
// import ReadBooks from "../components/ReadBook/ReadBooks";

import ReadBooks2 from "../components/ReadBook/ReadBooks2";

import { AuthContext } from "../contexts/AuthProvider";
import { useNavigate } from "react-router";
import { BASE_URL } from "../config/confir";

import axios from "axios";
import { useParams } from "react-router-dom";

const ReadBook = () => {
  const [document, setDocument] = useState("document.pdf");
  const { id } = useParams();

  const { user, bookId, setBookId } = useContext(AuthContext);
  const [authChecked, setAuthChecked] = useState();

  const [allFiles, setAllFiles] = useState(null);

  const navigate = useNavigate();

  const filterBookHandler = async (id) => {
    const result = await axios.get(`${BASE_URL}/api/books/getFilesById/${id}`);
    setAllFiles(result.data.data);
  };

  useEffect(() => {
    filterBookHandler(id);
  }, [id]);

  useEffect(() => {
    let isPurchased = user?.data?.purchased_books?.find(
      (obj) => obj._id === id,
    );
    if (!isPurchased) {
      setBookId(id);
      navigate(`/subscription/${id}`);
    }

    setAuthChecked(true);
  }, [user]);

  return authChecked ? (
    <>
      <div className="container ">
        <div className="mb-5">
          <PageHeading path="/read-book">Read Book</PageHeading>
          <h3 className="mb-1 bookName">
            Christianity is My Mental Disorder: A Client
            <br className="d-none d-lg-block" />
            Guide to Recovery.
          </h3>

          <ReadBooks2 allFiles={allFiles} />
        </div>
      </div>
    </>
  ) : (
    ""
  );
};

export default ReadBook;
