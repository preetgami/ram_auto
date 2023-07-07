import React from 'react';
import './ScrollSnapping.css';
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Review from '../reviews/Review';


const ScrollSnapping = () => {
    return (
        <div className='main_scroll'>
        <div className="scroll-container">
            <div className="car-image car1">
                <div className='card-on-image'>
                <h1 className='title1'> What we do? <br /></h1>
                <p className='main-body-text'>
                            Ram Auto Garage is a <span style={{ backgroundColor: "#AAFF00",color:"#000000"}}>full-service Auto Repair Shop </span> providing quality car care in Eldoret. 
                          
                            We provide <span style={{ backgroundColor: "#AAFF00", color: "#000000" }}>honest
                                and professional </span>auto repair and vehicle maintenance services to the residents of Eldoret.
                            Not only do we offer professional automotive service <span style={{ backgroundColor: "#AAFF00", color: "#000000" }}>specializing in import and domestic maintenance, diagnostics and car repairs.</span>
                we understand that your vehicle is a major investment, and that is why we care for each customer’s vehicle as if it were our own.
                </p>
                </div>
            </div>
                <div className="car-image car2">
                    <div className='card-on-image'>
                        <h1 className='title1'>Quick Links
                            <br /></h1>
                        <p className='nav-links-card'>
                            <ul className='nav-links-card'>
                            <li>
                                    <Link to="/services">SERVICES  </Link>

                            </li>
                            <li>
                                    <Link to="/auth">Log in</Link>

                            </li>
                            <li>
                                    <Link to="/about">About</Link>

                            </li>
                            
                            </ul>
                        </p></div>
                </div>
            
                <div className="car-image car3">
                    <div className='card-on-image'>
                        <h1 className='title1'>WHAT OUR CLIENTS SAY
                            <br /></h1>
                        <div className="main-body-text">
                            <Review/>
                        </div></div>
                </div>
                <div className="car-image car4">
                    <div className='card-on-image'>
                        <h1 className='title1'>Working Hours
                            <br /></h1>
                        <p className='main-body-text'>
                            
                            MONDAY-FRIDAY <span style={{ backgroundColor: "#AAFF00", color: "#000000" }}>8.00AM-5.00PM</span>
                            <br/>
                            SATURDAY <span style={{ backgroundColor: "#AAFF00", color: "#000000" }}>8.00AM-12.00PM</span>
                        </p></div>
                </div>
                <div className="car-image car5">
                    <div className='card-on-image'>
                        <h1 className='title1'>About Us
                            <br /></h1>
                        <p className='main-body-text'>
                            Ram auto garage was established since 
                            <span style={{ backgroundColor: "#AAFF00", color: "#000000" }}> 1979 </span> 
                            in eldoret. We are blessed that 
                            for <span style={{ backgroundColor: "#AAFF00", color: "#000000" }}> over 35 years </span> 
                             the business has been built on repeat customers and their referral.... all without advertising!



                            Our mechanics are trained to use state-of-the-art tools and equipment to provide the best service possible for your vehicle.
                        </p></div>
                </div>
            <div className="car-image car6">
                <div className="car-image car6">
                    <div className='card-on-image'>
                        <h1 className='title1'>Get In touch <br /></h1>
                            <div className='main-body-text_footer'>
                                © EST. 1979 Ram Auto. All rights reserved.
                                <br />
                                Terms of Service | Privacy Policy
                                <br />

                                <br />
                                RAM AUTO GARAGE,

                                P.O BOX 612,


                                ELDORET
                                <br />

                                POSTAL CODE : 30100
                                <br />

                                Phone: 
                                <span style={{ backgroundColor: "#AAFF00", color: "#000000" }}>+254 53 2061941</span>,  Email: info@ramautogarage.com
                                <br />
                                <p className='address'>
                                <a target="_blank" href="https://www.google.com/maps/place/Ram+Auto+Garage/@0.512616,35.274325,14z/data=!4m6!3m5!1s0x178101bb7148d8d7:0x593e5e868397351c!8m2!3d0.5126161!4d35.2743247!16s%2Fg%2F1hhjxkq31?hl=en&entry=ttu"> (CLICK)Address: Eldoret,KE </a>
                                </p>




                            </div>
                        <p className='main-body-text'>
                            </p></div>
                
                </div>

            </div>
            
            

        </div>
</div>

    );
};

export default ScrollSnapping;
