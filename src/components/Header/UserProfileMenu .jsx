// import React, { useEffect, useRef, useState } from "react";
// import "./Header.css";
// import chat_icon from "../../assets/images/chat_icon.png";
// import notification_icon from "../../assets/images/notification_icon.png";
// import profile_round from "../../assets/images/profile_round.png";
// import drop_down from "../../assets/images/drop_down.png";
// import accountSetting from "../../assets/images/accountSetting.png";
// import logout from "../../assets/images/logout.png";
// import faq from "../../assets/images/faq.png";
// import notes from "../../assets/images/notes.png";
// import highlight from "../../assets/images/highlight.png";
// import bookmark from "../../assets/images/bookmark.png";
// import { Link, NavLink, useNavigate } from "react-router-dom";

// const UserProfileMenu = () => {
//   const [open, setOpen] = useState(false);
//   const dropdownRef = useRef(null);
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("loggedInUser");
//     navigate("/login");
//   };
//   const handleOpen = () => {
//     setOpen(!open);
//   };

//   const handleClickOutside = (event) => {
//     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//       setOpen(false);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   const userDataString = localStorage.getItem("loggedInUser");
//   const userData = JSON.parse(userDataString);
//   const email = userData.email;
//   const username = userData.username;

//   // navbar bg color when schrolling
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     // Function to handle the scroll event
//     const handleScroll = () => {
//       if (window.scrollY > 0) {
//         setIsScrolled(true); // When scrolled down, set isScrolled to true
//       } else {
//         setIsScrolled(false); // When at the top, set isScrolled to false
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   const navbarClasses = `navbar navbar-expand-lg ${isScrolled ? 'navbar-scrolled' : 'navbar_bg'}`;

//   return (
//     <>
//       <nav className={navbarClasses}>
//         <div className="container">
//           <Link className="navbar-brand" to="/">
//             Your Logo
//           </Link>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon">
//               <i className="fa-solid fa-bars"></i>
//             </span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <NavLink
//                   className={({ isActive }) =>
//                     isActive ? " nav-link menu active__hov" : "nav-link"
//                   }
//                   aria-current="page"
//                   to="/"
//                 >
//                   Home
//                 </NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink
//                   className={({ isActive }) =>
//                     isActive ? " nav-link menu active__hov" : "nav-link"
//                   }
//                   to="/contact"
//                 >
//                   Contact Me
//                 </NavLink>
//               </li>
//             </ul>

//             <div className="d-flex align-items-center profile_menu">
//               <Link to="/author-chat">
//                 <img src={chat_icon} alt="Chats" />
//               </Link>
//               <Link to="/notification">
//                 <img src={notification_icon} alt="Notifications" />
//               </Link>
//               <div
//                 className="profileShow d-flex align-items-center gap-1"
//                 onClick={handleOpen}
//                 ref={dropdownRef}
//               >
//                 <button
//                   type="button"
//                   className="button_click"
//                   style={{ cursor: "pointer" }}
//                 >
//                   <img src={profile_round} alt="Profile Image" />
//                 </button>
//                 <img
//                   className={open ? `arrow` : "arrow1"}
//                   src={drop_down}
//                   alt="Settings"
//                 />
//                 {open && (
//                   <div className={open ? `childHover` : `child`}>
//                     <div className="profileName d-flex align-items-center gap-3">
//                       <img
//                         className="img-fluid"
//                         src={profile_round}
//                         alt="Profile Image"
//                       />
//                       <div>
//                         <p>{username ? username : "Joe"}</p>
//                         <span className="d-block">
//                           {email ? email : "joe@gmail.com"}
//                         </span>
//                         <Link
//                           to="/complete-profile"
//                           className="mt-3"
//                           style={{ marginTop: "10px" }}
//                         >
//                           Edit profile
//                         </Link>
//                       </div>
//                     </div>
//                     <hr />
//                     <div className="accSettings d-flex align-items-center gap-3">
//                       <img src={accountSetting} alt="Settings" />
//                       <Link to="/account-settings">Account Settings</Link>
//                     </div>
//                     <div className="accSettings d-flex align-items-center gap-3 ">
//                       <img src={bookmark} alt="Bookmarks" />
//                       <Link to="/bookmark">Bookmarks</Link>
//                     </div>
//                     <div className="accSettings d-flex align-items-center gap-3">
//                       <img src={highlight} alt="highlights" />
//                       <Link to="/highlights">Highlights</Link>
//                     </div>
//                     <div className="accSettings d-flex align-items-center gap-3">
//                       <img src={notes} alt="Notes" />
//                       <Link to="/my-notes">My Notes</Link>
//                     </div>
//                     <div className="accSettings d-flex align-items-center gap-3">
//                       <img src={faq} alt="FAQ" />
//                       <Link to="/faq">FAQ’s</Link>
//                     </div>
//                     <hr />
//                     <div
//                       type="button"
//                       onClick={handleLogout}
//                       className="accSettings d-flex align-items-center gap-3 logout"
//                     >
//                       <img src={logout} alt="" />
//                       <Link to="/" style={{ color: "#E00000" }}>
//                         Logout
//                       </Link>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default UserProfileMenu;
import React, { useContext, useEffect, useRef, useState } from "react";
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
import { AuthContext } from "../../contexts/AuthProvider";
import {
  getUserNotifications,
  makeNotificationSeen,
} from "../../api/notifications";

