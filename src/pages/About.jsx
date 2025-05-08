import React from 'react'
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import BannerImage from '../assets/images/home-slid1.jpg'
import img1 from '../assets/images/home-slid1.jpg'
import img2 from '../assets/images/home-slid3.jpg'
import img3 from '../assets/images/home-slid2.jpg'
import TitleShape from '../assets/images/title_left.svg'
import './main.css'
import '../Component/About/About'
import '../Component/About/About.css'

export default function About() {
  const images = [img1, img2, img3];
  const { ref, inView } = useInView({ triggerOnce: true });
  return (
    <>
      <section className='bannerImage'>
        <img src={BannerImage} alt="" />
        <div className="Banner-Layer">
          <h1 className='fw-bold text-white fs-1'>About Us</h1>
          <p className='text-white fw-medium'>Home <i className="fa-solid fa-angle-right"></i>  About Us</p>
          {[...Array(10)].map((_, index) => (
            <span className={`bubble bubble-${index}`} key={index}></span>
          ))}
        </div>
      </section>

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


      <section className="mission-section">
        <div className="container">

          <div className="mission-row" data-aos="fade-up">
            <div className="mission-image">
              <img src={img1} alt="Mission Visual 1" />
            </div>
            <div className="mission-content">
              <h2>Our Mission</h2>
              <p>
                Easy Swim Academy offers high-quality swimming lessons for all ages and skill levels. Our mission is to provide a safe and fun environment for students to learn and improve their swimming abilities.
              </p>
            </div>
          </div>
          <div className="mission-row" data-aos="fade-up">
            <div className="mission-image">
              <img src={img2} alt="Mission Visual 1" />
            </div>
            <div className="mission-content">
              <h2>Our Vission</h2>
              <p>
                Easy Swim Academy offers high-quality swimming lessons for all ages and skill levels. Our mission is to provide a safe and fun environment for students to learn and improve their swimming abilities.
              </p>
            </div>
          </div>
          <div className="mission-row" data-aos="fade-up">
            <div className="mission-image">
              <img src={img3} alt="Mission Visual 1" />
            </div>
            <div className="mission-content">
              <h2>Our Value</h2>
              <p>
                Easy Swim Academy offers high-quality swimming lessons for all ages and skill levels. Our mission is to provide a safe and fun environment for students to learn and improve their swimming abilities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
