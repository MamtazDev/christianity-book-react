import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { changePassword } from "../../api/auth";
import Swal from "sweetalert2";
import { AuthContext } from "../../contexts/AuthProvider";
import logo from "../../assets/images/logo.jpeg";

const ChangePasswordForm = () => {
  const { resetPasswordInfo } = useContext(AuthContext);
  const [focusInput, setFocusInput] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const handleFoucsInput = (value, action) => {
    if (action === "focus") {
      setFocusInput(value);
    } else if (action === "blur") {
      setFocusInput(null);
    }
  };

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/;

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    setIsLoading(true);
    setErrorMessage("");

    const newPassword = form.password.value;
    const password = form.confirm.value;

    if (newPassword === password) {
      if (!passwordRegex.test(password)) {
        setErrorMessage(
          "Password must contain at least one uppercase, one lowercase, one special character, one digit and it should be at least 8 characters long.",
        );
        setIsLoading(false);
        return;
      }
      try {
        const response = await changePassword({
          userEmail: resetPasswordInfo?.email,
          data: { password: password },
        });

        if (response?.status === 200) {
          localStorage.removeItem("loggedInUser");
          setIsLoading(false);
          navigate("/login");
        } else if (response?.message === "User not exist!") {
          setIsLoading(false);
          setErrorMessage(response?.message);
        } else {
          setIsLoading(false);
        }
      } catch (error) {
        setIsLoading(false);
        console.log(error);
        setErrorMessage(error);
      }
    } else {
      setIsLoading(false);
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Password is not matched!",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  return (
    <div className="col-12 col-lg-6 logInContainer">
      <div className="logInBox" style={{ height: "80%" }}>
        <h5>
          <Link to="/">
            <img style={{ maxHeight: 50 }} src={logo} alt="" />
          </Link>
        </h5>

        <div className="h-100 w-100 d-flex  ">
          <div className=" w-100 my-auto">
            <h2>Change Password</h2>
            <div className="headerText">
              <p>Please modify your password for security purposes!</p>
            </div>

            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: "30px" }}>
                <label>Enter New Password</label>
                <div
                  className={`inputContainer ${
                    focusInput === "new" && "focusInput"
                  }`}
                >
                  <input
                    type="text"
                    name="password"
                    placeholder="New Password"
                    autoComplete="off"
                    onFocus={() => handleFoucsInput("new", "focus")}
                    onBlur={() => handleFoucsInput("new", "blur")}
                  />
                </div>
              </div>
              <div style={{ marginBottom: "30px" }}>
                <label>Confirm New Password</label>
                <div
                  className={`inputContainer ${
                    focusInput === "confirm" && "focusInput"
                  }`}
                >
                  <input
                    type="text"
                    name="confirm"
                    placeholder="Confrim Password"
                    autoComplete="off"
                    onFocus={() => handleFoucsInput("confirm", "focus")}
                    onBlur={() => handleFoucsInput("confirm", "blur")}
                  />
                </div>
              </div>

              <div className="logInActionContainer">
                <button
                  type="submit"
                  className="sign-in-button"
                  disabled={isLoading}
                  style={{ cursor: `${isLoading ? "not-allowed" : "pointer"}` }}
                >
                  {isLoading ? "Changing Password..." : "Change Password"}
                </button>
              </div>
            </form>
            <p className="text-danger mt-2">{errorMessage}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePasswordForm;