const UserProfileMenu = ({
  user,
  allNotifications,
  setAllNotifications,
  setUser,
}) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setUser(null);
    navigate("/login");
  };
  const handleOpen = () => {
    setOpen(!open);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  const getAllNotifications = async () => {
    const response = await getUserNotifications({ userId: user?.data?._id });
    if (response) {
      setAllNotifications(response);
    }
  };
  // fsdf;

  const handleNotificationStatus = async () => {
    const response = await makeNotificationSeen({ userId: user?.data?._id });
    if (response === 200) {
      getAllNotifications();
      console.log(response, "ffff");
    }
  };

  useEffect(() => {
    getAllNotifications();
  }, [user]);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // navbar bg color when schrolling
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Function to handle the scroll event
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true); // When scrolled down, set isScrolled to true
      } else {
        setIsScrolled(false); // When at the top, set isScrolled to false
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const logOutHandler = () => {
    localStorage.removeItem("loggedInUser");
  };

  const navbarClasses = `navbar navbar-expand-lg ${
    isScrolled ? "navbar-scrolled" : "navbar_bg"
  }`;

  return (
    <>
      <div className="container">
        <div className="d-flex align-items-center profile_menu">
          <Link to="/author-chat">
            <img src={chat_icon} alt="Chats" />
          </Link>
          <Link to="/notification">
            <div
              style={{ position: "relative" }}
              onClick={handleNotificationStatus}
            >
              <img
                src={notification_icon}
                alt="Notifications"
                className="w-100 h-100"
              />
              {allNotifications &&
                allNotifications?.filter((i) => !i.isSeen).length > 0 && (
                  <p
                    style={{
                      fontSize: "12px",
                      position: "absolute",
                      top: "0",
                      right: "0",
                      backgroundColor: "red",
                      paddingRight: "5px",
                      paddingLeft: "5px",
                      borderRadius: "100%",
                      color: "white",
                      fontWeight: "bold",
                    }}
                  >
                    {allNotifications?.filter((i) => !i.isSeen)?.length}
                  </p>
                )}
            </div>
          </Link>
          <div
            className="profileShow d-flex align-items-center gap-1"
            onClick={handleOpen}
            ref={dropdownRef}
          >
            <button
              type="button"
              className="button_click"
              style={{ cursor: "pointer" }}
            >
              <img
                style={{
                  height: "51px",
                  width: "51px",
                  objectFit: "cover",
                  borderRadius: "100%",
                }}
                src={user?.data?.image ? user?.data?.image : profile_round}
                alt="Profile Image"
              />
            </button>
            <img
              className={open ? `arrow` : "arrow1"}
              src={drop_down}
              alt="Settings"
            />
            {open && (
              <div className={open ? `childHover` : `child`}>
                <div className="profileName d-flex align-items-center gap-3">
                  <img
                    style={{
                      height: "51px",
                      width: "51px",
                      objectFit: "cover",
                      borderRadius: "100%",
                    }}
                    className="img-fluid"
                    src={user?.data?.image ? user?.data?.image : profile_round}
                    alt="Profile Image"
                  />
                  <div>
                    <p>{user?.data?.userName ? user?.data?.userName : "Joe"}</p>
                    <span className="d-block">
                      {user?.data?.email ? user?.data?.email : "joe@gmail.com"}
                    </span>
                    <Link
                      to="/edit-profile"
                      className="mt-3"
                      style={{ marginTop: "10px" }}
                    >
                      Edit profile
                    </Link>
                  </div>
                </div>
                <hr />
                <div className="accSettings d-flex align-items-center gap-3">
                  <img src={accountSetting} alt="Settings" />
                  <Link to="/account-settings">Account Settings</Link>
                </div>
                {/* <div className="accSettings d-flex align-items-center gap-3 ">
                  <img src={bookmark} alt="Bookmarks" />
                  <Link to="/bookmark">Bookmarks</Link>
                </div>
                <div className="accSettings d-flex align-items-center gap-3">
                  <img src={highlight} alt="highlights" />
                  <Link to="/highlights">Highlights</Link>
                </div>
                <div className="accSettings d-flex align-items-center gap-3">
                  <img src={notes} alt="Notes" />
                  <Link to="/my-notes">My Notes</Link>
                </div> */}
                {user?.data?.role === "admin" && (
                  <div className="accSettings d-flex align-items-center gap-3">
                    <img src={faq} alt="Admin" />
                    <Link to="/admins/upload-books">Admins</Link>
                  </div>
                )}
                <div className="accSettings d-flex align-items-center gap-3">
                  <img src={faq} alt="FAQ" />
                  <Link to="/faq">FAQ’s</Link>
                </div>
                <hr />
                <div
                  type="button"
                  onClick={handleLogout}
                  className="accSettings d-flex align-items-center gap-3 logout"
                >
                  <img src={logout} alt="" />
                  <Link
                    onClick={logOutHandler}
                    to="/"
                    style={{ color: "#E00000" }}
                  >
                    Logout
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfileMenu;
