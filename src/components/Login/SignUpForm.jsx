import React, { useContext, useState } from "react";
import message from "../../assets/icons/message.png";
import lock from "../../assets/icons/padlock.png";
import eye from "../../assets/icons/eye.png";
import yellowEye from "../../assets/icons/yellowEye.png";
import user from "../../assets/icons/user.png";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const SignUpForm = () => {
  const { setUser } = useContext(AuthContext);

  const [focusInput, setFocusInput] = useState(null);
  const [look, setLook] = useState(false);
  const [lookConfirm, setLookConfirm] = useState(false);
  const navigate = useNavigate();
  const handleFoucsInput = (value, action) => {
    if (action === "focus") {
      setFocusInput(value);
    } else if (action === "blur") {
      setFocusInput(null);
    }
  };
  // form data
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    userName: "",
    role: "user",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/api/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log(data);
      const loggedInUser = { data: data.user, token: data.accessTOken };
      localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
      setUser(loggedInUser);
      setFormData({
        email: "",
        password: "",
        confirmPassword: "",
        userName: "",
      });
      if (response.ok) {
        // User created successfully, you can handle the response data here
        navigate("/complete-profile");
        console.log(data);
      } else {
        // Handle error response
        console.error(data.message);
      }
    } catch (error) {
      // Handle network or other errors
      console.error("Error:", error.message);
    }
  };

  return (
    <div className="col-12 col-lg-6 logInContainer">
      <div className="logInBox">
        <h5>
          <Link to="/">Your Logo</Link>
        </h5>

        <h2>Sign up</h2>
        <div className="headerText">
          <p>If you don't have an account register</p>
          <p>
            You can <Link to="/login">Login here!</Link>
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "49px" }}>
            <label>Email</label>
            <div
              className={`inputContainer ${
                focusInput === "email" && "focusInput"
              }`}
            >
              <img src={message} alt="" />
              <input
                placeholder="Enter your email address"
                autoComplete="off"
                onFocus={() => handleFoucsInput("email", "focus")}
                onBlur={() => handleFoucsInput("email", "blur")}
                // onChange={handleSubmit}
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div style={{ marginBottom: "49px" }}>
            <label>Username</label>
            <div
              className={`inputContainer ${
                focusInput === "userName" && "focusInput"
              }`}
            >
              <img src={user} alt="" />
              <input
                type="text"
                name="userName"
                placeholder="Enter your User name"
                autoComplete="off"
                onFocus={() => handleFoucsInput("userName", "focus")}
                onBlur={() => handleFoucsInput("userName", "blur")}
                value={formData.userName}
                onChange={handleChange}
              />
            </div>
          </div>
          <div style={{ marginBottom: "49px" }}>
            <label>Create Password</label>
            <div
              className={`inputContainer ${
                focusInput === "password" && "focusInput"
              }`}
            >
              <img src={lock} alt="" />
              <input
                type={look ? "text" : "password"}
                name="password"
                placeholder="Enter your Password"
                autoComplete="off"
                onFocus={() => handleFoucsInput("password", "focus")}
                onBlur={() => handleFoucsInput("password", "blur")}
              />
              <img
                style={{ cursor: "pointer" }}
                src={look ? yellowEye : eye}
                alt=""
                onClick={() => setLook(!look)}
                value={formData.password}
                onChange={handleChange}
              />
            </div>
          </div>

          <div style={{ marginBottom: "58px" }}>
            <label>Confirm Password</label>
            <div
              className={`inputContainer ${
                focusInput === "confirmPassword" && "focusInput"
              }`}
            >
              <img src={lock} alt="" />
              <input
                type={lookConfirm ? "text" : "password"}
                name="confirmPassword"
                placeholder="Enter your Password"
                autoComplete="off"
                onFocus={() => handleFoucsInput("confirmPassword", "focus")}
                onBlur={() => handleFoucsInput("confirmPassword", "blur")}
                value={formData.confirmPassword}
                onChange={handleChange}
              />

              <img
                style={{ cursor: "pointer" }}
                src={lookConfirm ? yellowEye : eye}
                alt=""
                onClick={() => setLookConfirm(!lookConfirm)}
              />
            </div>
          </div>

          <div className="logInActionContainer ">
            <button className="sign-in-button" type="submit">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
