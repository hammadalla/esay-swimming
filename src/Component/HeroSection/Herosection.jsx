import React from 'react'
import '../HeroSection/hrosection.css'
import img1 from "../../assets/images/home-slid1.jpg";
import img2 from "../../assets/images/slid-2.jpg";
import img3 from "../../assets/images/home-slid3.jpg";
import swimmingIcon from "../../assets/images/swimming-icon.png";
import { Link } from 'react-router-dom';

export default function Herosection() {
    return (
        <>

            <div className="carousel-section">
                <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        {/* Slide 1 */}
                        <div className="carousel-item active" data-bs-interval="6000">
                            <img src={img1} className="Intro-image zoom" alt="slide 1" />
                            <div className="Intro-image-layer">
                                <div className="Intro-image-layer-pragraph">
                                    <img src={swimmingIcon} alt="icon" />
                                    <h1>Dive into the World of Swimming</h1>
                                </div>
                                <div className="Intro-image-layer-title">
                                    <p>From beginners to pros — we nurture every swimmer’s journey</p>
                                </div>
                                <div className="button-group">
                                    <Link to="/programes" className="button">
                                        <span className="button__icon-wrapper">
                                            <svg viewBox="0 0 14 15" fill="none" width="10" xmlns="http://www.w3.org/2000/svg" className="button__icon-svg">
                                                <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" fill="currentColor" />
                                            </svg>
                                        </span>
                                        Start Your Journey
                                    </Link>
                                </div>
                            </div>
                            {[...Array(10)].map((_, index) => (
                                <span className={`bubble bubble-${index}`} key={index}></span>
                            ))}
                        </div>

                        {/* Slide 2 */}
                        <div className="carousel-item" data-bs-interval="6000">
                            <img src={img2} className="Intro-image zoom" alt="slide 2" />
                            <div className="Intro-image-layer">
                                <div className="Intro-image-layer-pragraph">
                                    <img src={swimmingIcon} alt="icon" />
                                    <h1>Tailored Programs for All Ages & Levels</h1>
                                </div>
                                <div className="Intro-image-layer-title">
                                    <p>Baby Swim | Learn to Swim | Advanced | Adult Fitness | Competitive</p>
                                </div>
                                <div className="button-group">
                                    <Link to="/programes" className="button">
                                        <span className="button__icon-wrapper">
                                            <svg viewBox="0 0 14 15" fill="none" width="10" xmlns="http://www.w3.org/2000/svg" className="button__icon-svg">
                                                <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" fill="currentColor" />
                                            </svg>
                                        </span>
                                        Explore Classes
                                    </Link>
                                </div>
                            </div>
                            {[...Array(10)].map((_, index) => (
                                <span className={`bubble bubble-${index}`} key={index}></span>
                            ))}
                        </div>

                        {/* Slide 3 */}
                        <div className="carousel-item" data-bs-interval="6000">
                            <img src={img3} className="Intro-image zoom" alt="slide 3" />
                            <div className="Intro-image-layer">
                                <div className="Intro-image-layer-pragraph">
                                    <img src={swimmingIcon} alt="icon" />
                                    <h1>Train in World-Class Facilities</h1>
                                </div>
                                <div className="Intro-image-layer-title">
                                    <p>Heated indoor pools, certified coaches, and safe learning environment.</p>
                                </div>
                                <div className="button-group">
                                    <Link to="/BokingForm" className="button">
                                        <span className="button__icon-wrapper">
                                            <svg viewBox="0 0 14 15" fill="none" width="10" xmlns="http://www.w3.org/2000/svg" className="button__icon-svg">
                                                <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" fill="currentColor" />
                                            </svg>
                                        </span>
                                        Book a Tour
                                    </Link>
                                </div>
                            </div>
                            {[...Array(10)].map((_, index) => (
                                <span className={`bubble bubble-${index}`} key={index}></span>
                            ))}
                        </div>
                    </div>

                    {/* Controls */}
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <div className="arrow-left">
                            <i className="fa-solid fa-circle-chevron-left"></i>
                        </div>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <div className="arrow-right">
                            <i className="fa-solid fa-circle-chevron-right"></i>
                        </div>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>


        </>
    )
}
