import React from "react";

const Header = () => {
  return (
    <header>
      <nav class="navbar navbar-expand-lg">
        <div class="container">
          <a class="navbar-brand" href="#">
            Your Logo
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a
                  class="nav-link menu active__hov"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Contact Me
                </a>
              </li>
            </ul>
            <div class="d-flex gap-3">
              <a class="dark_btn" href="">
                Sign Up
              </a>
              <a class="light_btn" href="">
                Sign In
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
