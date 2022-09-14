import React from "react";
import "./rider_signup.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowRightAlt";
import { useNavigate } from "react-router-dom";

function RiderSignUp() {
  const navigate = useNavigate();
  return (
    <body className="bodyPage">
      <div className="columnL">
        <div className="RiderSignUpMain">
          <p className="text_SignUp">Sign Up</p>
          <p className="text_TagLine">
            Creating an account only take a minute or so and you will become
            part of us! Great exchange, right?
          </p>
          <p className="text_Labels">Name</p>
          <input
            type="text"
            className="textfield"
            placeholder="Your name.."
          ></input>
          <div className="innercolumnL">
            <p className="text_Labels">Gender</p>
            <input
              type="text"
              className="textfieldL"
              placeholder="Male/Female/etc."
            ></input>
          </div>
          <div className="innercolumnR">
            <p className="text_Labels">Birthdate</p>
            <input
              type="text"
              className="textfieldR"
              placeholder="mm/dd/yyyy"
            ></input>
          </div>

          <p className="text_Labels">Contact Number</p>
          <input
            type="text"
            className="textfield"
            placeholder="Your number.."
          ></input>
          <p className="text_Labels">Email Address</p>
          <input
            type="text"
            className="textfield"
            placeholder="Your email.."
          ></input>
          <p className="text_Labels">Password</p>
          <input
            type="text"
            className="textfield"
            placeholder="Your password.."
          ></input>
          <center>
            <ArrowForwardIcon
              sx={{ fontSize: 120 }}
              className="button_SignUp_Rider"
              type="submit"
            ></ArrowForwardIcon>
          </center>
        </div>
      </div>
      <div className="columnR">
        <div className="blankPageTop"></div>
        <p className="text_LabelR">Already have an account?</p>
        <center>
          <button
            onClick={() => {
              navigate("/login");
            }}
            className="button_LogIn"
            type="submit"
          >
            Log In
          </button>
        </center>
        <div className="blankPageBottom"></div>
      </div>
    </body>
  );
}

export default RiderSignUp;
