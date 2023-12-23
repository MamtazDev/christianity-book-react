import React from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import { BASE_URL } from "../../config/confir";

const BooksCard = ({ title, price, coverPic, id, item }) => {
  console.log("item", item);
  const { setBook } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleClick = () => {
    setBook(item);
    navigate(`/read-book/${id}`);
  };

  return (
    <div className="col-12 col-md-6 col-lg-2">
      <button to={`/read-book/${id}`} className="bg-none" onClick={handleClick}>
        <div className="achiveBox">
          <img
            className="w-100"
            src={`${BASE_URL}/files/${coverPic}`}
            alt={`${title}`}
          />
          <span style={{ fontSize: 14 }}>{title}</span>
          <p style={{ fontSize: 13 }}>Price: {price ?? 9.99}</p>
        </div>
      </button>
    </div>
  );
};

export default BooksCard;
