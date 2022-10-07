import * as React from "react";
import NavBarAdmin from "../components/NavBarAdmin";
import style from "../Admin/AdminRiderInformation.module.css";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import TextField from "@mui/material/TextField";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Rating from "@mui/material/Rating";
import BanRider from "../Admin/components/BanRider";
import ModalDelivery from "../components/ModalDelivery";
import ModalCancelled from "../components/ModalCancelled";

function AdminRiderInformation() {
  const [value, setValue] = React.useState(0);

  return (
    <>
      <NavBarAdmin />
      <div className={style.row}>
        <div className={style.column1}>
          <Link
            className={style.backbutton}
            style={{ textDecoration: "none" }}
            to="/admin/rider/report"
          >
            <ArrowBackIcon fontSize="large" />
          </Link>
          <h1 className={style.title}>Rider's Information</h1>
        </div>
        <div className={style.column2}>
          <div className={style.row1}>
            <div className={style.column11}>
              <h1 className={style.name1}>Rider's Name: Ryo Kiritani</h1>
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
              {/* <ModalCancelled /> */}
              {/* <ModalDelivery /> */}
              <div className={style.stars}>
                <Rating name="read-only" value={value} readOnly size="large" />
              </div>
              <h1 className={style.note}>Note from Client: </h1>
              <div className={style.t3}>
                <TextField
                  className={style.text3}
                  id="filled-multiline-static"
                  multiline
                  rows={4}
                  variant="filled"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={style.column3}>
          <div className={style.button}>
            <BanRider />
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminRiderInformation;
