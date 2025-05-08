import React from 'react'
import img1 from '../assets/images/team_2_1.jpg'
import img2 from '../assets/images/team_2_2.jpg'
import img3 from '../assets/images/team_2_3.jpg'
import img4 from '../assets/images/team_2_4.jpg'
import TitleShape from '../assets/images/title_left.svg'
import BannerImage from '../assets/images/home-slid1.jpg'

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
export default function OurStaff() {


  return (
    <>

      <section className='bannerImage'>
        <img src={BannerImage} alt="" />
        <div className="Banner-Layer">
          <h1 className='fw-bold text-white fs-1'>Our Staff</h1>
          <p className='text-white fw-medium'>Home <i className="fa-solid fa-angle-right"></i> Our Staff</p>
          {[...Array(10)].map((_, index) => (
            <span className={`bubble bubble-${index}`} key={index}></span>
          ))}
        </div>
      </section>

      <div className="container py-5">
        <div className="row g-4">
          <div className="col-lg-12">
            <div className="text-center">
              <div className="d-flex align-items-center justify-content-center">
                <img src={TitleShape} className='TitleShape' alt="" />
                <h5 className="text-primary mb-0">Team Members</h5>
              </div>
              <h2 className="fw-bold mb-4">Meet Our Expert Trainers</h2>
            </div>
          </div>
          {trainers.map((trainer, index) => (
            <div className="col-md-3" key={index}>
              <div className="card border-0 shadow h-100">
                <img
                  src={trainer.image}
                  className="card-img-top rounded-4"
                  alt={trainer.name}
                  style={{ objectFit: 'cover' }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title fw-bold mb-1">{trainer.name}</h5>
                  <p className="text-primary mb-0">{trainer.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>






    </>
  )
}
