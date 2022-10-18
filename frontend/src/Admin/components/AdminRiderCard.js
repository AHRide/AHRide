import React, { useState, useEffect, useContext } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import style from "../AdminRider.module.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Rating from "@mui/material/Rating";
import axios from "axios";
import "../../pages/delivery-offers/DisplayOfferPage.css"


export default function AdminRiderCard() {
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
      {updateList.map((lists, index) => (
      <div key={index}>
        {(lists.rating === 1 || lists.rating === 4 ) &&(
          <div className={style.RiderButton} onClick={() => {
                toInfoStatus(lists._id)
              }}>
          <div className="column-details"><h3>{lists.client_email}</h3></div>
          <div className="column-details1"><h3>{lists.from}</h3></div>
          <div className="column-details4"><h3>---</h3></div>
          <div className="column-details3"><h3>{lists.to}</h3></div>
          <div className={style.stars}>
                <Rating name="read-only" value={lists.rating} readOnly size="large" />
              </div>
          </div>
           )}
      </div>
      ))}
    </>
  );
}
