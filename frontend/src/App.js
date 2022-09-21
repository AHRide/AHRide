import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "./pages/aboutUs";
import Test from "./pages/test";
import ClientSignUp from "./pages/Client/client_signup";
import RiderSignUp from "./pages/Rider/rider_signup";
import RiderProfile from "./pages/Rider/RiderProfile";
import ClientProfile from "./pages/Client/ClientProfile";
import ClientHomepage from "./pages/Client/ClientHomepage";
import RiderHomepage from "./pages/Rider/RiderHomepage";
import DisplayUpdatePage from "./pages/delivery-updates/DisplayUpdatePage";
import DisplayOfferPage from "./pages/delivery-offers/DisplayOfferPage";
import FirstPage from "./pages/FirstPage/FirstPage";
import SigninPage from "./pages/LoginPage/Form";
import ClientUpdatesTab from "./pages/delivery-updates/UpdateStatus/ClientUpdatesTab";
import StatusOfDelivery from "./pages/Rider/DeliveryStatusOfDeliveryFolder/StatusOfDelivery";
import RiderDeliveryItemInfo from "./pages/Rider/RiderDeliveryInfoFolder/DeliveryItemInfo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/test" element={<Test />} />
        <Route path="/" element={<FirstPage />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="/rider/signup" element={<RiderSignUp />} />
        <Route path="/client/profile" element={<ClientProfile />} />
        <Route path="/rider/profile" element={<RiderProfile />} />
        <Route path="/client/homepage" element={<ClientHomepage />} />
        <Route path="/rider/homepage" element={<RiderHomepage />} />
        <Route path="/delivery-updates" element={<DisplayUpdatePage />} />
        <Route path="/delivery-offers" element={<DisplayOfferPage />} />
        <Route path="/login" element={<SigninPage />} />
        <Route path="/client/signup" element={<ClientSignUp />} />
        <Route path="/update-status" element={<ClientUpdatesTab />} />
        <Route path="/rider-status-of-delivery" element={<StatusOfDelivery />} />
        <Route path="/rider/deliveryInfo" element={<RiderDeliveryItemInfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
