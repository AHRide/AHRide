import './App.css';

import Homepage from './pages/homepage';
import AboutUs from './pages/aboutUs';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Homepage />} />
				<Route path='about' element={<AboutUs />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
