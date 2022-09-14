import React, { useState, useEffect } from "react";
import NavBarClient from "../../components/NavBarClient";
import styles from "./ClientProfile.module.css";
import { Link } from "react-router-dom";
import axios from "axios";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

function ClientProfile() {
  const [userProfileList, setuserProfileList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/getUsers").then((response) => {
      setuserProfileList(response.data);
    });
  }, []);

  return (
    <>
      <NavBarClient />
      {userProfileList.map((lists, index) => (
        <div key={index}>
          <Link
            className={styles.backbutton}
            style={{ textDecoration: "none" }}
            to="/client/homepage"
          >
            <ArrowBackIcon fontSize="large" />
          </Link>
          <h1 className={styles.ProfileName}>{lists.client_name}</h1>
          <h2 className={styles.DateFont}>{lists.client_dateCreated}</h2>
          <button className={styles.UpdateInfoButton} type="submit">
            Update Info
          </button>
          <div className={styles.Information}>
            <h1>{lists.client_gender}</h1>
            <LocationOnIcon fontSize="large" className={styles.Design} />
            <h1>{lists.client_location}</h1>
            <CallIcon fontSize="large" className={styles.Design} />
            <h1>{lists.client_cont}</h1>
            <AlternateEmailIcon fontSize="large" className={styles.Design} />
            <h1>{lists.client_email}</h1>
          </div>
          <button className={styles.LogoutInfoButton} type="submit">
            logout
          </button>
        </div>
      ))}
    </>
  );
}

export default ClientProfile;
