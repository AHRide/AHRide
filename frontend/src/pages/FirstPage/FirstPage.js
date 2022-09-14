import React from "react";
import styler from "./FirstPage.module.css";
import { useNavigate } from "react-router-dom";

export default function ClientHomepage() {
  const navigate = useNavigate();
  return (
    <>
      <div className={styler.Screen}>
        <div className={styler.row}>
          <div className={styler.column1}>
            <button
              onClick={() => {
                navigate("/login");
              }}
              className={styler.RiderSignIn}
              type="button"
            >
              sign in
            </button>
            <button
              onClick={() => {
                navigate("/rider/signup");
              }}
              className={styler.RiderSignUp}
              type="submit"
            >
              sign up
            </button>
          </div>
          <div className={styler.column2}>
            <button
              onClick={() => {
                navigate("/login");
              }}
              className={styler.ClientSignIn}
              type="submit"
            >
              sign in
            </button>
            <button
              onClick={() => {
                navigate("/client/signup");
              }}
              className={styler.ClientSignUp}
              type="submit"
            >
              sign up
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
