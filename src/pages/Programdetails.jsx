import React from 'react'
import BannerImage from '../assets/images/home-slid1.jpg'
import imgVideo from '../assets/images/664b12b9111f7e71f0cf4330_2151460420.jpg';
import TitleShape from '../assets/images/title_left.svg';
export default function Programdetails() {
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
                            <h4 className="text-center mb-0 text-primary">program Details</h4>
                        </div>

                    <div className="row g-4">
                        <div className="col-lg-8">
                            <div className="card shadow">
                                <img
                                    src={imgVideo}
                                    className="card-img-top"
                                    alt="Swimming class"
                                />
                                <div className="card-body">
                                    <h3 className="card-title mb-3">Sea Turtles: 3–4 Years</h3>
                                    <p className="card-text">
                                        At Poolax, we take pride in our specialized Pool Tile & Surface Cleaning Services.
                                        Our team of trained technicians is committed to rejuvenating your pool's appearance
                                        by ensuring the tiles and surfaces are spotless and inviting. We inspect pool
                                        equipment — including pump, motor, heaters, and filters — to ensure everything is
                                        in good working order. We identify any issues we promptly address, then prevent
                                        costly repairs down the road...
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
                                        The certification program is meticulously designed to ensure that candidates have
                                        acquired a comprehensive understanding of the subject matter. It encompasses both
                                        theoretical knowledge and practical application.
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
            );


        </>
    )
}
