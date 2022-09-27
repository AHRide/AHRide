import React, { useState, useEffect } from "react";
import NavBarClient from "../../components/NavBarClient";
import styles from "./ClientProfile.module.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import axios from "axios";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import WcIcon from "@mui/icons-material/Wc";

function ClientProfile() {
  const [userProfileList, setuserProfileList] = useState([]);
  const { user } = useContext(UserContext);
  console.log(user._profile.data.email);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/getUser/${user._profile.data.email}`)
      .then((response) => {
        setuserProfileList(response.data);
      });
  }, [user._profile.data.email]);
  const { logOutUser } = useContext(UserContext);

  const logOut = async () => {
    try {
      // Calling the logOutUser function from the user context.
      const loggedOut = await logOutUser();
      // Now we will refresh the page, and the user will be logged out and
      // redirected to the login page because of the <PrivateRoute /> component.
      if (loggedOut) {
        window.location.reload(true);
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <NavBarClient />
      {userProfileList.map((lists, index) => (
        <div key={index}>
          <div>
            <Link
              className={styles.backbutton}
              style={{ textDecoration: "none" }}
              to="/client/homepage"
            >
              <ArrowBackIcon fontSize="large" />
            </Link>
            <h1 className={styles.ProfileName}>{lists.name}</h1>
            <h2 className={styles.DateFont}>September 23, 2022</h2>
            <button className={styles.UpdateInfoButton} type="submit">
              Update Info
            </button>
            <div className={styles.Information}>
              <WcIcon fontSize="large" className={styles.Design} />
              <h1>{lists.gender}</h1>
              <CallIcon fontSize="large" className={styles.Design} />
              <h1>094512345678</h1>
              <AlternateEmailIcon fontSize="large" className={styles.Design} />
              <h1>{lists.email}</h1>
            </div>
            <button
              onClick={logOut}
              className={styles.LogoutInfoButton}
              type="submit"
            >
              logout
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default ClientProfile;
