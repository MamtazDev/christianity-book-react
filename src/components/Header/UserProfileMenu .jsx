import React from "react";
import "./Header.css";
import chat_icon from "../../assets/images/chat_icon.png";
import notification_icon from "../../assets/images/notification_icon.png";
import profile_round from "../../assets/images/profile_round.png";
import drop_down from "../../assets/images/drop_down.png";
import accountSetting from "../../assets/images/accountSetting.png";
import logout from "../../assets/images/logout.png";
import faq from "../../assets/images/faq.png";
import notes from "../../assets/images/notes.png";
import highlight from "../../assets/images/highlight.png";
import bookmark from "../../assets/images/bookmark.png";
import { Link, NavLink, useNavigate } from "react-router-dom";

const UserProfileMenu = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    navigate("/login");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Your Logo
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? " nav-link menu active__hov" : "nav-link"
                  }
                  aria-current="page"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? " nav-link menu active__hov" : "nav-link"
                  }
                  to="/contact"
                >
                  Contact Me
                </NavLink>
              </li>
            </ul>
            <div className="d-flex align-items-center profile_menu">
              <Link to="/author-chat">
                <img src={chat_icon} alt="Chats" />
              </Link>
              <Link to="/notification">
                <img src={notification_icon} alt="Notifications" />
              </Link>
              <div className="profileShow d-flex align-items-center gap-1">
                <Link to="/account-settings">
                  <img src={profile_round} alt="Profile Image" />
                </Link>
                <img className="arrow" src={drop_down} alt="Settings" />
                <div className="child">
                  <div className="profileName d-flex align-items-center gap-3">
                    <img
                      className="img-fluid"
                      src={profile_round}
                      alt="Profile Image"
                    />
                    <div>
                      <p>John Duo</p>
                      <span className="d-block mb-2">johnduo@gmail.com</span>
                      <Link to="/complete-profile" className="mt-3">
                        Edit profile
                      </Link>
                    </div>
                  </div>
                  <hr />
                  <div className="accSettings d-flex align-items-center gap-3 mb-3">
                    <img src={accountSetting} alt="Settings" />
                    <Link to="/account-settings">Account Settings</Link>
                  </div>
                  <div className="accSettings d-flex align-items-center gap-3 mb-3">
                    <img src={bookmark} alt="Bookmarks" />
                    <Link to="/bookmark">Bookmarks</Link>
                  </div>
                  <div className="accSettings d-flex align-items-center gap-3 mb-3">
                    <img src={highlight} alt="highlights" />
                    <Link to="/highlights">Highlights</Link>
                  </div>
                  <div className="accSettings d-flex align-items-center gap-3 mb-3">
                    <img src={notes} alt="Notes" />
                    <Link to="/my-notes">My Notes</Link>
                  </div>
                  <div className="accSettings d-flex align-items-center gap-3 mb-3">
                    <img src={faq} alt="FAQ" />
                    <Link to="/faq">FAQ’s</Link>
                  </div>
                  <hr />
                  <div
                    type="button"
                    onClick={handleLogout}
                    className="accSettings d-flex align-items-center gap-3"
                  >
                    <img src={logout} alt="" />
                    <Link to="/" style={{ color: "#E00000" }}>
                      Logout
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default UserProfileMenu;
