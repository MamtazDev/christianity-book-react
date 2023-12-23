import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import { asksHardCopy } from "../../api/books";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const AsksHardCopy = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);
    const form = event.target;
    try {
      const book_id = form.book_id.value;

      if (book_id !== "#") {
        const data = {
          book_id: book_id,
          user_id: user?.data._id,
        };
        const response = await asksHardCopy(data);
        if (response?.status === 200) {
          setLoading(false);
          Swal.fire({
            position: "center",
            icon: "success",
            title: response.message,
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          setLoading(false);
        }
      } else {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Please Select a book",
          showConfirmButton: false,
          timer: 1500,
        });
        setLoading(false);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div>
      <div className="mb_40 mt-5">
        <h3>Asks For BOOK Hard copy</h3>
        <p>Select a Book and asks for hard copy</p>
      </div>

      <form onSubmit={handleSubmit} className="profileSetting ">
        <div className="d-flex justify-content-start flex-wrap align-items-end acount_gap">
          <div className="inputContainer1">
            <label>Book</label>
            <select name="book_id" className="form-control">
              <option value="#" disabled selected>
                Select Book
              </option>
              {user?.data?.purchased_books?.map((item, key) => (
                <option value={item._id}>{item.title}</option>
              ))}
            </select>
          </div>
        </div>

        {loading ? (
          <button type="button" className="mt-2">
            {"Sending Requests..."}
          </button>
        ) : (
          <button type="submit" className="mt-2">
            {"Send Request"}
          </button>
        )}
      </form>
    </div>
  );
};

export default AsksHardCopy;
