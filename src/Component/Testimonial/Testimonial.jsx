import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import '../Testimonial/Testimonial.css'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import img1 from '../../assets/images/team_2_1.jpg'
import img2 from '../../assets/images/team_2_2.jpg'
import img3 from '../../assets/images/team_2_3.jpg'
import img4 from '../../assets/images/team_2_4.jpg'
import TitleShape from '../../assets/images/title_left.svg'


const testimonials = [
    {
        name: "Sherri Cronin",
        title: "Dynamic Program Designer",
        quote:
            "We track each swimmer's progress throughout the session, providing regular assessments. We offer a variety of classes tailored to different.",
        image: img1, // Replace with actual
    },
    {
        name: "Sherri Cronin",
        title: "Dynamic Program Designer",
        quote:
            "We track each swimmer's progress throughout the session, providing regular assessments. We offer a variety of classes tailored to different.",
        image: img2, // Replace with actual
    },
    {
        name: "Sherri Cronin",
        title: "Dynamic Program Designer",
        quote:
            "We track each swimmer's progress throughout the session, providing regular assessments. We offer a variety of classes tailored to different.",
        image: img3, // Replace with actual
    },
    {
        name: "Sherri Cronin",
        title: "Dynamic Program Designer",
        quote:
            "We track each swimmer's progress throughout the session, providing regular assessments. We offer a variety of classes tailored to different.",
        image: img4, // Replace with actual
    },
];

export default function Testimonial() {
    return (
        <>

            <section className='Testimonial-Section  mt-4'>
                    <div className="d-flex justify-content-center align-items-center ">
                        <img src={TitleShape} className='TitleShape' alt="" />
                        <h4 className="text-primary my-3">
                            Testimonial 
                        </h4>
                    </div>
                <div className="testimonial-wrapper d-flex justify-content-center align-items-center">
                    <Swiper
                        modules={[Navigation]}
                        navigation={{
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                        }}
                        pagination={{ clickable: true }}
                        spaceBetween={50}
                        slidesPerView={1}
                        className="testimonial-swiper"
                    >
                        {testimonials.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="card Testimonial-card   border-0 rounded-4">
                                    <div className="Testimonial-border d-flex flex-md-row flex-column align-items-center justify-content-between p-4  gap-4">
                                        <div className="testimonial-text flex-grow-1">
                                            <p className="fs-4 fw-semibold mb-4">“{item.quote}”</p>
                                            <div className="d-flex align-items-center gap-2">
                                                <div className="bg-primary" style={{ width: 20, height: 20 }}></div>
                                                <div>
                                                    <h6 className="mb-0 fw-bold">{item.name}</h6>
                                                    <small className="text-muted">{item.title}</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="testimonial-image position-relative  p-1">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="rounded-4"
                                                style={{ width: 250, height: 250, objectFit: "cover" }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}

                        {/* Custom Arrows */}
                        <div className="swiper-button-prev custom-nav rounded-circle border border-primary d-flex align-items-center justify-content-center">
                            ❮
                        </div>
                        <div className="swiper-button-next custom-nav rounded-circle border border-primary d-flex align-items-center justify-content-center">
                            ❯
                        </div>
                    </Swiper>
                </div>
            </section>

        </>
    )
}
