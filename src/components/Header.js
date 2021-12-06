import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container flex justify-between">
      <nav className="mt-4">
        <ul className="main-nav nav  navbar navbar-light bg-light pt-1 pb-1 shadow-lg p-3 mb-5 bg-body rounded">
          {" "}
          <div>
          <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle"
              to="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              ALL TYPES
            </Link>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <Link className="dropdown-item" to="#">
                  Categories 1
                </Link>
              </li>
            </ul>
          </li>
          </div>
          <div className="navbar navbar-light">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="#">
              Popular Products
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              Low Price
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              High Price
            </Link>
          </li>
          </div>
          <div>
          <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle"
              to="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              PRICE
            </Link>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <Link className="dropdown-item" to="#">
                  Price 1
                </Link>
              </li>
            </ul>
          </li>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
