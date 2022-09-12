import React from "react";
import NavBar from "../components/NavBar";

import { Link } from "react-router-dom";

function Homepage() {
  return (
    <>
      <NavBar />

      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </>
  );
}

export default Homepage;
