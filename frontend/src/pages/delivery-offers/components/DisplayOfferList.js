import React, { useState, useEffect } from "react";
import "../../delivery-updates/DisplayUpdatePage.css";
import axios from "axios";

function DisplayOfferList() {
  const [offerList, setOfferList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/getDeliveryOffers").then((response) => {
      setOfferList(response.data);
    });
  }, []);

  return (
    <>
        {offerList.map((lists, index) => (
        <div className="center-layout" key={index}
       >
          <div className="row-details" onClick={console.log(index)}>
          <div className="column-details"><h3>{lists.receiver_name}</h3></div>
          <div className="column-details"><h3>{lists.from}</h3></div>
          <div className="column-details"><h3>{lists.to}</h3></div>
          <div className="column-details"><h3>{lists.client_cont}</h3></div>
          </div>
        </div>
              ))}
    </>
  );
}

export default DisplayOfferList;