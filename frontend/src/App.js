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
import RiderSignin from "./pages/Rider/rider_signin";
import ClientSignin from "./pages/Client/client_signin";
import ClientUpdatesTab from "./pages/delivery-updates/UpdateStatus/ClientUpdatesTab";
import { UserProvider } from "./contexts/user.context";
import PrivateRoute from "./pages/PrivateRoute.page";
import StatusOfDelivery from "./pages/Rider/DeliveryStatusOfDeliveryFolder/StatusOfDelivery";
import RiderDeliveryItemInfo from "./pages/Rider/RiderDeliveryInfoFolder/DeliveryItemInfo";

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route exact path="/client/signup" element={<ClientSignUp />} />
          <Route exact path="/client/signin" element={<ClientSignin />} />
          <Route exact path="/rider/signup" element={<RiderSignUp />} />
          <Route exact path="/rider/signin" element={<RiderSignin />} />
          <Route path="/" element={<FirstPage />} />
          <Route element={<PrivateRoute />}>
            <Route path="/rider/homepage" element={<RiderHomepage />} />
            <Route path="/client/homepage" element={<ClientHomepage />} />
            <Route path="about" element={<AboutUs />} />
            <Route path="/client/profile" element={<ClientProfile />} />
            <Route path="/rider/profile" element={<RiderProfile />} />
            <Route path="/delivery-updates" element={<DisplayUpdatePage />} />
            <Route path="/delivery-offers" element={<DisplayOfferPage />} />
            <Route path="/update-status" element={<ClientUpdatesTab />} />
            <Route path="/test" element={<Test />} />
            <Route
              path="/rider-status-of-delivery"
              element={<StatusOfDelivery />}
            />
            <Route
              path="/rider/deliveryInfo"
              element={<RiderDeliveryItemInfo />}
            />
          </Route>
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
