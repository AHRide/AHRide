import React, { useState, useEffect } from "react";
import NavBarRider from "../../../components/NavBarRider";
import "./StatusOfDelivery.css"
import {Row, Col, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Grid } from "@mui/material";
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";



const StatusOfDelivery = () => {
  const location = useLocation();
  // const [updateList, setUpdateList] = useState([]);
  

  // useEffect(() => {
  //   axios.get(`http://localhost:3001/getDeliveryUpdates/${location.state._id}/`).then((response) => {
  //     setUpdateList(response.data);
  //     console.log(response.data);
  //   });
  // }, [location.state._id]);

  return(
    <>
      <NavBarRider/>
      {/* {updateList.map((lists, index) => ( */}
      <Container fluid >
        <Row >
          <Container>
              <Link to="/delivery-updates"><KeyboardBackspaceOutlinedIcon sx={{ fontSize: 50 }} className="backButton" /></Link>
          </Container>
        </Row>
        <Row>
          <Row></Row>
          <Row></Row>
          <Col xs={9}className="LeftPane">
          <div class="d-flex justify-content-end" size="medium">
           <Button variant="contained" color="error">Report</Button>
          </div>

            <Container className="ContainerLowerRow">
              <h1 className="HeaderTextLabel">Client Information</h1>
              <Row>
                <Col><h1 className="DataAndTextLable">Name: DELTA mama</h1></Col>
                <Col><h1 className="DataAndTextLable">Contact Number: 091111</h1></Col>
              </Row>
              <Row >
                <Col xs={2} >
                  <Container className="MarginerTop">
                    <Row><h1 className="DataAndTextLable">From:</h1></Row>
                    <Row><h1 className="InvisibleInk">None</h1></Row>
                    <Row><h1 className="DataAndTextLable">To:</h1></Row>
                  </Container>
                </Col>
                <Col xs={7}>
                  <Container className="MarginerTop">
                    <Row>
                    <Col className="FromToContainer">
                        <h1 className="DataAndTextLable">From padro</h1>
                    </Col>
                    </Row>
                    <Row>
                      <Container className="CenterText">
                          <ArrowDownwardOutlinedIcon sx={{ fontSize: 30 }} color="black"/>
                      </Container>
                    </Row>
                    <Row>
                    <Col className="FromToContainer"><h1 className="DataAndTextLable">SM seadile lang nya</h1></Col>
                    </Row>
                  </Container>
                </Col>
                <Col xs={3}>
                  <Container className="WhitePayment">
                    <Row><h2>To Pay</h2></Row>
                    <Col>
                      <h2 className="CenterText">PHP 900.00</h2>
                    </Col>
                  </Container>
                </Col>
              </Row>
              <Container className="ContainerRevceiverContact">
              <Row>
                
                {/* <Col xs={5}><TextField id="ReceiversName" label="Receiver Name:" variant="outlined" className="TextField2"/></Col> */}
                {/* <Col xs={5}><TextField id="ContactNo" label="Contact Number:" variant="outlined" className="TextField2"/></Col> */}
                <Col>
                  <h2 className="HeaderTextLabelSmall">Receiver's Name:</h2>
                  <Box  className="TextField2"> 
                    <Col className="FromToContainer">
                          <h1 className="DataAndTextLable">dawaterist</h1>
                      </Col>
                    </Box>
                </Col>
                <Col>
                  <h2 className="HeaderTextLabelSmall">Contact Number:</h2>
                  <Box className="TextField2"> 
                    <Col className="FromToContainer">
                          <h1 className="DataAndTextLable">22222</h1>
                      </Col>
                  </Box>
                </Col>
              </Row>
              </Container>
                <h1 className="DataAndTextLable">Note</h1>
                <Box sx={{ width: 1200, maxWidth: '100%', height:150 }} className="WhiteNoteBox"> 
                  <Col >
                      <h1 className="NoteContent">Kapuy na kaayu ako life</h1>
                  </Col>
                </Box>

            </Container>
            <Container className="buttonMargine">
            <Row>
              <Col>
                <Button variant="contained" size="large" className="button">
                  Picking up Item
                </Button>
              </Col>
              <Col>
                <Button variant="contained" size="large" className="button">
                  Picked up Item
                </Button>
              </Col>
              <Col>
                <Button variant="contained" size="large" className="button">
                  Item on the Way
                </Button>
              </Col>
              <Col>
                <Button variant="contained" size="large" className="button">
                  Delivered
                </Button>
              </Col>
            </Row>
            </Container>
           
            
          </Col>
          <Col xs={3} className="RightPane">
            <Container>
              <h2 className="StatusText">
               Status
              </h2>
              <h2 className="DataAndTextLable">
               Time Elapsed: 20 mins
              </h2>
            </Container>
            <Container>
          
            <Grid container direction={"column"} spacing={0}>
              <Grid item>
                <FormControlLabel control={<Checkbox />} label="Picking up the item" />
              </Grid>
              <Grid item>
                <MoreVertOutlinedIcon/>
              </Grid>
              <Grid item>
                <MoreVertOutlinedIcon/>
              </Grid>
              <Grid item>
                <MoreVertOutlinedIcon/>
              </Grid>
              <Grid item>
                <FormControlLabel control={<Checkbox />} label="Picked up item" />
              </Grid>
              <Grid item>
                <MoreVertOutlinedIcon/>
              </Grid>
              <Grid item>
                <MoreVertOutlinedIcon/>
              </Grid>
              <Grid item>
                <MoreVertOutlinedIcon/>
              </Grid>
              <Grid item>
                <FormControlLabel control={<Checkbox />} label="Item on the way" />
              </Grid>
              <Grid item>
                <MoreVertOutlinedIcon/>
              </Grid>
              <Grid item>
                <MoreVertOutlinedIcon/>
              </Grid>
              <Grid item>
                <MoreVertOutlinedIcon/>
              </Grid>
              <Grid item>
                <FormControlLabel control={<Checkbox />} label="Delivered" />
              </Grid>
              
            </Grid>
          
            </Container>
            <Container className="CancelButtonContainer">
            <Stack spacing={20} direction="row">
              <Box></Box>
              <Button variant="contained" color="error">Cancel</Button>
            </Stack>
            </Container>
          </Col>
        </Row>
      </Container> 
                    {/* ))}             */}
    </>
  );
}

export default StatusOfDelivery;