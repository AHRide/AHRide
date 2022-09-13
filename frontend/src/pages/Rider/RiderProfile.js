import React from "react";
import NavBarRider from "../../components/NavBarRider";
import style from "./RiderProfile.module.css";

function RiderProfile() {
  return (
    <>
      <NavBarRider />
      <div>
        <h1 className={style.ProfileName}>Anna Karenina</h1>
        <h2 className={style.DateFont}>Started: August 21, 2022</h2>
        <button className={style.UpdateInfoButton} type="submit">
          Update Info
        </button>
        <div className={style.row}>
          <div className={style.column}>
            <h1 className={style.first}>Female</h1>
            <h1>New York City, USA</h1>
            <h1>094512345678</h1>
            <h1>annakarenina@gmail.com</h1>
          </div>
          <div className={style.column}>
            <h1 className={style.first}>G-123-456</h1>
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
