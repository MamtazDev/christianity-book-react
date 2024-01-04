import React, { useContext, useEffect, useState } from "react";
import PageHeading from "../components/Utils/PageHeading";
import AchiveCard from "../components/Home/AchiveCard";
import { BASE_URL } from "../config/confir";
import axios from "axios";
import { Link } from "react-router-dom";
import BooksCard from "../components/Home/BooksCard";
import { AuthContext } from "../contexts/AuthProvider";

export default function Books() {
  const [allBooks, setAllBooks] = useState(null);

  const { user } = useContext(AuthContext);

  const getPdf = async () => {
    const result = await axios.get(`${BASE_URL}/api/books/get-files`);
    setAllBooks(result.data.data);
  };

  const filterBookHandler = async (user_id) => {
    console.log(user_id != 0);
    if (user_id != 0) {
      setAllBooks(user?.data?.purchased_books);
    } else {
      getPdf();
    }
  };

  useEffect(() => {
    getPdf();
  }, []);

  return (
    <>
      <div className="mb_100">
        <div className="container">
          <PageHeading path="/faq">FAQ's</PageHeading>
          <h2 className="mb_40">
            Frequently Asked <span className="txt_curve">Questions</span>
          </h2>
          <div className="filter-book mb-4">
            <h4>Filter By Books</h4>
            <select
              className="form-control mt-2"
              name="book_id"
              onChange={(e) => filterBookHandler(e.target.value)}
            >
              <option selected disabled>
                Select Book
              </option>
              <option value={user?.data?._id}>My Book</option>
              <option value={0}>All Book</option>
            </select>
          </div>
          <div className="row p-0 ">
            {allBooks?.map(
              (item) =>
                item.price != 0 && (
                  <BooksCard
                    key={item._id}
                    title={item.title}
                    coverPic={item.coverPic}
                    price={item.price}
                    id={item._id}
                    item={item}
                  />
                ),
            )}
          </div>
        </div>
      </div>
    </>
  );
}
