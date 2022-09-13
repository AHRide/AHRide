import React from "react";
import NavBarClient from "../../components/NavBarClient";
import styled from "./ClientHomepage.module.css";

export default function ClientHomepage() {
  return (
    <>
      <NavBarClient />
      <div className={styled.Screen}>
        <button className={styled.BookADeliveryButton} type="submit">
          Book a Delivery
        </button>
      </div>
    </>
  );
}
