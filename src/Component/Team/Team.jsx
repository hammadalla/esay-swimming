
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import '../Team/Team.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import img1 from '../../assets/images/team_2_1.jpg'
import img2 from '../../assets/images/team_2_2.jpg'
import img3 from '../../assets/images/team_2_3.jpg'
import img4 from '../../assets/images/team_2_4.jpg'
import TitleShape from '../../assets/images/title_left.svg'


const trainers = [
  {
    name: 'Emma Mary',
    role: 'Swimming Trainer',
    image: img1, // Replace with actual URLs
  },
  {
    name: 'Daniel Thomas',
    role: 'Swimming Trainer',
    image: img2,
  },
  {
    name: 'Emanuel Maclin',
    role: 'Swimming Trainer',
    image: img3,
  },
  {
    name: 'Jonson Anderson',
    role: 'Swimming Trainer',
    image: img4,
  },
  {
    name: 'Emma Mary',
    role: 'Swimming Trainer',
    image: img1, // Replace with actual URLs
  },
  {
    name: 'Daniel Thomas',
    role: 'Swimming Trainer',
    image: img2,
  },
  {
    name: 'Emanuel Maclin',
    role: 'Swimming Trainer',
    image: img3,
  },
  {
    name: 'Jonson Anderson',
    role: 'Swimming Trainer',
    image: img4,
  },
];

export default function Team() {
  return (
    <>

      <div className="container text-center py-5 Team-bg shadow rounded-5">
        <div className="d-flex align-items-center justify-content-center">
          <img src={TitleShape} className='TitleShape' alt="" />
          <h5 className="text-primary mb-0">Team Members</h5>
        </div>
        <h2 className="fw-bold mb-4">Meet Our Expert Trainers</h2>
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 3000 }}
          spaceBetween={30}
          slidesPerView={4}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
          }}
        >
          {trainers.map((trainer, index) => (
            <SwiperSlide key={index}>
              <div className="card border-0">
                <img src={trainer.image} className="card-img-top rounded-4" alt={trainer.name} />
                <div className="card-body">
                  <h5 className="card-title fw-bold">{trainer.name}</h5>
                  <p className="text-primary">{trainer.role}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </>
  )
}
