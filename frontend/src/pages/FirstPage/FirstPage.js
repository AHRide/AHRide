import React from "react";
import styler from "./FirstPage.module.css";

export default function ClientHomepage() {
  return (
    <>
      <div className={styler.Screen}>
        <div className={styler.row}>
          <div className={styler.column1}>
            <button className={styler.RiderSignIn} type="submit">
              sign in
            </button>
            <button className={styler.RiderSignUp} type="submit">
              sign up
            </button>
          </div>
          <div className={styler.column2}>
            <button className={styler.ClientSignIn} type="submit">
              sign in
            </button>
            <button className={styler.ClientSignUp} type="submit">
              sign up
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
