import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../../contexts/user.context';
import NavBarClient from '../../../components/NavBarClient';
import '../UpdateStatus/ClientUpdatesTab.css';
import { Row, Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Backdrop from '@mui/material/Backdrop';
import ModalRate from '../../../components/ModalRate';

const ClientUpdatesTab = () => {
	const [open2, setOpen2] = useState(false);
	const handleClose2 = () => {
		setOpen2(false);
	};
	const handleToggle2 = () => {
		setOpen2(!open2);
	};

	const { user } = useContext(UserContext);
	const location = useLocation();
	const [updateList, setUpdateList] = useState([]);
	const [userProfileList, setuserProfileList] = useState([]);
	const [riderProfileList, setRiderProfileList] = useState([]);

	useEffect(() => {
		if (location.state.pending === 'pending') {
			axios
				.get(`http://localhost:3001/getBookDelivery/${location.state._id}/`)
				.then((response) => {
					setUpdateList(response.data);
				});
		} else {
			axios
				.get(`http://localhost:3001/getDeliveryUpdates/${location.state._id}/`)
				.then((response) => {
					setUpdateList(response.data);
				});

			axios
				.get(`http://localhost:3001/getUserRider/${location.state.email}`)
				.then((response) => {
					setRiderProfileList(response.data);
				});
		}
		axios
			.get(`http://localhost:3001/getUser/${user._profile.data.email}`)
			.then((response) => {
				setuserProfileList(response.data);
			});
	}, [
		location.state._id,
		location.state.email,
		location.state.pending,
		user._profile.data.email,
		setuserProfileList,
		setUpdateList,
		setRiderProfileList,
	]);

	return (
		<>
			<NavBarClient />
			{updateList.map((lists, index) => (
				<Container fluid key={index}>
					<Row>
						<Container>
							<Link to='/delivery-updates'>
								<KeyboardBackspaceOutlinedIcon
									sx={{ fontSize: 50 }}
									className='backButton'
								/>
							</Link>
							<div className='RateLocation'>
								<button onClick={handleToggle2} className='RateButton'>
									Rate
								</button>
								<Backdrop
									sx={{
										color: '#fff',
										zIndex: (theme) => theme.zIndex.drawer + 1,
									}}
									open={open2}
									onClick={handleClose2}>
									<ModalRate />
								</Backdrop>
							</div>
						</Container>
					</Row>
					<Row>
						<Col xs={9} className='LeftPane'>
							{location.state.pending !== 'pending' && (
								<Container className='ContainerUpperRow'>
									{riderProfileList.map((rider, index) => (
										<div key={index}>
											<h1 className='HeaderTextLabel'>Rider's Information</h1>
											<Row>
												<Col>
													<h1 className='DataAndTextLable'>
														Rider's name: {rider.name}
													</h1>
												</Col>
												<Col>
													<h1 className='DataAndTextLable'>
														Vehicle: {lists.rider_vehi}
													</h1>
												</Col>
											</Row>
											<Row>
												<Col>
													<h1 className='DataAndTextLable'>
														Contact Number: {rider.contact}
													</h1>
												</Col>
											</Row>
										</div>
									))}
								</Container>
							)}
							<Container className='ContainerLowerRow'>
								<h1 className='HeaderTextLabel'>Client Information</h1>
								{userProfileList.map((user, index) => (
									<Row key={index}>
										<Col>
											<h1 className='DataAndTextLable'>Name: {user.name}</h1>
										</Col>
										<Col>
											<h1 className='DataAndTextLable'>
												Contact Number: {user.contact}
											</h1>
										</Col>
									</Row>
								))}
								,
								<Row>
									<Col xs={2}>
										<Container className='MarginerTop'>
											<Row>
												<h1 className='DataAndTextLable'>From:</h1>
											</Row>
											<Row>
												<h1 className='InvisibleInk'>None</h1>
											</Row>
											<Row>
												<h1 className='DataAndTextLable'>To:</h1>
											</Row>
										</Container>
									</Col>
									<Col xs={7}>
										<Container className='MarginerTop'>
											<Row>
												<Col className='FromToContainer'>
													<h1 className='DataAndTextLable'>{lists.from}</h1>
												</Col>
											</Row>
											<Row>
												<Container className='CenterText'>
													<ArrowDownwardOutlinedIcon
														sx={{ fontSize: 30 }}
														color='black'
													/>
												</Container>
											</Row>
											<Row>
												<Col className='FromToContainer'>
													<h1 className='DataAndTextLable'>{lists.to}</h1>
												</Col>
											</Row>
										</Container>
									</Col>
									<Col xs={3}>
										<Container className='WhitePayment'>
											<Row>
												<h2>To Pay</h2>
											</Row>
											<Col>
												<h2 className='CenterText'>PHP {lists.payment}.00</h2>
											</Col>
										</Container>
									</Col>
								</Row>
								<Container className='ContainerRevceiverContact'>
									<Row>
										{/* <Col xs={5}><TextField id="ReceiversName" label="Receiver Name:" variant="outlined" className="TextField2"/></Col> */}
										{/* <Col xs={5}><TextField id="ContactNo" label="Contact Number:" variant="outlined" className="TextField2"/></Col> */}
										<Col>
											<h2 className='HeaderTextLabelSmall'>Receiver's Name:</h2>
											<Box className='TextField2'>
												<Col className='FromToContainer'>
													<h1 className='DataAndTextLable'>
														{lists.receiver_name}
													</h1>
												</Col>
											</Box>
										</Col>
										<Col>
											<h2 className='HeaderTextLabelSmall'>Contact Number:</h2>
											<Box className='TextField2'>
												<Col className='FromToContainer'>
													<h1 className='DataAndTextLable'>
														{lists.receiver_cont}
													</h1>
												</Col>
											</Box>
										</Col>
									</Row>
								</Container>
								<h1 className='DataAndTextLable'>Note</h1>
								<Box
									sx={{ width: 1200, maxWidth: '100%', height: 150 }}
									className='WhiteNoteBox'>
									<Col>
										<h1 className='NoteContent'>{lists.note}</h1>
									</Col>
								</Box>
							</Container>
							<Container></Container>
						</Col>
						<Col xs={3} className='RightPane'>
							<Container>
								<h2 className='StatusText'>Status</h2>
								<h2 className='DataAndTextLable'>
									Estimated Time: {lists.duration}
								</h2>
							</Container>
							<Container>
								<Grid container direction={'column'} spacing={0}>
									<Grid item>
										<FormControlLabel
											control={<Checkbox />}
											label='Picking up the item'
										/>
									</Grid>
									<Grid item>
										<MoreVertOutlinedIcon />
									</Grid>
									<Grid item>
										<MoreVertOutlinedIcon />
									</Grid>
									<Grid item>
										<MoreVertOutlinedIcon />
									</Grid>
									<Grid item>
										<FormControlLabel
											control={<Checkbox />}
											label='Picked up item'
										/>
									</Grid>
									<Grid item>
										<MoreVertOutlinedIcon />
									</Grid>
									<Grid item>
										<MoreVertOutlinedIcon />
									</Grid>
									<Grid item>
										<MoreVertOutlinedIcon />
									</Grid>
									<Grid item>
										<FormControlLabel
											control={<Checkbox />}
											label='Item on the way'
										/>
									</Grid>
									<Grid item>
										<MoreVertOutlinedIcon />
									</Grid>
									<Grid item>
										<MoreVertOutlinedIcon />
									</Grid>
									<Grid item>
										<MoreVertOutlinedIcon />
									</Grid>
									<Grid item>
										<FormControlLabel
											control={<Checkbox />}
											label='Delivered'
										/>
									</Grid>
								</Grid>
							</Container>
							<Container className='CancelButtonContainer'>
								<Stack spacing={30} direction='row'>
									<Box></Box>
									<Button variant='contained' color='error'>
										Cancel
									</Button>
								</Stack>
							</Container>
						</Col>
					</Row>
				</Container>
			))}
		</>
	);
};

export default ClientUpdatesTab;
