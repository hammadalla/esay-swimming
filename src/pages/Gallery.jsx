import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import 'aos/dist/aos.css';
import TitleShape from '../assets/images/title_left.svg';
import BannerImage from '../assets/images/home-slid1.jpg'
import img1 from '../assets/images/home-slid1.jpg';
import img2 from '../assets/images/home-slid3.jpg';
import img3 from '../assets/images/home-slid2.jpg';
import img4 from '../assets/images/home-slid1.jpg';
import img5 from '../assets/images/home-slid3.jpg';
import img6 from '../assets/images/home-slid2.jpg';
import VideoSrc from '../assets/images/66474748e7e89943e204eaa3_664b0da1e18764372965c9bc_8052706-hd_1280_720_50fps-transcode.mp4';
import imgVideo from '../assets/images/664b12b9111f7e71f0cf4330_2151460420.jpg';

import './main.css'

export default function Gallery() {
  const [showVideo, setShowVideo] = useState(false);
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const cardData = [
    {
      img: img1,
      swimmer: "Ahmed Hossam",
      event: "National Junior Championship",
      date: "March 12, 2025",
      medal: "Gold - 100m Freestyle "
    },
    {
      img: img2,
      swimmer: "Mariam Khaled",
      event: "Cairo Open Swim Meet",
      date: "April 3, 2025",
      medal: "Silver - 200m Backstroke"
    },
    {
      img: img3,
      swimmer: "Youssef Ali",
      event: "African Youth Swimming Cup",
      date: "February 25, 2025",
      medal: "Bronze - 50m Butterfly"
    },
    {
      img: img4,
      swimmer: "Nourhan Samir",
      event: "Alexandria Swim Festival",
      date: "January 18, 2025",
      medal: "Gold - 100m Breaststroke"
    },
    {
      img: img5,
      swimmer: "Mohamed Adel",
      event: "Middle East Junior League",
      date: "March 30, 2025",
      medal: "Silver - 400m Freestyle"
    },
    {
      img: img6,
      swimmer: "Salma Hussein",
      event: "Red Sea Swim Cup",
      date: "April 10, 2025",
      medal: "Gold - 200m Butterfly"
    },
  ];

  // Helper to group into pairs
  const chunkArray = (arr, size) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const openLightbox = (i) => {
    setIndex(i);
    setOpen(true);
  };

  const images = cardData.map(card => card.img);

  return (
    <>

      <section className='bannerImage'>
        <img src={BannerImage} alt="" />
        <div className="Banner-Layer">
          <h1 className='fw-bold text-white fs-1'>Gallery</h1>
          <p className='text-white fw-medium'>Home <i className="fa-solid fa-angle-right"></i>  Gallery</p>
          {[...Array(10)].map((_, index) => (
            <span className={`bubble bubble-${index}`} key={index}></span>
          ))}
        </div>
      </section>

      <section className="gallery-section overflow-hidden py-5">
        <div className="container">
          <div className="zigzag-grid">
            <div className="d-flex align-items-center justify-content-center">
              <img src={TitleShape} className="TitleShape" alt="" />
              <h4 className="text-center mb-0 text-primary">Gallery</h4>
            </div>
            <h3 className="text-center fw-bold mb-3">Our Swimming Academy in Action</h3>

            {cardData.map((card, index) => (
              <div className="row mb-4" key={index}>
                <div
                  className={`d-flex flex-${index % 2 === 1 ? 'row-reverse' : 'row'} align-items-center`}
                  data-aos="zoom-in"
                >
                  <div
                    className=" me-3 col-6"
                    onClick={() => openLightbox(index)}
                    style={{ cursor: 'pointer' }}
                  >
                    {card.img.endsWith('.mp4') ? (
                      <video className="img-fluid rounded" controls>
                        <source src={card.img} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <img src={card.img} alt={card.swimmer} className="img-fluid rounded" />
                    )}
                  </div>
                  <div className="p-2 col-6">
                    <h5 className="text-primary fw-bold mb-2">{card.swimmer}</h5>
                    <p><strong>Event:</strong> {card.event}</p>
                    <p><strong>Date:</strong> {card.date}</p>
                    <p><strong>Medal:</strong> {card.medal}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Lightbox
          open={open}
          close={() => setOpen(false)}
          index={index}
          slides={images.map(img => ({ src: img }))}
        />
      </section>


      <section className="video-poster-section py-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="video-thumbnail-wrapper position-relative">
                <img
                  src={imgVideo} // ← غيّر هذا الرابط لصورة الخلفية التي تريدها
                  alt="Swimming Video"
                  className="imagevideo rounded w-100"
                />
                <button
                  className="play-button"
                  onClick={() => setShowVideo(true)} // هذا يفترض أنك تستخدم useState
                >
                  <span className="play-icon">&#9658;</span>
                </button>
              </div>

              {showVideo && (
                <div className="video-popup-overlay" onClick={() => setShowVideo(false)}>
                  <div className="video-popup-content">
                    <video controls autoPlay className="w-100 rounded">
                      <source src={VideoSrc} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>




    </>
  )
}
