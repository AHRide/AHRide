import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../../contexts/user.context';
import "../DisplayUpdatePage.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function DisplayDeliveryList() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const [updateList, setUpdateList] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3001/getDeliveryUpdates${user._profile.data.email}`).then((response) => {
      setUpdateList(response.data);
      console.log(response.data);
    });
  }, []);

  const toUpdateStatus = (_id) => {
    navigate("/update-status", { state: { _id} });
  };

  return (
    <>
          {updateList.map((lists, index) => (
        <div className="center-layout" key={index}
       >
          <div className="row-details" onClick={() => {
                toUpdateStatus(lists._id)
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
