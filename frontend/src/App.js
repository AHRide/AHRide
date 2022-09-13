import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Homepage from './pages/homepage';
import AboutUs from './pages/aboutUs';
import Test from './pages/test';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/test' element={<Test />} />
				<Route path='/' element={<Homepage />} />
				<Route path='about' element={<AboutUs />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
