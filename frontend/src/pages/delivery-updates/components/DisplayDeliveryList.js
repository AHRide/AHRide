import React, { useState, useEffect } from "react";
import "../DisplayUpdatePage.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function DisplayDeliveryList() {
  const navigate = useNavigate();
  const [updateList, setUpdateList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/getDeliveryUpdates").then((response) => {
      setUpdateList(response.data);
    });
  }, []);

  const toUpdateStatus = (_id, client_id, rider_id, rider_name, rider_cont, rider_vehi, client_name,
    client_cont,to,from,receiver_name,receiver_cont,note,time,payment,status) => {

    navigate("/update-status", { state: { _id, client_id, rider_id, rider_name, rider_cont, rider_vehi, client_name,
      client_cont,to,from,receiver_name,receiver_cont,note,time,payment,status} });

  };

  return (
    <>
          {updateList.map((lists, index) => (
        <div className="center-layout" key={index}
       >
          <div className="row-details" onClick={() => {
                toUpdateStatus(lists._id, lists.client_id,
                lists.rider_id,
                lists.rider_name,
                lists.rider_cont,
                lists.rider_vehi,
                lists.client_name,
                lists.client_cont,
                lists.to,
                lists.from,
                lists.receiver_name,
                lists.receiver_cont,
                lists.note,
                lists.time,
                lists.payment,
                lists.status)
              }}>
          <div className="column-details"><h3>{lists.receiver_name}</h3></div>
          <div className="column-details"><h3>{lists.from}</h3></div>
          <div className="column-details2"><h3>---</h3></div>
          <div className="column-details"><h3>{lists.to}</h3></div>
          <div className="column-details"><h3>{lists.status}</h3></div>
          </div>
        </div>
              ))}
    </>

  );
}

export default DisplayDeliveryList;
