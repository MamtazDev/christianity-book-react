import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
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
            <span className="navbar-toggler-icon"><i class="fa-solid fa-bars"></i></span>
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
            <div className="d-flex gap-3 header_1">
              <Link className="dark_btn" to="/signup">
                Sign Up
              </Link>
              <Link className="light_btn" to="/login">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
