import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../../contexts/user.context';
import "../../HistoryPage/HistoryPages.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function DisplayRiderHistory() {
  const navigate = useNavigate();
  const [offerList, setOfferList] = useState([]);
  const { user } = useContext(UserContext);

  useEffect(() => {
    axios.get(`http://localhost:3001/getDeliveryHistory/rider/${user._profile.data.email}`).then((response) => {
      setOfferList(response.data);
    });
  }, [user._profile.data.email]);

  const toUpdateStatus = (_id, email) => {
    navigate("/rider/deliveryHistory", { state: { _id, email} });
  };
  console.log(user._profile.data.email)

  return (
    <>
        {offerList.map((lists, index) => (
        <div className="center-layout" key={index}
       >
          <div className="row-details" onClick={() => {
                toUpdateStatus(lists._id, lists.rider_email)
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

export default DisplayRiderHistory;