import React, { useState } from 'react';
import AOS from 'aos';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import 'aos/dist/aos.css';
import '../Gallery/Gallery.css';
import TitleShape from '../../assets/images/title_left.svg'
import img1 from '../../assets/images/home-slid1.jpg';
import img2 from '../../assets/images/home-slid3.jpg';
import img3 from '../../assets/images/home-slid2.jpg';
import img4 from '../../assets/images/home-slid1.jpg';
import img5 from '../../assets/images/home-slid3.jpg';
import img6 from '../../assets/images/home-slid2.jpg';
import img7 from '../../assets/images/home-slid1.jpg';
import img8 from '../../assets/images/home-slid3.jpg';
import img9 from '../../assets/images/home-slid2.jpg';

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];


export default function Gallery() {
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    const openLightbox = (i) => {
        setIndex(i);
        setOpen(true);
    };
    return (




        <section className="gallery-section  py-5">
            <div className="container">
                <div className="d-flex align-items-center justify-content-center">
                    <img src={TitleShape} className='TitleShape' alt="" />
                    <h4 className="text-center mb-0 text-primary">Gallery</h4>
                </div>
                <h3 className="text-center fw-bold mb-3">Lorem ipsum dolor sit amet</h3>
                <div className="gallery-grid">
                    {images.map((src, i) => (
                        <div className="gallery-item" key={i} onClick={() => openLightbox(i)}>
                            <img data-aos="flip-up" src={src} alt={`Activity ${i + 1}`} />
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

