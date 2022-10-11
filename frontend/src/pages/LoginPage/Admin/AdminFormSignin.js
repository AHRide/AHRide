import React from "react";
// import validate from "./validateInfo";
// import useForm from "./useForm";
// import "./Form.css";
import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/user.context";
import ArrowForwardIcon from "@mui/icons-material/ArrowRightAlt";
import { TextField } from "@mui/material";


const AdminFormSignin = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { user, fetchUser, emailPasswordLogin } = useContext(UserContext);

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const onFormInputChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const redirectNow = () => {
    const redirectTo = location.search.replace("?redirectTo=", "");
    navigate(redirectTo ? redirectTo : "/rider/homepage");
  }

  const loadUser = async () => {
    if (!user) {
      const fetchedUser = await fetchUser();
      if (fetchedUser) {

        redirectNow();
      }
    }
  }

  useEffect(() => {
    loadUser(); 
  }, []);

  const onSubmit = async (event) => {
    try {

      const user = await emailPasswordLogin(form.email, form.password);
      if (user) {
        redirectNow();
      }
    } catch (error) {
      alert(error)
    }
  };

  return (
    <div className="sign-in-form-content-right">
        <h1>Sign In</h1>
        <p className="sign-in-form-welcome">
          Welcome Admin! Please sign in to your account to continue.
        </p>
        <div className='sign-in-form-inputs'>
          <label className='sign-in-form-label'>Username</label>
          <TextField
            name="email"
            type="name"
            label="Email"
            variant="outlined"
            fullWidth
            value={form.email}
            onChange={onFormInputChange}
          />
        </div>
        <div className='sign-in-form-inputs'>
          <label className='sign-in-form-label'>Password</label>
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            name="password"
            fullWidth
            value={form.password}
            onChange={onFormInputChange}
          />
        </div>
        <ArrowForwardIcon
              sx={{ fontSize: 120 }}
              className="button_SignUp_Rider"
              onClick={onSubmit}
            ></ArrowForwardIcon>
    </div>
  );
};

export default AdminFormSignin;
