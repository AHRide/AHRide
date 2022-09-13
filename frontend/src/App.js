import "./App.css";

import Homepage from "./pages/homepage";
import AboutUs from "./pages/aboutUs";
import RiderProfile from "./pages/Rider/RiderProfile";
import ClientProfile from "./pages/Client/ClientProfile";
import ClientHomepage from "./pages/Client/ClientHomepage";
import RiderHomepage from "./pages/Rider/RiderHomepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="/client/profile" element={<ClientProfile />} />
        <Route path="/rider/profile" element={<RiderProfile />} />
        <Route path="/client/homepage" element={<ClientHomepage />} />
        <Route path="/rider/homepage" element={<RiderHomepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
