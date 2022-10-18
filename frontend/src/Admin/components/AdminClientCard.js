import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import style from "../AdminRider.module.css";
import { Link } from "react-router-dom";

export default function AdminClientCard() {
  return (
    <>
      <div className={style.color}>
        <Link to="/admin/client/report/information">
          <Card className={style.RiderButton}>
            <CardContent>
              <h1 className={style.clientName}>Fionas Qwerty</h1>
              <h1 className={style.frombutton}>Chowking</h1>
              <h1 className={style.tobutton}>Brgy. Mambaling, Cebu City</h1>
              <h1 className={style.ratingbutton}>Reported</h1>
            </CardContent>
          </Card>
        </Link>
      </div>
    </>
  );
}
