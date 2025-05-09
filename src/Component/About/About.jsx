import React, { useEffect } from 'react'
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import '../About/About.css'
import img1 from '../../assets/images/home-slid1.jpg'
import img2 from '../../assets/images/home-slid3.jpg'
import img3 from '../../assets/images/home-slid2.jpg'
import TitleShape from '../../assets/images/title_left.svg'
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function About() {
    const { ref, inView } = useInView({ triggerOnce: true });
    useEffect(() => {
        AOS.init({
            duration: 1500,
            once: false,
        });
    }, []);


    const images = [img1, img2, img3];
    return (
        <>
            <section className="aquatic-section overflow-hidden">
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
                        <h2 className="title">Excellence in Every Stroke – Your Trusted Swim Academy</h2>
                        <p className="description">
                        With over 15 years of experience, we provide world-class swimming education for all ages. Our certified instructors and modern facilities ensure a safe, progressive, and enjoyable learning journey. Whether you're a beginner or an aspiring athlete, we tailor your training for lasting impact.
                        </p>
                        <div className="feature-list">
                            <span>
                                <i className="fa-solid fa-check"></i>
                                Modern teaching methods
                            </span>
                            <span>
                                <i className="fa-solid fa-check"></i>
                                15+ years of excellence
                            </span>
                            <span><i className="fa-solid fa-check"></i>
                            Easy payment options
                            </span>
                            <span>
                                <i className="fa-solid fa-check"></i>
                                Focus on personal growth
                            </span>
                            <span>
                                <i className="fa-solid fa-check"></i>
                                Latest swimming equipment
                            </span>
                            <span>
                                <i className="fa-solid fa-check"></i>
                                Free introductory session
                            </span>
                        </div>

                        <div className="">
                            <Link to={"/about"} className="readMore">
                                <span className="readMoreicon-wrapper">
                                    <svg viewBox="0 0 14 15" fill="none" width="10" xmlns="http://www.w3.org/2000/svg" className="button__icon-svg">
                                        <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" fill="currentColor" />
                                    </svg>
                                </span>
                                Read More
                            </Link>
                        </div>
                        <div className="stats-grid" data-aos="fade-up" ref={ref}>
                            <div className="stat-box">
                                <h3>
                                {inView && <CountUp end={200} duration={2} />}K+
                                    </h3>
                                <p>Happy Clients</p>
                            </div>
                            <div className="stat-box">
                                <h3>
                                {inView && <CountUp end={100} duration={2} />}
                                    k+
                                    </h3>
                                <p>Total Students</p>
                            </div>
                            <div className="stat-box">
                                <h3>
                                {inView && <CountUp end={250} duration={2} />}+
                                </h3>
                                <p>Team Members</p>
                            </div>
                        </div>
                    </div>

                </div>

            </section>

        </>
    )
}
