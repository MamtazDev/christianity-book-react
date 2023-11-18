import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import UserProfileMenu from "./UserProfileMenu ";

const Header = () => {
  const [data, setData] = useState({})
  const userDataString = localStorage.getItem("loggedInUser");
  const userData = JSON.parse(userDataString);
  useEffect(() => {
    if (userData) {
      setData(userData)
    }

  }, userData)

  // scroll
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
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const navbarClasses = `navbar navbar-expand-lg ${isScrolled ? 'navbar-scrolled' : 'navbar_bg'}`;

  return (
    <header>
      <nav className={navbarClasses}>
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
            <span className="navbar-toggler-icon"><i className="fa-solid fa-bars"></i></span>
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
            <div className="ms-auto">
              {
                userData ?
                  <UserProfileMenu data={userData}/>
                  // <p>No User data</p>
                  :
                  <div className="d-flex gap-3 header_1">
                    <Link className="dark_btn" to="/signup">
                      Sign Up
                    </Link>
                    <Link className="light_btn" to="/login">
                      Sign In
                    </Link>
                  </div>
              }
            </div>



          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
