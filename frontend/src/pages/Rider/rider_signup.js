import React from "react";
import { useContext, useState } from "react";
import "./rider_signup.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowRightAlt";
import { useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/user.context";
import { TextField } from "@mui/material";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import MenuItem from "@mui/material/MenuItem";
import Axios from "axios";
import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

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

const RiderSignUp = () => {
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
    Axios.post("http://localhost:3001/createUserRider", {
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
    navigate(redirectTo ? redirectTo : "/rider/homepage");
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
    <>
      <Row className="RowPrperty">
        <Col sm={8} className="columnLeft">
          <div>
            <FirstPageIcon
              sx={{ fontSize: 40 }}
              className="button_Home_SignUp"
              onClick={() => {
                navigate("/");
              }}
              type="submit"
            ></FirstPageIcon>
          </div>
          <div className="RiderSignUpMain">
            <p className="text_SignUp">Sign Up</p>
            <p className="text_TagLine">
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
                label="."
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

            <p className="text_Labels_SignUp">License Number</p>
            <TextField
              name="name"
              type="name"
              label="License Number"
              variant="outlined"
              fullWidth
            ></TextField>
            <p className="text_Labels_SignUp">Type of Vehicle</p>
            <Row>
              <Col>
                <Card className="cardProperty">
                  <Card.Body>
                    <TwoWheelerIcon sx={{ fontSize: 70 }} />
                    <Card.Text>Motorcycle</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="cardProperty">
                  <Card.Body>
                    <DirectionsCarFilledIcon sx={{ fontSize: 70 }} />
                    <Card.Text>Car</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="cardProperty">
                  <Card.Body>
                    <LocalShippingIcon sx={{ fontSize: 70 }} />
                    <Card.Text>Truck</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <p className="text_Labels_SignUp">Plate Number</p>
            <TextField
              name="name"
              type="name"
              label="PlateNumber"
              variant="outlined"
              fullWidth
            ></TextField>
            <center>
              <ArrowForwardIcon
                sx={{ fontSize: 120 }}
                className="button_SignUp_Rider_SignUp"
              ></ArrowForwardIcon>
            </center>
          </div>
        </Col>
        <Col sm={4} className="columnR_SignUp2" >
          <div className="blankPageTop_SignUp"></div>
          <p className="text_LabelR_SignUp">Already have an account?</p>
          <center>
            <button
              onClick={() => {
                //   navigate("/rider/signin");
              }}
              className="button_LogIn_SignUp"
              type="submit"
            >
              Log In
            </button>
          </center>
          <div className="blankPageBottom_SignUp"></div>
        </Col>
      </Row>
    </>
  );
};

export default RiderSignUp;
