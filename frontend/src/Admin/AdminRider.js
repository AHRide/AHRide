import NavBarAdmin from "../components/NavBarAdmin";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import style from "../Admin/AdminRider.module.css";
import EastIcon from "@mui/icons-material/East";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Rating from "@mui/material/Rating";
import axios from "axios";

function AdminRider() {
  const navigate = useNavigate();
  const [updateList, setUpdateList] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      axios.get(`http://localhost:3001/getDeliveryHistory`).then((response) => {
        setUpdateList(response.data);
      });
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const toInfoStatus = (_id) => {
    navigate("/admin/rider/report/information", { state: { _id } });
  };

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
        {updateList.map((lists, index) => (
          <div key={index}>
          		{(lists.rating === 3 || lists.rating === 4 || lists.rating === 0) &&(
        <div className="center-layout" 
       >
          <div className="row-details" onClick={() => {
                toInfoStatus(lists._id)
              }}>
          <div className="column-details"><h3>{lists.client_email}</h3></div>
          <div className="column-details"><h3>{lists.from}</h3></div>
          <div className="column-details2"><h3>---</h3></div>
          <div className="column-details"><h3>{lists.to}</h3></div>
          <div className={style.stars}>
                <Rating name="read-only" value={lists.rating} readOnly size="large" />
              </div>
          </div>
        </div>
        )}
        </div>
              ))}
      </div>
    </>
  );
}

export default AdminRider;
