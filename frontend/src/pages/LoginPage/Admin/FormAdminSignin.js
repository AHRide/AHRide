import React, { useState } from "react";
import "../Form.css";
import SuccessForm from "./SuccessForm";
import AdminFormSignin from "./AdminFormSignin";

import { useNavigate } from "react-router-dom";

const SigninAdminPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();
  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className="sign-in-form-container">
        <div className="sign-in-form-container-grid">
        <div className="sign-in-form-content-left">

         
          </div>
          {!isSubmitted ? (
            <AdminFormSignin submitForm={submitForm} />
          ) : (
            <SuccessForm />
          )}
        </div>
      </div>
    </>
  );
};

export default SigninAdminPage;
