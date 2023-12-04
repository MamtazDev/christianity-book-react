import React, { useContext, useState } from "react";
import rightArrow from "../../assets/images/right_arrow.png";
import "./Contact.css";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import {
  addConversationBySenderReciver,
  addMessage,
  sendMailToAuthor,
} from "../../api/conversations";
const ContactForm = () => {
  const navigate = useNavigate(); // Use useNavigate for navigation
  // const location = useLocation();
  // const authorLink = location.pathname;

  const { user, setContactMessage } = useContext(AuthContext);

  console.log(user?.data, "uss");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const message = e.target.message.value;
    const contactInfo = {
      name: e.target.fullName.value,
      phoneNumber: e.target.phoneNumber.value,
      country: e.target.country.value,
    };

    const data = {
      email: user?.data?.email,
      message,
      contactInfo,
    };

    const response = await sendMailToAuthor(data);

    if (response?.status === 200) {
      navigate("/");
    }

    console.log(response, "ress");

    // if (message) {
    //   setContactMessage(message);
    // }

    // const response = await addConversationBySenderReciver({
    //   senderId: user?.data?._id,
    // });

    // if (response) {
    //   const sendMessageRes = await addMessage({
    //     conversationId: response?._id,
    //     sender: user?.data?._id,
    //     text: message,
    //   });

    //   if (sendMessageRes) {
    //     navigate("/author-chat");
    //   }
    // }

    // Swal.fire({
    //   position: "center",
    //   icon: "success",
    //   title: "Message sent successfully",
    //   showConfirmButton: false,
    //   timer: 1500,
    // });
  };
  return (
    <div className="contactAll">
      <h2 className="mb-3">
        I would love to <span className="txt_curve">hear</span> your
      </h2>
      <h2 className="mb-3"> comments and suggestions!</h2>
      <p className="sub_header">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <div className="contactForm">
        <form onSubmit={handleSubmit}>
          <div className="d-flex gap-4 mb-5 contact_gap">
            <div className="w-100">
              <label>Full Name</label>
              <input
                className="w-100"
                type="text"
                placeholder="John Duo"
                name="fullName"
                value={user?.data?.fullName}
                required
              />
            </div>
            <div className="w-100">
              <label>Email Address</label>
              <input
                className="w-100"
                type="email"
                placeholder="johnduo@gmail.com"
                name="emailAddress"
                value={user?.data?.email}
                readOnly
              />
            </div>
          </div>
          <div className="d-flex gap-4 mb-5 contact_gap">
            <div className="w-100">
              <label>Country</label>
              <input
                className="w-100"
                type="text"
                placeholder="United Kingdom"
                name="country"
                value={user?.data?.country}
                required
              />
            </div>
            <div className="w-100">
              <label>Phone Number</label>
              <input
                className="w-100"
                type="text"
                placeholder="+1 123 456 789"
                name="phoneNumber"
                value={user?.data?.phoneNumber}
                required
              />
            </div>
          </div>
          <div className="mb-3">
            <label className="mb-1">
              Your message <span>*</span>
            </label>
            <textarea
              className="w-100"
              cols="30"
              rows="6"
              name="message"
              required
            ></textarea>
          </div>
          <button type="submit">
            Send Message <img src={rightArrow} alt="" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
