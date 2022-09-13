import React from "react";
import NavBarRider from "../../components/NavBarRider";
import styled from "./RiderHomepage.module.css";

export default function ClientHomepage() {
  return (
    <>
      <NavBarRider />
      <div className={styled.Screen}>
        <button className={styled.DeliveryOffersButton} type="submit">
          Delivery Offers
        </button>
      </div>
    </>
  );
}