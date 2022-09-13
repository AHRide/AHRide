import React from "react";
import NavBarClient from "../../components/NavBarClient";
import "./DisplayUpdatePage.css";
import DisplayDeliveryList from "./components/DisplayDeliveryList";

const DisplayUpdatePage = () => {
  return (
    <>
      <NavBarClient />
      <div className="main-container">
        <h1 className="page-title">In Progress</h1>

        <div className="row">
          <div className="column"><h2>Receiver</h2></div>
          <div className="column"><h2>Location</h2></div>
          <div className="column"><h2>Status</h2></div>
        </div>

        <div className="row2">
          <div className="column2"><h4>From</h4></div>
          <div className="column1"><h4>----------&gt;</h4></div>
          <div className="column3"><h4>To</h4></div>
        </div>
        <div><DisplayDeliveryList /></div>
      </div>
    </>
  );
};

export default DisplayUpdatePage;