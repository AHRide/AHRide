import React from "react";
import styling from "./NavBarRider.module.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <div className={styling.Navbar}>
        <nav className={styling.NavContent}>
          <Link
            className={styling.NavName}
            style={{ textDecoration: "none" }}
            to="/"
          >
            Delivery Offers
          </Link>
          <Link
            className={styling.NavName}
            style={{ textDecoration: "none" }}
            to="/"
          >
            Updates
          </Link>
          <Link
            className={styling.NavName}
            style={{ textDecoration: "none" }}
            to="/"
          >
            About
          </Link>
          <Link
            className={styling.NavName}
            style={{ textDecoration: "none" }}
            to="/"
          >
            Profile
          </Link>
        </nav>
      </div>
      {/*Navbar */}
    </>
  );
}
