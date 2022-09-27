import React from "react";
import "./client_signup.css";
import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/user.context";
import { TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import Axios from "axios";

const genders = [
  {
    value: "Male",
    label: "Male",
  },
  {
    value: "Female",
    label: "Female",
  },
  {
    value: "Others",
    label: "Others",
  },
];

function ClientSignUp() {
  const [gender, setGender] = React.useState("Male");

  const handleChange = (event) => {
    setGender(event.target.value);
  };

  const navigate = useNavigate();
  const location = useLocation();

  const [name, setName] = useState("");
  const [birthdate, setBirth] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createUser = () => {
    Axios.post("http://localhost:3001/createUser", {
      name,
      gender,
      birthdate,
      contact,
      email,
      password,
    });
  };

  // As explained in the Login page.
  const { emailPasswordSignup } = useContext(UserContext);
  const [form, setForm] = useState({
    name: "",
    gender: "",
    birthdate: "",
    contact: "",
    email: "",
    password: "",
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
  };

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
    <body className="bodyPage_SignUp">
      <div className="columnL_SignUp">
        <FirstPageIcon
          sx={{ fontSize: 60 }}
          className="button_Home_SignUp"
          onClick={() => {
            navigate("/");
          }}
          type="submit"
        ></FirstPageIcon>
        <div className="ClientSignUpMain">
          <p className="text_SignUp">Sign Up</p>
          <p className="text_TagLine_SignUp">
            Creating an account only take a minute or so and you will become
            part of us! Great exchange, right?
          </p>
          <p className="text_Labels_SignUp">Name</p>
          <TextField
            name="name"
            type="name"
            label="Name"
            variant="outlined"
            fullWidth
            value={form.name}
            onInput={onFormInputChange}
            onChange={(event) => {
              setName(event.target.value);
            }}
          ></TextField>
          <div className="innercolumnL_SignUp">
            <p className="text_Labels_SignUp">Gender</p>
            <TextField
              select
              variant="outlined"
              fullWidth
              label="Select"
              value={gender}
              onInput={onFormInputChange}
              onChange={handleChange}
            >
              {genders.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <div className="innercolumnR_SignUp">
            <p className="text_Labels_SignUp">Birthdate</p>
            <TextField
              name="birthdate"
              type="date"
              variant="outlined"
              fullWidth
              value={form.birthdate}
              onInput={onFormInputChange}
              onChange={(event) => {
                setBirth(event.target.value);
              }}
            ></TextField>
          </div>

          <p className="text_Labels_SignUp">Contact Number</p>
          <TextField
            name="contact"
            type="number"
            label="Contact No."
            variant="outlined"
            fullWidth
            value={form.contact}
            onInput={onFormInputChange}
            onChange={(event) => {
              setContact(event.target.value);
            }}
          ></TextField>
          <p className="text_Labels_SignUp">Email Address</p>
          <TextField
            name="email"
            type="email"
            label="Email"
            variant="outlined"
            fullWidth
            value={form.email}
            onInput={onFormInputChange}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          ></TextField>
          <p className="text_Labels_SignUp">Password</p>
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            name="password"
            fullWidth
            value={form.password}
            onInput={onFormInputChange}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          ></TextField>
          <center>
            <button
              className="button_SignUp_SignUp"
              type="submit"
              onClick={onSubmit}
            >
              Sign Up
            </button>
          </center>
        </div>
      </div>
      <div className="columnR_SignUp">
        <div className="blankPageTop_SignUp"></div>
        <p className="text_LabelR_SignUp">Already have an account?</p>
        <center>
          <button
            onClick={() => {
              navigate("/client/signin");
            }}
            className="button_LogIn_SignUp"
            type="submit"
          >
            Log In
          </button>
        </center>
        <div className="blankPageBottom_SignUp"></div>
      </div>
    </body>
  );
}

export default ClientSignUp;
