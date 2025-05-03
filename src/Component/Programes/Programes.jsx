import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import TitleShape from '../../assets/images/title_left.svg'
import '../Programes/programes.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import img1 from '../../assets/images/home-slid1.jpg'
import img2 from '../../assets/images/home-slid3.jpg'
import img3 from '../../assets/images/home-slid2.jpg'
import { Link } from 'react-router-dom';
export default function Programes() {

    const classData = [
        {
            title: "Sea Turtles: 3–4 Years",
            price: "$250.99",
            desc: "Water safety is a top priority in our classes. We teach essential water safety skills.",
            image: img1,
        },
        {
            title: "Pro Swimmer: 1–3 Years",
            price: "$230.99",
            desc: "A professional swimmer is an athlete who has achieved a high level of skill proficiency.",
            image: img2,
        },
        {
            title: "Sea Turtles: 3–4 Years",
            price: "$250.99",
            desc: "Sharks are a diverse group of cartilaginous fish that have inhabited the Earth's oceans.",
            image: img3,
        },
        {
            title: "Sea Turtles: 3–4 Years",
            price: "$250.99",
            desc: "Water safety is a top priority in our classes. We teach essential water safety skills.",
            image: img1,
        },
        {
            title: "Pro Swimmer: 1–3 Years",
            price: "$230.99",
            desc: "A professional swimmer is an athlete who has achieved a high level of skill proficiency.",
            image: img2,
        },
        {
            title: "Sea Turtles: 3–4 Years",
            price: "$250.99",
            desc: "Sharks are a diverse group of cartilaginous fish that have inhabited the Earth's oceans.",
            image: img3,
        },
    ];

    return (
        <>

            <section className="swiper-bg py-5">
                <div className="container text-center">
                    <div className="d-flex align-items-center justify-content-center">
                        <img src={TitleShape} className='TitleShape' alt="" />
                        <h5 className="text-primary mb-0">Our Programs</h5>
                    </div>
                    <h2 className="fw-bold mb-4">Join Our Swimming Classes</h2>

                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={3}
                        // navigation
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 3000 }}
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            992: { slidesPerView: 3 },
                        }}
                    >
                        {classData.map((cls, index) => (
                            <SwiperSlide key={index}>
                                <div className="card border-0 shadow-sm rounded-4 p-3 mb-5">
                                    <div className="position-relative">
                                        <img src={cls.image} className="card-img-top rounded-4" alt="class" />
                                        <div
                                            className="position-absolute top-100 start-50 translate-middle bg-white px-3 py-1 rounded-pill"

                                        >
                                            <span className="text-primary fw-bold">{cls.price}</span> / Person
                                        </div>
                                    </div>
                                    <div className="card-body text-start mt-4">
                                        <Link to={"/"} className="swiper-Link fw-bold">{cls.title}</Link>
                                        <p className="text-muted small mt-2">{cls.desc}</p>
                                        <hr />
                                        <div className="d-flex justify-content-between text-muted small">
                                            <span><i className="fa-solid fa-book me-1 text-primary"></i>Lesson 8</span>
                                            <span><i className="fa-solid fa-user-group me-1 text-primary"></i>Enrolled 60+</span>
                                            <span><i className="fa-solid fa-children me-1 text-primary"></i>Children</span>
                                        </div>
                                    </div>
                                </div>


                            </SwiperSlide>
                        ))}

                    </Swiper>
                        <div class="service-banner">
                            <span class="service-text">High Quality Pool For You</span>
                            <Link to={"/"} class="service-button">GET ALL Programs</Link>
                        </div>
                </div>
            </section>

        </>
    )
}
