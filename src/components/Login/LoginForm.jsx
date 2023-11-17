// import React, { useState } from "react";
// import "./LoginForm.css";
// import { Link, useNavigate } from "react-router-dom";
// import message from "../../assets/icons/message.png";
// import lock from "../../assets/icons/padlock.png";
// import eye from "../../assets/icons/eye.png";
// import yellowEye from "../../assets/icons/yellowEye.png";
// import facebook from "../../assets/icons/facebook.png";
// import google from "../../assets/icons/google.png";
// import apple from "../../assets/icons/apple.png";
// import Swal from "sweetalert2";

// const LoginForm = () => {
//   const [focusInput, setFocusInput] = useState(null);
//   const [look, setLook] = useState(false);
//   const navigate = useNavigate();

//   const handleFoucsInput = (value, action) => {
//     if (action === "focus") {
//       setFocusInput(value);
//     } else if (action === "blur") {
//       setFocusInput(null);
//     }
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const formData = new FormData(event.target);
//     const email = formData.get("email");
//     const password = formData.get("password");
//     const userData = JSON.parse(localStorage.getItem("userData")) || [];
//     const user = userData.find((user) => user.email === email);

//     if (!user) {
//       alert("Email not found. Please register first.");
//     } else if (user.password !== password) {
//       alert("Incorrect password. Please try again.");
//     } else {
//       const loggedInUser = { email: user.email, username: user.username };
//       localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
//       Swal.fire({
//         position: 'center',
//         icon: 'success',
//         title: 'Login Successful',
//         showConfirmButton: false,
//         timer: 1500
//       })
//       navigate("/");
//     }
//   };

//   return (
//     <div className="col-12 col-lg-6 logInContainer">
//       <div className="logInBox">
//         <h5>
//           <Link to="/">Your Logo</Link>
//         </h5>

//         <h2>Sign in</h2>
//         <div className="headerText">
//           <p>If you don't have an account register</p>
//           <p>
//             You can <Link to="/signup">Register here!</Link>
//           </p>
//         </div>

//         <form onSubmit={handleSubmit}>
//           <div style={{ marginBottom: "49px" }}>
//             <label>Email</label>
//             <div
//               className={`inputContainer ${focusInput === "email" && "focusInput"
//                 }`}
//             >
//               <img src={message} alt="" />
//               <input
//                 className="w-100"
//                 type="email"
//                 name="email"
//                 placeholder="Enter your email address"
//                 autoComplete="off"
//                 onFocus={() => handleFoucsInput("email", "focus")}
//                 onBlur={() => handleFoucsInput("email", "blur")}
//               />
//             </div>
//           </div>
//           <div className="w-100">
//             <label>Password</label>
//             <div
//               className={`inputContainer ${focusInput === "password" && "focusInput"
//                 }`}
//             >
//               <img src={lock} alt="" />
//               <input
//                 className="w-100"
//                 type={look ? "text" : "password"}
//                 name="password"
//                 placeholder="Enter your Password"
//                 autoComplete="off"
//                 onFocus={() => handleFoucsInput("password", "focus")}
//                 onBlur={() => handleFoucsInput("password", "blur")}
//               />
//               <img
//                 style={{ cursor: "pointer" }}
//                 src={look ? yellowEye : eye}
//                 alt=""
//                 onClick={() => setLook(!look)}
//               />
//             </div>
//           </div>

//           <div className="checkBoxInputContainer">
//             <div>
//               <label htmlFor="remember_me" className="d-flex align-items-center">
//                 <input type="checkbox" name="" id="remember_me" />
//                 <p style={{ marginLeft: '15px' }}>
//                   Remember me
//                 </p>
//               </label>
//             </div>
//             <Link to="/reset-password">Forgot Password?</Link>
//           </div>

//           <div className="logInActionContainer">
//             <button type="submit" className="sign-in-button">
//               Sign In
//             </button>

//             <p>or continue with</p>

//             <div>
//               <button type="button" className="social_button">
//                 <img src={facebook} alt="" />
//               </button>
//               <button type="button" className="social_button">
//                 <img src={apple} alt="" />
//               </button>
//               <button type="button" className="social_button">
//                 <img src={google} alt="" />
//               </button>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LoginForm;
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import message from "../../assets/icons/message.png";
import lock from "../../assets/icons/padlock.png";
import eye from "../../assets/icons/eye.png";
import yellowEye from "../../assets/icons/yellowEye.png";
import facebook from "../../assets/icons/facebook.png";
import google from "../../assets/icons/google.png";
import apple from "../../assets/icons/apple.png";

const LoginForm = () => {
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const response = await fetch('http://localhost:8000/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      console.log(data)
      if (response.ok) {
        const loggedInUser = { email: data.user.email, username: data.user.userName };
        localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));

        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Login Successful',
          showConfirmButton: false,
          timer: 1500
        });

        navigate("/");
      } else {
        console.error(data.message);
        alert("Login failed. Please check your email and password.");
      }
    } catch (error) {
      console.error('Error:', error.message);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="col-12 col-lg-6 logInContainer">
      <div className="logInBox">
        <h5>
          <Link to="/">Your Logo</Link>
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
              className={`inputContainer ${focusInput === "email" && "focusInput"
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
              />
            </div>
          </div>
          <div className="w-100">
            <label>Password</label>
            <div
              className={`inputContainer ${focusInput === "password" && "focusInput"
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
              <label htmlFor="remember_me" className="d-flex align-items-center">
                <input type="checkbox" name="" id="remember_me" />
                <p style={{ marginLeft: '15px' }}>
                  Remember me
                </p>
              </label>
            </div>
            <Link to="/reset-password">Forgot Password?</Link>
          </div>

          <div className="logInActionContainer">
            <button type="submit" className="sign-in-button">
              Sign In
            </button>

            <p>or continue with</p>

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
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
