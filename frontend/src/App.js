import "./App.css";
import Signin_Page from './pages/LoginPage/Form';
import Homepage from "./pages/homepage";
import AboutUs from "./pages/aboutUs";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="about" element={<AboutUs />} />
        <Route path='login' element={<Signin_Page />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
