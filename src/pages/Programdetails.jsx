import React, { useState } from 'react'
import BannerImage from '../assets/images/home-slid1.jpg'
import imgVideo from '../assets/images/664b12b9111f7e71f0cf4330_2151460420.jpg';
import img2 from '../assets/images/home-slid3.jpg'
import img3 from '../assets/images/home-slid2.jpg'
import TitleShape from '../assets/images/title_left.svg';
import VideoSrc from '../assets/images/66474748e7e89943e204eaa3_664b0da1e18764372965c9bc_8052706-hd_1280_720_50fps-transcode.mp4';
export default function Programdetails() {
    const [showVideo, setShowVideo] = useState(false);
    return (
        <>
            <section className='bannerImage'>
                <img src={BannerImage} alt="" />
                <div className="Banner-Layer">
                    <h1 className='fw-bold text-white fs-1'>Program</h1>
                    <p className='text-white fw-medium'>Home <i className="fa-solid fa-angle-right"></i> Program</p>
                    {[...Array(10)].map((_, index) => (
                        <span className={`bubble bubble-${index}`} key={index}></span>
                    ))}
                </div>
            </section>



            <div className="bg-light py-5">
                <div className="container">
                    <div className="mb-4 d-flex align-items-center justify-content-center">
                        <img src={TitleShape} className='TitleShape' alt="" />
                        <h4 className="text-center mb-0 text-primary">Program Details</h4>
                    </div>

                    <div className="row g-4">
                        <div className="col-lg-8">
                            <div className="card shadow">
                                {/* Bootstrap Carousel بدل صورة واحدة */}
                                <div id="carouselImages" className="carousel slide" data-bs-ride="carousel">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active" style={{ height: "auto" }}>
                                            <img src={imgVideo} className="card-img-top" alt="Slide 1" />
                                        </div>
                                        <div className="carousel-item" style={{ height: "auto" }}>
                                            <img src={img2} className="card-img-top" alt="Slide 2" />
                                        </div>
                                        <div className="carousel-item" style={{ height: "auto" }}>
                                            <img src={img3} className="card-img-top" alt="Slide 3" />
                                        </div>
                                    </div>
                                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselImages" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#carouselImages" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>

                                <div className="card-body">
                                    <h3 className="card-title mb-3">Sea Turtles: 3–4 Years</h3>
                                    <p className="card-text">
                                        At Poolax, we take pride in our specialized Pool Tile & Surface Cleaning Services...
                                    </p>

                                    <h5 className="mt-4 fw-bold">What Will You Learn?</h5>
                                    <ul>
                                        <li>Learn design from Basic to Advanced</li>
                                        <li>Utilize Tulles, reduced unlined pellet</li>
                                        <li>Phasellus enim magna varius</li>
                                        <li>Justo non mauris rutrum</li>
                                        <li>Sed consequat justo non mauris</li>
                                    </ul>

                                    <h5 className="mt-4 fw-bold">Certification</h5>
                                    <p>
                                        The certification program is meticulously designed...
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="bg-white p-4 rounded shadow">
                                <h5 className="fw-bold mb-3">Ask Question</h5>
                                <hr className="mt-0 mb-4" style={{ width: '20%', height: '2px', background: '#007bff', opacity: 1 }} />

                                <div className="mb-3">
                                    <input type="text" className="form-control" placeholder="First Name" />
                                </div>

                                <div className="mb-3">
                                    <input type="text" className="form-control" placeholder="Last Name" />
                                </div>

                                <div className="mb-3">
                                    <input type="email" className="form-control" placeholder="Your Email" />
                                </div>

                                <div className="mb-3">
                                    <textarea className="form-control" placeholder="Write message...." rows="4"></textarea>
                                </div>

                                <button className="btn btn-primary w-100 fw-bold">ASK QUESTION NOW</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div >

            <section className="video-poster-section py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="mb-4 d-flex align-items-center justify-content-center">
                                <img src={TitleShape} className='TitleShape' alt="" />
                                <h4 className="text-center mb-0 text-primary">Program Video</h4>
                            </div>
                            <div className="video-thumbnail-wrapper  position-relative">
                                <img
                                    src={imgVideo} // ← غيّر هذا الرابط لصورة الخلفية التي تريدها
                                    alt="Swimming Video"
                                    className="imagevideo rounded-4 shadow-sm w-100"
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
            );


        </>
    )
}
