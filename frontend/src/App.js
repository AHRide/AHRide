import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Homepage from "./pages/homepage";
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
 import Signin_Page from "./pages/LoginPage/Form";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/test" element={<Test />} />
        <Route path="/" element={<Homepage />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="client-signup" element={<ClientSignUp />} />
        <Route path="rider-signup" element={<RiderSignUp />} />
        <Route path="/client/profile" element={<ClientProfile />} />
        <Route path="/rider/profile" element={<RiderProfile />} />
        <Route path="/client/homepage" element={<ClientHomepage />} />
        <Route path="/rider/homepage" element={<RiderHomepage />} />
        <Route path="delivery-updates" element={<DisplayUpdatePage />} />
        <Route path="delivery-offers" element={<DisplayOfferPage />} />
        <Route path="/firstpage" element={<FirstPage />} />
        <Route path="/login" element={<Signin_Page />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
