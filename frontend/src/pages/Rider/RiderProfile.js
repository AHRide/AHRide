import React from "react";
import NavBarRider from "../../components/NavBarRider";
import style from "./RiderProfile.module.css";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import WcIcon from "@mui/icons-material/Wc";
function RiderProfile() {
  return (
    <>
      <NavBarRider />
      <div>
        <Link
          className={style.backbutton}
          style={{ textDecoration: "none" }}
          to="/rider/homepage"
        >
          <ArrowBackIcon fontSize="large" />
        </Link>
        <h1 className={style.ProfileName}>Anna Karenina</h1>
        <h2 className={style.DateFont}>Started: August 21, 2022</h2>
        <button className={style.UpdateInfoButton} type="submit">
          Update Info
        </button>
        <div className={style.row}>
          <div className={style.column}>
            <WcIcon fontSize="large" className={style.Design} />
            <h1>Female</h1>
            <LocationOnIcon fontSize="large" className={style.Design} />
            <h1>New York City, USA</h1>
            <CallIcon fontSize="large" className={style.Design} />
            <h1>094512345678</h1>
            <AlternateEmailIcon fontSize="large" className={style.Design} />
            <h1>annakarenina@gmail.com</h1>
          </div>
          <div className={style.column}>
            <h1>G-123-456</h1>
            <h1>N4MB3R</h1>
            <h1>Kawasaki Versys-X 300</h1>
          </div>
        </div>
        <button className={style.LogoutInfoButton} type="submit">
          logout
        </button>
      </div>
    </>
  );
}

export default RiderProfile;
