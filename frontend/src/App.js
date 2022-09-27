import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutUs from './pages/aboutUs';
import Test from './pages/test';
import ClientSignUp from './pages/Client/client_signup';
import RiderSignUp from './pages/Rider/rider_signup';
import RiderProfile from './pages/Rider/RiderProfile';
import ClientProfile from './pages/Client/ClientProfile';
import ClientHomepage from './pages/Client/ClientHomepage';
import RiderHomepage from './pages/Rider/RiderHomepage';
import DisplayUpdatePage from './pages/delivery-updates/DisplayUpdatePage';
import DisplayOfferPage from './pages/delivery-offers/DisplayOfferPage';
import FirstPage from './pages/FirstPage/FirstPage';
import SigninPage from './pages/LoginPage/Form';
import ClientUpdatesTab from './pages/delivery-updates/UpdateStatus/ClientUpdatesTab';
import { UserProvider } from './contexts/user.context';
import PrivateRoute from './pages/PrivateRoute.page';
import StatusOfDelivery from './pages/Rider/DeliveryStatusOfDeliveryFolder/StatusOfDelivery';
import RiderDeliveryItemInfo from './pages/Rider/RiderDeliveryInfoFolder/DeliveryItemInfo';
import BookDelivery from './pages/book-delivery/BookDelivery';
import BookMapFrom from './pages/book-delivery/BookMapFrom';
import BookMapTo from './pages/book-delivery/BookMapTo';
import GoogleMapComp from './components/GoogleMap';

function App() {
	return (
		<BrowserRouter>
			<UserProvider>
				<Routes>
					<Route path='/client/signup' element={<ClientSignUp />} />
					<Route exact path='/rider/signup' element={<RiderSignUp />} />
					<Route exact path='/login' element={<SigninPage />} />
					<Route element={<PrivateRoute />}>
						<Route exact path='/' element={<RiderHomepage />} />
						<Route path='/client/homepage' element={<ClientHomepage />} />
						<Route path='about' element={<AboutUs />} />
						<Route path='/client/profile' element={<ClientProfile />} />
						<Route path='/rider/profile' element={<RiderProfile />} />
						<Route path='/client/book' element={<BookDelivery />} />
						<Route path='/delivery-updates' element={<DisplayUpdatePage />} />
						<Route path='/delivery-offers' element={<DisplayOfferPage />} />
						<Route path='/update-status' element={<ClientUpdatesTab />} />
						<Route path='/test' element={<Test />} />
						<Route
							path='/rider-status-of-delivery'
							element={<StatusOfDelivery />}
						/>
						<Route
							path='/rider/deliveryInfo'
							element={<RiderDeliveryItemInfo />}
						/>
					</Route>
				</Routes>
			</UserProvider>
			{/* <Routes>
        <Route path="/" element={<FirstPage />} /       
      </Routes> */}
		</BrowserRouter>
	);
}

export default App;
