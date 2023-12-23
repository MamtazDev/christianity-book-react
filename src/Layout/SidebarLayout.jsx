import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function SidebarLayout({ children }) {
  return (
    <>
      <div className="container">
        <div className="row mb-5" style={{ marginTop: 100 }}>
          <div className="col-md-3">
            <ul className="nav justify-content-end flex-column">
              <li className="nav-item">
                <Link
                  className="nav-link text-start"
                  aria-current="page"
                  to="upload-books"
                >
                  Books
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link text-start" to="audios">
                  Audio
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-8">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
