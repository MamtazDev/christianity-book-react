import React, { useState } from "react";
import rightArrow from "../../assets/images/right_arrow.png";
import "./Contact.css";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
const ContactForm = () => {
  const navigate = useNavigate(); // Use useNavigate for navigation
  // const location = useLocation();
  // const authorLink = location.pathname;

  const [phoneNumber, setPhoneNumber] = useState('');
  const [formData, setFormData] = useState({
    fullName: "",
    emailAddress: "",
    country: "",
    phoneNumber: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    const numericValue = e.target.value.replace(/[^0-9]/g, '');
    setPhoneNumber(numericValue);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Message sent successfully",
      showConfirmButton: false,
      timer: 1500,
    });
    setFormData({
      fullName: "",
      emailAddress: "",
      country: "",
      phoneNumber: "",
      message: "",
    });
    navigate('/author-chat');
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
                onChange={handleInputChange}
                className="w-100"
                type="text"
                placeholder="John Duo"
                name="fullName"
              />
            </div>
            <div className="w-100">
              <label>Email Address</label>
              <input
                onChange={handleInputChange}
                className="w-100"
                type="email"
                placeholder="johnduo@gmail.com"
                name="emailAddress"
              />
            </div>
          </div>
          <div className="d-flex gap-4 mb-5 contact_gap">
            <div className="w-100">
              <label>Country</label>
              <input
                onChange={handleInputChange}
                className="w-100"
                type="text"
                placeholder="United Kingdom"
                name="country"
              />
            </div>
            <div className="w-100">
              <label>Phone Number</label>
              <input
                onChange={handleInputChange}
                className="w-100"
                type="text"
                placeholder="+1 123 456 789"
                name="phoneNumber"
                value={phoneNumber}
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
              onChange={handleInputChange}
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
