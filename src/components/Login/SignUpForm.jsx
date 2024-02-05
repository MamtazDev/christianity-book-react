import React, { useContext, useState } from "react";
import message from "../../assets/icons/message.png";
import lock from "../../assets/icons/padlock.png";
import eye from "../../assets/icons/eye.png";
import yellowEye from "../../assets/icons/yellowEye.png";
import user from "../../assets/icons/user.png";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import { userSignup } from "../../api/auth";
import logo from "../../assets/images/logo.jpeg";

const SignUpForm = () => {
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [focusInput, setFocusInput] = useState(null);
  const [look, setLook] = useState(false);
  const [lookConfirm, setLookConfirm] = useState(false);

  const handleFoucsInput = (value, action) => {
    if (action === "focus") {
      setFocusInput(value);
    } else if (action === "blur") {
      setFocusInput(null);
    }
  };

  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/;

  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrorMessage("");
    setIsLoading(true);

    const form = e.target;

    const email = form.email.value;
    const userName = form.userName.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    const data = {
      role: "user",
      email,
      userName,
      password,
    };

    if (!passwordRegex.test(password)) {
      setErrorMessage(
        "Password must contain at least one uppercase, one lowercase, one special character, one digit and it should be at least 8 characters long.",
      );
      setIsLoading(false);
      return;
    } else if (password !== confirmPassword) {
      setErrorMessage("Password is not matched!");
      setIsLoading(false);
      return;
    } else {
      try {
        const response = await userSignup(data);

        if (response?.status === 403) {
          setErrorMessage(response?.message);
          setIsLoading(false);
        }

        if (response?.status === 200) {
          const loggedInUser = {
            data: response?.user,
            token: response?.accessTOken,
          };
          localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
          setUser(loggedInUser);
          setErrorMessage("");
          setIsLoading(false);
          navigate("/complete-profile");
        }
      } catch (error) {
        setErrorMessage(error.message);
        setIsLoading(false);
        console.error("Error:", error.message);
      }
    }
  };

  return (
    <div className="col-12 col-lg-6 logInContainer">
      <div className="logInBox">
        <h5>
          <Link to="/">
            <img style={{ maxHeight: 50 }} src={logo} alt="" />
          </Link>
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
                type="email"
                name="email"
                required
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
                required
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
                required
              />
              <img
                style={{ cursor: "pointer" }}
                src={look ? yellowEye : eye}
                alt=""
                onClick={() => setLook(!look)}
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
                required
              />

              <img
                style={{ cursor: "pointer" }}
                src={lookConfirm ? yellowEye : eye}
                alt=""
                onClick={() => setLookConfirm(!lookConfirm)}
              />
            </div>
          </div>
          <p className="mb-3 text-danger ">{errorMessage}</p>

          <div className="logInActionContainer ">
            <button
              className="sign-in-button"
              type="submit"
              disabled={isLoading}
              style={{ cursor: `${isLoading ? "not-allowed" : "pointer"}` }}
            >
              {isLoading ? "Signing up..." : "Sign Up"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
