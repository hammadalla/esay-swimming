import React from 'react'
import '../HeroSection/hrosection.css'
import img1 from "../../assets/images/home-slid1.jpg";
import img2 from "../../assets/images/home-slid2.jpg";
import img3 from "../../assets/images/home-slid3.jpg";
import swimmingIcon from "../../assets/images/swimming-icon.png";
import { Link } from 'react-router-dom';

export default function Herosection() {
    return (
        <>

            <div className="carousel-section">
                <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        {[img1 , img2 , img3].map((image, index) => (
                            <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
                                <img src={image} className="Intro-image zoom" alt="slide" />
                                <div className="Intro-image-layer">
                                    <div className="Intro-image-layer-pragraph">
                                        <img src={swimmingIcon} alt="icon" />
                                        <h1>Dive into the world of swimming.</h1>
                                    </div>
                                    <div className="Intro-image-layer-title">
                                        <p>Whether you are a professional swimmer, fitness enthusiast, or just starting out, our wide range of swimming caps will meet your needs.</p>
                                    </div>
                                        <div className="button-group">
                                            <Link to={""} className="button">
                                                <span className="button__icon-wrapper">
                                                    <svg viewBox="0 0 14 15" fill="none" width="10" xmlns="http://www.w3.org/2000/svg" className="button__icon-svg">
                                                        <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" fill="currentColor" />
                                                    </svg>
                                                </span>
                                                Read More
                                            </Link>
                                        </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Carousel Controls */}
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
