import React from "react";
import "./client_signup.css";
import { useContext, useState} from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/user.context";
import { TextField } from "@mui/material";
import Axios from "axios";

function ClientSignUp() {
  const navigate = useNavigate();
  const location = useLocation();

  const[name, setName] = useState("");
  const[gender, setGender] = useState("");
  const[birthdate, setBirth] = useState("");
  const[contact, setContact] = useState("");
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");

  const createUser = () => {
    Axios.post("http://localhost:3001/createUser", {
      name,
      gender,
      birthdate,
      contact,
      email,
      password,
      user_type: "client",
    })
  }

  // As explained in the Login page.
  const { emailPasswordSignup } = useContext(UserContext);
  const [form, setForm] = useState({
    name: "",
    gender: "",
    birthdate: "",
    contact: "",
    email: "",
    password: ""
  });

  // As explained in the Login page.
  const onFormInputChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  // As explained in the Login page.
  const redirectNow = () => {
    const redirectTo = location.search.replace("?redirectTo=", "");
    navigate(redirectTo ? redirectTo : "/client/homepage");
  }

  const onSubmit = async () => {
    try {
      const user = await emailPasswordSignup(form.email, form.password);
      if (user) {
        createUser();
        redirectNow();
      }
    } catch (error) {
      alert(error);
    }
  };
  return (
    <body className="bodyPage">
      <div className="columnL">
        <div className="ClientSignUpMain">
          <p className="text_SignUp">Sign Up</p>
          <p className="text_TagLine">
            Creating an account only take a minute or so and you will become
            part of us! Great exchange, right?
          </p>
          <p className="text_Labels">Name</p>
          <TextField
            name="name"
            type="name"
            label="Name"
            variant="outlined"
            fullWidth
            value={form.name}
            onInput={onFormInputChange}
            onChange={(event) => {setName(event.target.value)}}
          ></TextField>
          <div className="innercolumnL">
            <p className="text_Labels">Gender</p>
            <TextField
              name="gender"
              type="gender"
              label="Gender"
              variant="outlined"
              fullWidth
              value={form.gender}
              onInput={onFormInputChange}
              onChange={(event) => {setGender(event.target.value)}}
            ></TextField>
          </div>
          <div className="innercolumnR">
            <p className="text_Labels">Birthdate</p>
            <TextField
              name="birthdate"
              type="date"
              
              variant="outlined"
              fullWidth
              value={form.birthdate}
              onInput={onFormInputChange}
              onChange={(event) => {setBirth(event.target.value)}}
            ></TextField>
          </div>

          <p className="text_Labels">Contact Number</p>
          <TextField
            name="contact"
            type="contact"
            label="Contact No."
            variant="outlined"
            fullWidth
            value={form.contact}
            onInput={onFormInputChange}
            onChange={(event) => {setContact(event.target.value)}}
          ></TextField>
          <p className="text_Labels">Email Address</p>
          <TextField
            name="email"
            type="email"
            label="Email"
            variant="outlined"
            fullWidth
            value={form.email}
            onInput={onFormInputChange}
            onChange={(event) => {setEmail(event.target.value)}}
          ></TextField>
          <p className="text_Labels">Password</p>
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            name="password"
            fullWidth
            value={form.password}
            onInput={onFormInputChange}
            onChange={(event) => {setPassword(event.target.value)}}
          ></TextField>
          <center>
            <button className="button_SignUp" type="submit" onClick={onSubmit}>
              Sign Up
            </button>
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

export default ClientSignUp;
