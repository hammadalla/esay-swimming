import React, { useState } from 'react';
import AOS from 'aos';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import 'aos/dist/aos.css';
import '../Gallery/Gallery.css';
import TitleShape from '../../assets/images/title_left.svg';

import img1 from '../../assets/images/home-slid1.jpg';
import img2 from '../../assets/images/home-slid3.jpg';
import img3 from '../../assets/images/home-slid2.jpg';
import img4 from '../../assets/images/home-slid1.jpg';
import img5 from '../../assets/images/home-slid3.jpg';
import img6 from '../../assets/images/home-slid2.jpg';

const cardData = [
    {
        img: img1,
        swimmer: "Ahmed Hossam",
        event: "National Junior Championship",
        date: "March 12, 2025",
        medal: "Gold - 100m Freestyle"
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

export default function Gallery() {
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    const openLightbox = (i) => {
        setIndex(i);
        setOpen(true);
    };

    const images = cardData.map(card => card.img);

    return (
        <section className="gallery-section overflow-hidden py-5">
            <div className="container">
                <div className="zigzag-grid">
                    <div className="d-flex align-items-center justify-content-center">
                        <img src={TitleShape} className='TitleShape' alt="" />
                        <h4 className="text-center mb-0 text-primary">Gallery</h4>
                    </div>
                    <h3 className="text-center fw-bold mb-3">Our Swimming Academy in Action</h3>

                    {chunkArray(cardData, 2).map((pair, rowIndex) => (
                        <div className="zigzag-row" key={rowIndex}>
                            {pair.map((card, i) => (
                                <div data-aos="zoom-in" className={`zigzag-card ${rowIndex % 2 === 1 ? 'reverse' : ''}`} key={i}>
                                    <div
                                        className="zigzag-image"
                                        onClick={() => openLightbox((rowIndex * 2) + i)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <img src={card.img} alt={card.swimmer} />
                                    </div>
                                    <div className="zigzag-content">
                                        <h5 className="text-primary fw-bold mb-2">{card.swimmer}</h5>
                                        <p><strong>Event:</strong> {card.event}</p>
                                        <p><strong>Date:</strong> {card.date}</p>
                                        <p><strong>Medal:</strong> {card.medal}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox Viewer */}
            <Lightbox
                open={open}
                close={() => setOpen(false)}
                index={index}
                slides={images.map(img => ({ src: img }))}
            />
        </section>
    );
}
