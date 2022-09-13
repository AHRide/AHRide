import React from "react";
import "../DisplayUpdatePage.css";

function DisplayDeliveryList() {

  return (
    <>
        <div className="center-layout">
          <div className="row-details">
          <div className="column-details"><h3>Krisha Briones</h3></div>
          <div className="column-details"><h3>Chowking Cebu</h3></div>
          <div className="column-details"><h3>Brgy. Mambaling, Cebu City</h3></div>
          <div className="column-details"><h3>Pending</h3></div>
          </div>
        </div>

        <div className="center-layout">
          <div className="row-details">
          <div className="column-details"><h3>Bianca Nailon</h3></div>
          <div className="column-details"><h3>Brgy. Busay, Cebu City</h3></div>
          <div className="column-details"><h3>Mabolo, Cebu</h3></div>
          <div className="column-details"><h3>Done</h3></div>
          </div>
        </div>
    </>
  );
}

export default DisplayDeliveryList;
