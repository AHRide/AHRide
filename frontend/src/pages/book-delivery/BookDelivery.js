import React, { useState } from 'react';

import './BookDelivery.css';

import NavBarClient from '../../components/NavBarClient';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowDownward from '@mui/icons-material/ArrowDownward';

import {
	Box,
	IconButton,
	Checkbox,
	FormControlLabel,
	TextField,
	Input,
	Button,
} from '@mui/material';
import { orange } from '@mui/material/colors';

import { useJsApiLoader, GoogleMap, MarkerF } from '@react-google-maps/api';
import usePlacesAutocomplete, {
	getGeocode,
	getLatLng,
} from 'use-places-autocomplete';

import {
	Combobox,
	ComboboxInput,
	ComboboxPopover,
	ComboboxList,
	ComboboxOption,
} from '@reach/combobox';
import '@reach/combobox/styles.css';

const center = { lat: 10.315699, lng: 123.885437 };
const containerStyle = {
	width: '100%',
	height: '100%',
};

function BookDelivery() {
	const { isLoaded } = useJsApiLoader({
		id: 'google-map-script',
		googleMapsApiKey: 'AIzaSyBjVHt2JjYCpHVzZOGfYjxdJVPLzkoB8jc',
		libraries: ['places'],
	});

	const [selectedFrom, setSelectedFrom] = useState(null);
	const [selectedTo, setSelectedTo] = useState(null);

	if (!isLoaded) {
		return <div> loading...</div>;
	}

	return (
		<div>
			<NavBarClient />

			<Box
				sx={{ width: '100vw', height: '100vh' }}
				style={{ display: 'flex', flexDirection: 'column', padding: '2rem' }}>
				<div
					style={{
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'space-between',
						padding: '1.5rem',
					}}>
					<IconButton className='back' size='large'>
						<ArrowBackIcon sx={{ color: orange[300] }} fontSize='inherit' />
					</IconButton>
					<div className='bookBox'>Book Delivery</div>
					<div style={{ width: '3rem' }}></div>
				</div>
				<div>
					<div
						style={{
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'space-evenly',
							padding: '1.5rem',
						}}>
						<div>
							<div
								style={{
									display: 'flex',
									flexDirection: 'column',
									justifyContent: 'space-evenly',
								}}>
								<div
									style={{
										display: 'flex',
										flexDirection: 'row',
										justifyContent: 'space-evenly',
									}}>
									<h1 className='textField1'>From:</h1>
									<PlacesAutoCompleteFrom setSelectedFrom={setSelectedFrom} />
								</div>
								<div style={{ alignSelf: 'center', padding: '0.8rem' }}>
									<ArrowDownward sx={{ color: orange[300] }} fontSize='large' />
								</div>
								<div
									style={{
										display: 'flex',
										flexDirection: 'row',
										justifyContent: 'space-evenly',
									}}>
									<h1 className='textField1'>To:</h1>
									<PlacesAutoCompleteTo setSelectedTo={setSelectedTo} />
								</div>
							</div>
							<div style={{ padding: '1rem' }}>
								<FormControlLabel
									control={<Checkbox defaultChecked size='large' />}
									label='Are you the reciever?'
								/>
							</div>
							<div className='border-box'>
								<div className='box-pad'>
									<h2 className='text2'>Reciever Name: </h2>
									<Input
										id='input-textfield'
										variant='standard'
										sx={{
											width: '23rem',
											height: '2.5rem',
											background: '#ffffff',
											border: '1px solid #000000',
											borderRadius: '5px',
										}}
									/>
								</div>
								<div className='box-pad'>
									<h2 className='text2'>Contact Number: </h2>
									<Input
										type='number'
										id='input-textfield'
										sx={{
											width: '23rem',
											height: '2.5rem',
											background: '#ffffff',
											border: '1px solid #000000',
											borderRadius: '5px',
										}}
									/>
								</div>
							</div>
							<h1>Note</h1>
							<div className='border-box'>
								<TextField
									sx={{ background: '#FFFFFF' }}
									fullWidth
									id='outlined-multiline-static'
									placeholder='Do you have special request? or want to input specific locations?'
									multiline
									rows={4}
								/>
							</div>
						</div>

						<div
							style={{
								width: '35rem',
								height: '35rem',
								border: '5px solid #f7bc50',
								borderRadius: '5px',
								boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
							}}>
							<GoogleMap
								zoom={13}
								center={center}
								mapContainerStyle={containerStyle}
								mapContainerClassName='map-containers'
								options={{
									zoomControl: true,
									streetViewControl: false,
									mapTypeControl: false,
									fullscreenControl: false,
								}}>
								{selectedFrom && <MarkerF position={selectedFrom} />}
								{selectedTo && <MarkerF position={selectedTo} />}
							</GoogleMap>
						</div>
					</div>
				</div>
				<div style={{ alignSelf: 'center', padding: '2rem' }}>
					<Button
						sx={{
							width: '15.5rem',
							height: '4rem',

							background: '#F7BC50',
							boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
							borderRadius: '15px',
							color: 'black',
							fontSize: '25px',
						}}>
						Book
					</Button>
				</div>
			</Box>
		</div>
	);
}

const PlacesAutoCompleteFrom = ({ setSelectedFrom }) => {
	const {
		ready,
		value,
		setValue,
		suggestions: { status, data },
		clearSuggestions,
	} = usePlacesAutocomplete();

	const handleSelect = async (address) => {
		setValue(address, false);
		clearSuggestions();

		const results = await getGeocode({ address });
		const { lat, lng } = await getLatLng(results[0]);
		setSelectedFrom({ lat, lng });
	};

	return (
		<Combobox onSelect={handleSelect}>
			<ComboboxInput
				value={value}
				onChange={(e) => setValue(e.target.value)}
				disabled={!ready}
				className='combobox-input'
			/>
			<ComboboxPopover>
				<ComboboxList>
					{status === 'OK' &&
						data.map(({ place_id, description }) => (
							<ComboboxOption key={place_id} value={description} />
						))}
				</ComboboxList>
			</ComboboxPopover>
		</Combobox>
	);
};

const PlacesAutoCompleteTo = ({ setSelectedTo }) => {
	const {
		ready,
		value,
		setValue,
		suggestions: { status, data },
		clearSuggestions,
	} = usePlacesAutocomplete();

	const handleSelect = async (address) => {
		setValue(address, false);
		clearSuggestions();

		const results = await getGeocode({ address });
		const { lat, lng } = await getLatLng(results[0]);
		setSelectedTo({ lat, lng });
	};

	return (
		<Combobox onSelect={handleSelect}>
			<ComboboxInput
				style={{
					width: '44rem',
					height: '3.rem',
				}}
				value={value}
				onChange={(e) => setValue(e.target.value)}
				disabled={!ready}
				className='combobox-input'
			/>
			<ComboboxPopover>
				<ComboboxList>
					{status === 'OK' &&
						data.map(({ place_id, description }) => (
							<ComboboxOption key={place_id} value={description} />
						))}
				</ComboboxList>
			</ComboboxPopover>
		</Combobox>
	);
};

export default BookDelivery;
