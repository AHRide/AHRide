import * as React from "react";
import NavBarAdmin from "../components/NavBarAdmin";
import style from "../Admin/AdminRiderInformation.module.css";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import TextField from "@mui/material/TextField";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Rating from "@mui/material/Rating";
import BanClient from "../Admin/components/BanClient";

export default function AdminClientInformation() {
  const [value, setValue] = React.useState(2);

  return (
    <>
      <NavBarAdmin />
      <div className={style.row}>
        <div className={style.column1}>
          <Link
            className={style.backbutton}
            style={{ textDecoration: "none" }}
            to="/admin/client/report"
          >
            <ArrowBackIcon fontSize="large" />
          </Link>
          <h1 className={style.title}>Client's Information</h1>
        </div>
        <div className={style.column2}>
          <div className={style.row1}>
            <div className={style.column11}>
              <h1 className={style.name1}>Client's Name: Neon San Jose</h1>
              <h1 className={style.cont}>Contact Number: 0987654321</h1>
            </div>
            <div className={style.column12}>
              <h1 className={style.from1}>From:</h1>
              <div>
                <TextField
                  className={style.text1}
                  id="filled-basic"
                  //   label="Filled"
                  //   variant="filled"
                />
              </div>
              <ArrowDownwardIcon className={style.arrow} fontSize="large" />
              <h1 className={style.to1}>To:</h1>
              <div className={style.to2}>
                <TextField
                  className={style.text2}
                  id="filled-basic"
                  //   label="Filled"
                  //   variant="filled"
                />
              </div>
            </div>
            <div className={style.column13}>
              <h1 className={style.rating}>Rating:</h1>
              <div className={style.stars}>
                <Rating name="read-only" value={value} readOnly size="large" />
              </div>
              <h1 className={style.note}>Note from Rider: </h1>
              <div className={style.location1}>
                <TextField
                  className={style.text3}
                  id="filled-multiline-static"
                  // label="Multiline"
                  multiline
                  rows={4}
                  // defaultValue="Default Value"
                  variant="filled"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={style.column3}>
          <div className={style.button}>
            <BanClient />
          </div>
        </div>
      </div>
    </>
  );
}
