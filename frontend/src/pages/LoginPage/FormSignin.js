import React from "react";
import validate from "./validateInfo";
import useForm from "./useForm";
import "./Form.css";


const FormSignin = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className="sign-in-form-content-right">
      <form onSubmit={handleSubmit} className="sign-in-form" noValidate>
        <h1>Sign In</h1>
        <p className="sign-in-form-welcome">
          Please sign in to your account to continue.
        </p>
        <div className='sign-in-form-inputs'>
          <label className='sign-in-form-label'>Email</label>
          <input
            className='sign-in-form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='sign-in-form-inputs'>
          <label className='sign-in-form-label'>Password</label>
          <input
            className='sign-in-form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <button className="sign-in-form-input-btn" type="submit">
          Log in
        </button>
      </form>
    </div>
  );
};

export default FormSignin;
