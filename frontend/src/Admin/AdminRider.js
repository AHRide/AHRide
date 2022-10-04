import React from "react";
import NavBarAdmin from "../components/NavBarAdmin";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import style from "../Admin/AdminRider.module.css";
import EastIcon from "@mui/icons-material/East";

function AdminRider() {
  return (
    <>
      <NavBarAdmin />;
      <div className={style.row}>
        <div className={style.column1}>
          <div className={style.head}>
            <Link
              className={style.backbutton}
              style={{ textDecoration: "none" }}
              to="/admin/homepage"
            >
              <ArrowBackIcon fontSize="large" />
            </Link>
            <h1 className={style.title}>Rider</h1>
            <div>
              <Link to="/admin/client/report">
                <button className={style.client} type="submit">
                  Client
                </button>
              </Link>
            </div>
          </div>
          <div className={style.body}>
            <h1 className={style.name}>Name</h1>
            <h1 className={style.location}>Location</h1>
            <h1 className={style.rating}>Rating</h1>
            <h1 className={style.from}>From</h1>
            <EastIcon className={style.EI} fontSize="large" />
            <h1 className={style.to}>To</h1>
          </div>
        </div>
        <div className={style.column2}>
          <Link to="/admin/rider/report/information">
            <button className={style.RiderButton} type="submit">
              <h1 className={style.clientName}>Fiona Qwerty</h1>
              <h1 className={style.frombutton}>Chowking</h1>
              <h1 className={style.tobutton}>Brgy. Mambaling, Cebu City</h1>
              <h1 className={style.ratingbutton}>Rating</h1>
            </button>
          </Link>
        </div>
        <div className={style.column3}>
          <button className={style.RiderButton1} type="submit">
            <h1 className={style.clientName}>Fiona Qwerty</h1>
            <h1 className={style.frombutton}>Chowking</h1>
            <h1 className={style.tobutton}>Brgy. Mambaling, Cebu City</h1>
            <h1 className={style.ratingbutton}>Rating</h1>
          </button>
        </div>
      </div>
    </>
  );
}

export default AdminRider;
