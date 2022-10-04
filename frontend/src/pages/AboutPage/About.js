import "./About.css";
import NavBarClient from "../../components/NavBarClient";
import Picture1 from "../../images/Picture1.png"
import Picture2 from "../../images/Picture2.png"
import Picture3 from "../../images/Picture3.png"

const AboutPageClient = () => {

    return (
        <>
            <NavBarClient />
            <div className="about-form-container">
                <div className="group-about-form-container">
                    <h1>about</h1>
                    <img className='about-form-img' src={Picture1} alt='Rider' />
                    <img className='about-form-img2' src={Picture2} alt='Men' />
                    <div className="in-about-form-container">
                        <img className="about-form-img3" src={Picture3} alt="Logo" />
                        <div className="in-about-form-container2">
                            <p>AhRide is the ideal disruption and change agent for the delivery industry in this
                                technologically advanced world when everything can be completed with a single click.
                                We are a platform that offers on-demand same-day delivery and allows customers to
                                place deliveries using our website.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutPageClient;
