import React, { useState } from "react";
import "./About.css";
import NavBarClient from "../../components/NavBarClient";
import Picture1 from "../../images/Picture1.png"
import Picture2 from "../../images/Picture2.png"

const AboutPageRider = () => {

    return (
        <>
            <NavBarClient />
            <div className="about-form-container">
                <div className="group-about-form-container">
                    <h1>about</h1>
                    <img className='about-form-img' src={Picture1} alt='Rider' />
                    <img className='about-form-img2' src={Picture2} alt='Men' />
                    <div className="in-about-form-container">
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit
                            esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa
                            qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutPageRider;
