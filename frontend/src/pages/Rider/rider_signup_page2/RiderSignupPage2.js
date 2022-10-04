import React, { useState, useContext } from 'react';
import FirstPageIcon from "@mui/icons-material/FirstPage";
import { TextField, Ic, Grid } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowRightAlt";
import { Col, Row } from 'react-bootstrap'
import "./RiderSignupPage2.css";
import Card from 'react-bootstrap/Card';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';


function RiderSignUpPage2(){
    return (
        <>
        <Row className="RowPrperty">
        <FirstPageIcon
            sx={{ fontSize: 60 }}
            className="button_Home2"
            onClick={() => {
            //navigate("/");
            }}
            type="submit"
        ></FirstPageIcon>
        </Row>
        <Row className="RowPrperty">
            
            <Col sm={8} className='columnLeft'>
            <div className="RiderSignUpMain">
                        <p className="text_SignUp">Sign Up</p>
                        <p className="text_TagLine">
                            Creating an account only take a minute or so and you will become
                            part of us! Great exchange, right?
                        </p>
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
                            <Col >
                            <Card style={{ width: '18rem' }} className="cardProperty">
                            <Card.Body>
                                <TwoWheelerIcon></TwoWheelerIcon>
                                <Card.Text>Motorcycle</Card.Text>
                            </Card.Body>
                            </Card>
                            </Col>
                            <Col>
                            <Card style={{ width: '18rem' }} className="cardProperty">
                            <Card.Body>
                                <DirectionsCarFilledIcon/>
                                <Card.Text>Car</Card.Text>
                            </Card.Body>
                            </Card>
                            </Col>
                            <Col>
                            <Card style={{ width: '18rem' }} className="cardProperty">
                            <Card.Body>
                                <LocalShippingIcon/>
                                <Card.Text>Truck</Card.Text>
                            </Card.Body>
                            </Card>
                            </Col>
                        </Row>
                        <p className="text_Labels_SignUp">Plate Number</p>
                        <TextField
                            name="name"
                            type="name"
                            label= "PlateNumber" 
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
            <Col sm={4} className='columnR_SignUp2'>
                <div className="blankPageTop_SignUp"></div>
                <p className="text_LabelR_SignUp">Already have an account?</p>
                <center>
                    <button
                        onClick={() => {
                            //   navigate("/rider/signin");
                        } }
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

export default RiderSignUpPage2;