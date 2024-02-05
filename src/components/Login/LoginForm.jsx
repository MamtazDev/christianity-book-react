import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import message from "../../assets/icons/message.png";
import lock from "../../assets/icons/padlock.png";
import eye from "../../assets/icons/eye.png";
import yellowEye from "../../assets/icons/yellowEye.png";
import facebook from "../../assets/icons/facebook.png";
import google from "../../assets/icons/google.png";
import apple from "../../assets/icons/apple.png";
import { AuthContext } from "../../contexts/AuthProvider";
import { addNotifications } from "../../api/notifications";
import { BASE_URL } from "../../config/confir";
import { userLogin } from "../../api/auth";
import logo from "../../assets/images/logo.jpeg";

const LoginForm = () => {
  const { setUser } = useContext(AuthContext);
  const [focusInput, setFocusInput] = useState(null);
  const [look, setLook] = useState(false);
  const navigate = useNavigate();

  const handleFoucsInput = (value, action) => {
    if (action === "focus") {
      setFocusInput(value);
    } else if (action === "blur") {
      setFocusInput(null);
    }
  };
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setErrorMessage("");
    setIsLoading(true);

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    const data = {
      email,
      password,
    };

    try {
      const response = await userLogin(data);
      if (response?.status === 200) {
        // await addNotifications({
        //   title: "User LoggedIn",
        //   content: "User Logged in successfully",
        //   userId: response?.user?._id,
        // });
        const loggedInUser = {
          data: response?.user,
          token: response?.accessTOken,
        };
        setUser(loggedInUser);
        localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
        setErrorMessage("");
        setIsLoading(false);
        navigate("/");
      }
      if (response?.status === 401) {
        setErrorMessage(response?.message);
        setIsLoading(false);
      }
    } catch (error) {
      setErrorMessage(error.message);
      setIsLoading(false);
      console.error("Error:", error.message);
    }

    console.log(data, "daa");

    // try {
    //   const response = await fetch(`${BASE_URL}/api/users/login`, {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(formData),
    //   });

    //   const data = await response.json();
    //   console.log(data);

    //   if (response.ok) {
    //     await addNotifications({
    //       title: "User LoggedIn",
    //       content: "User Logged in successfully",
    //       userId: data?.user?._id,
    //     });
    //     const loggedInUser = { data: data.user, token: data.accessTOken };
    //     setUser(loggedInUser);
    //     localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
    //     Swal.fire({
    //       position: "center",
    //       icon: "success",
    //       title: "Login Successful",
    //       showConfirmButton: false,
    //       timer: 1500,
    //     });
    //     navigate("/");
    //   } else {
    //     console.error(data.message);
    //     alert("Login failed. Please check your email and password.");
    //   }
    // } catch (error) {
    //   console.error("Error:", error.message);
    //   alert("An error occurred. Please try again later.");
    // }
  };

  return (
    <div className="col-12 col-lg-6 logInContainer">
      <div className="logInBox">
        <h5>
          <Link to="/">
            {" "}
            <img style={{ maxHeight: 50 }} src={logo} alt="" />
          </Link>
        </h5>

        <h2>Sign in</h2>
        <div className="headerText">
          <p>If you don't have an account register</p>
          <p>
            You can <Link to="/signup">Register here!</Link>
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
                className="w-100"
                type="email"
                name="email"
                placeholder="Enter your email address"
                autoComplete="off"
                onFocus={() => handleFoucsInput("email", "focus")}
                onBlur={() => handleFoucsInput("email", "blur")}
                required
              />
            </div>
          </div>
          <div className="w-100">
            <label>Password</label>
            <div
              className={`inputContainer ${
                focusInput === "password" && "focusInput"
              }`}
            >
              <img src={lock} alt="" />
              <input
                className="w-100"
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

          <div className="checkBoxInputContainer">
            <div>
              <label
                htmlFor="remember_me"
                className="d-flex align-items-center"
              >
                <input type="checkbox" name="" id="remember_me" />
                <p style={{ marginLeft: "15px" }}>Remember me</p>
              </label>
            </div>
            <Link to="/reset-password">Forgot Password?</Link>
          </div>

          <p className="mb-3 text-danger ">{errorMessage}</p>

          <div className="logInActionContainer">
            <button
              type="submit"
              className="sign-in-button"
              disabled={isLoading}
              style={{ cursor: `${isLoading ? "not-allowed" : "pointer"}` }}
            >
              {isLoading ? "Signing in..." : "Sign In"}
            </button>

            {/* <p>or continue with</p>

            <div>
              <button type="button" className="social_button">
                <img src={facebook} alt="" />
              </button>
              <button type="button" className="social_button">
                <img src={apple} alt="" />
              </button>
              <button type="button" className="social_button">
                <img src={google} alt="" />
              </button>
            </div> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
