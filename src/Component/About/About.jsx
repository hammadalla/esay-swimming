import React, { useEffect } from 'react'
import '../About/About.css'
import img1 from '../../assets/images/home-slid1.jpg'
import img2 from '../../assets/images/home-slid3.jpg'
import img3 from '../../assets/images/home-slid2.jpg'
import TitleShape from '../../assets/images/title_left.svg'
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function About() {
    useEffect(() => {
        AOS.init({
            duration: 1500,
            once: false,
        });
    }, []);


    const images = [img1, img2, img3];
    return (
        <>
            <section className="aquatic-section">
                <div className="grid-container">
                    <div className="image-grid" data-aos="fade-right">
                        {images.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`grid-${index}`}
                                className={`image image-${index} `}
                            />
                        ))}
                    </div>
                    <div className="text-content" data-aos="fade-left">
                        <div className="d-flex align-items-center">
                            <img src={TitleShape} className='TitleShape' alt="" />
                            <h4 className="subtitle">
                                Why Choose Us
                            </h4>
                        </div>
                        <h2 className="title">Unparalleled Excellence in Aquatic Education</h2>
                        <p className="description">
                            Opening in spring and closing in fall are ideal. However, it depends on local
                            climate conditions; a professional service can guide you based on your location,
                            regular chlorination, proper water cleaning.
                        </p>
                        <div className="feature-list">
                            <span>
                                <i class="fa-solid fa-check"></i>
                                Modern methods
                            </span>
                            <span>
                                <i class="fa-solid fa-check"></i>
                                Personal development
                            </span>
                            <span><i class="fa-solid fa-check"></i>
                                15 years on the market
                            </span>
                            <span>
                                <i class="fa-solid fa-check"></i>
                                Modern equipment
                            </span>
                            <span>
                                <i class="fa-solid fa-check"></i>
                                Payment in installments
                            </span>
                            <span>
                                <i class="fa-solid fa-check"></i>
                                Introductory lesson
                            </span>
                        </div>

                        <div className="">
                            <Link to={""} className="readMore">
                                <span className="readMoreicon-wrapper">
                                    <svg viewBox="0 0 14 15" fill="none" width="10" xmlns="http://www.w3.org/2000/svg" className="button__icon-svg">
                                        <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" fill="currentColor" />
                                    </svg>
                                </span>
                                Read More
                            </Link>
                        </div>
                        <div className="stats-grid" data-aos="fade-up">
                            <div className="stat-box">
                                <h3>2k+</h3>
                                <p>Happy Clients</p>
                            </div>
                            <div className="stat-box">
                                <h3>2.3k+</h3>
                                <p>Total Students</p>
                            </div>
                            <div className="stat-box">
                                <h3>200+</h3>
                                <p>Happy Clients</p>
                            </div>
                        </div>
                    </div>

                </div>

            </section>

        </>
    )
}
