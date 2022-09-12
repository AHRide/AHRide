import React, { useState } from 'react';
import './Form.css';
import FormSignin from './FormSignin';
import FormSuccess from './FormSuccess';


const Signin_Page = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>

      <div className='sign-in-form-container'>
        <div className='sign-in-form-content-left'>
          <h1>
            Don't have an account yet?
          </h1>
          <button className="sign-in-form-input-btn2" type="submit">
            Sign up
          </button>
        </div>
        {!isSubmitted ? (
          <FormSignin submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>

    </>
  );
};

export default Signin_Page;
