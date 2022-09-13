import React from "react";
import styling from "./NavBarClient.module.css";
import { Link } from "react-router-dom";

export default function NavBarClient() {
  return (
    <>
      <div className={styling.Navbar}>
        <nav className={styling.NavContent}>
          <Link
            className={styling.NavName}
            style={{ textDecoration: "none" }}
            to="/"
          >
            Book a Delivery
          </Link>
          <Link
            className={styling.NavName}
            style={{ textDecoration: "none" }}
            to="/delivery-updates"
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
            to="/client/profile"
          >
            Profile
          </Link>
        </nav>
      </div>
      {/*Navbar */}
    </>
  );
}
