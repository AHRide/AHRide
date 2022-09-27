import React from "react";
import NavBarRider from "../../components/NavBarRider";
import "../delivery-updates/DisplayUpdatePage.css";
import DisplayOfferList from "./components/DisplayOfferList";

const DisplayOfferPage = () => {
  return (
    <>
      <NavBarRider />
      <div className="main-container">
        <h1 className="page-title">Delivering Requests</h1>

        <div className="row2">
          <div className="column4"><h2>Name</h2></div>
          <div className="column5"><h2>Location</h2></div>
          <div className="column6"><h2>Contact Number</h2></div>
        </div>

        <div className="row2">
          <div className="column2"><h4>From</h4></div>
          <div className="column1"><h4>----------&gt;</h4></div>
          <div className="column3"><h4>To</h4></div>
        </div>
        <div><DisplayOfferList /></div>
      </div>
    </>
  );
};

export default DisplayOfferPage;