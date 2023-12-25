import React from "react";
import facebook from "../../assets/images/fb.png";
import twitter from "../../assets/images/twitter.png";
import youtube from "../../assets/images/youtube.png";
import rightArrow from "../../assets/images/right_arrow.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.jpeg";
const Footer = () => {
  const navigate = useNavigate();

  const handleScrollTop = () => {
    window.scrollTo(0, 0);
    navigate("/contact");
  };

  return (
    <footer>
      <div className="container ">
        <div className="row">
          <div className="col-lg-2">
            {/* <p style={{ fontSize: "40px" }} className="">
              <Link className="navbar-brand" to="/">
                <img style={{ maxHeight: 50 }} src={logo} alt="" />
              </Link>
            </p> */}
          </div>

          <div className="col-lg-8">
            <div className="d-flex justify-content-center footerBox gap-2">
              <div>
                <p className="mb_4">
                  Do You Seek Answers? Message the Author for FREE!
                </p>

                <div className="footer_button">
                  <Link className="send_msg_button" onClick={handleScrollTop}>
                    Send me a Message
                    <img
                      src={rightArrow}
                      alt=""
                      style={{ marginLeft: "10px" }}
                    />
                  </Link>
                </div>

                <div className="linkFooter d-flex justify-content-center align-items-center mb_4 gap-5">
                  <a href="/">Home</a>
                  <a href="/contact">Contact Me</a>
                  <a href="/faq">Faq</a>
                </div>
                <div className="socialLink d-flex justify-content-center align-items-center mb_4">
                  <a href="#">
                    <img src={facebook} alt="FaceBook" />
                  </a>
                  <a href="#">
                    <img src={twitter} alt="FaceBook" />
                  </a>
                  <a href="#">
                    <img src={youtube} alt="FaceBook" />
                  </a>
                </div>
                <div className="lineBox mb-3"></div>
                <article>
                  <p className="d-block">
                    © 2023 Christianity Book. All Rights Reserved
                  </p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
