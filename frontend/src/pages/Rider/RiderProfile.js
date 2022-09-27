import React, { useState, useEffect } from "react";
import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import NavBarRider from "../../components/NavBarRider";
import style from "./RiderProfile.module.css";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import WcIcon from "@mui/icons-material/Wc";
import CoPresentIcon from "@mui/icons-material/CoPresent";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import PaymentIcon from "@mui/icons-material/Payment";

function RiderProfile() {
  const [userProfileList, setuserProfileList] = useState([]);
  const { user } = useContext(UserContext);
  console.log(user._profile.data.email);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/getUsers/${user._profile.data.email}`)
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
      <NavBarRider />
      {userProfileList.map((lists, index) => (
        <div>
          <Link
            className={style.backbutton}
            style={{ textDecoration: "none" }}
            to="/rider/homepage"
          >
            <ArrowBackIcon fontSize="large" />
          </Link>
          <h1 className={style.ProfileName}>{lists.name}</h1>
          <h2 className={style.DateFont}>Started: August 21, 2022</h2>
          <button className={style.UpdateInfoButton} type="submit">
            Update Info
          </button>
          <div className={style.row}>
            <div className={style.column}>
              <WcIcon fontSize="large" className={style.Design} />
              <h1>{lists.gender}</h1>
              <LocationOnIcon fontSize="large" className={style.Design} />
              <h1>New York City, USA</h1>
              <CallIcon fontSize="large" className={style.Design} />
              <h1>094512345678</h1>
              <AlternateEmailIcon fontSize="large" className={style.Design} />
              <h1>{lists.email}</h1>
            </div>
            <div className={style.column}>
              <CoPresentIcon fontSize="large" className={style.Design1} />
              <h1>G-123-456</h1>
              <DirectionsCarIcon fontSize="large" className={style.Design1} />
              <h1>N4MB3R</h1>
              <PaymentIcon fontSize="large" className={style.Design1} />
              <h1>Kawasaki Versys-X 300</h1>
            </div>
          </div>
          <button
            onClick={logOut}
            className={style.LogoutInfoButton}
            type="submit"
          >
            logout
          </button>
        </div>
      ))}
    </>
  );
}

export default RiderProfile;