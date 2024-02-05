import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import { asksHardCopy, getUserRequests } from "../../api/books";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import SubscriptionModal from "../Modals/SubscriptionModal";

const AsksHardCopy = () => {
  const { user } = useContext(AuthContext);

  const [loading, setLoading] = useState(false);

  const [showModal, setShowModal] = useState(false);

  const [selectedBook, setSelectedBook] = useState(null);

  const [allRequest, setAllRequest] = useState([]);

  const handleRequest = () => {
    const requestedBook = allRequest.find((i) => i.book._id === selectedBook);
    if (requestedBook) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "You have already requested for this book.",
      });
      return;
    } else if (selectedBook) {
      setShowModal(true);
    } else {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Please Select a book",
      });
      return;
    }
  };

  const handleAskForHardCopy = async (paymentId) => {
    try {
      const book_id = selectedBook;

      if (book_id) {
        const data = {
          book_id: book_id,
          user_id: user?.data._id,
          paymentId: paymentId,
        };
        const response = await asksHardCopy(data);
        if (response?.status === 200) {
          setLoading(false);
          getRequests();
          // Swal.fire({
          //   position: "center",
          //   icon: "success",
          //   title: response.message,
          //   showConfirmButton: false,
          //   timer: 1500,
          // });
        } else {
          setLoading(false);
        }
      }
      // else {
      //   Swal.fire({
      //     position: "center",
      //     icon: "error",
      //     title: "Please Select a book",
      //     showConfirmButton: false,
      //     timer: 1500,
      //   });
      //   setLoading(false);
      // }
    } catch (error) {
      console.log("error", error);
    }
  };

  const getRequests = async () => {
    const response = await getUserRequests(user?.data?._id);
    console.log(response, "dfdfddfd");
    setAllRequest(response);
  };

  console.log(allRequest, "ddd");

  useEffect(() => {
    getRequests();
  }, [user]);

  return (
    <div>
      <div className="mb_40 mt-5">
        <h3>Order a signed hard copy (USA only)</h3>
        <p>Select a Book and asks for hard copy</p>
      </div>

      <div className="profileSetting ">
        <div className="d-flex justify-content-start flex-wrap align-items-end acount_gap">
          <div className="inputContainer1">
            <label>Book</label>
            <select
              name="book_id"
              className="form-control"
              onChange={(e) => setSelectedBook(e.target.value)}
            >
              <option value="#" disabled selected>
                Select Book
              </option>
              {user?.data?.purchased_books?.map((item, idx) => (
                <option value={item._id} key={idx}>
                  {item.title}
                </option>
              ))}
            </select>
          </div>
        </div>

        <button type="button" className="mt-2" onClick={handleRequest}>
          Send Request
        </button>
      </div>

      <table
        className="table table-hover mt-5"
        style={{ maxHeight: "500px", overflowY: "scroll" }}
      >
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Book</th>
            <th scope="col">Transaction ID</th>
          </tr>
        </thead>
        <tbody>
          {allRequest &&
            allRequest?.length > 0 &&
            allRequest?.map((item, idx) => (
              <tr key={idx}>
                <th scope="row">{idx + 1}</th>
                <td>{item?.book?.title}</td>
                <td>{item?.paymentId}</td>
              </tr>
            ))}
        </tbody>
      </table>

      <SubscriptionModal
        show={showModal}
        setModalShow={setShowModal}
        handleAskForHardCopy={handleAskForHardCopy}
        onHide={() => setShowModal(false)}
      />
    </div>
  );
};

export default AsksHardCopy;
