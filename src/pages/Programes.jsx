import React from 'react'
import img1 from '../assets/images/home-slid1.jpg'
import img2 from '../assets/images/home-slid3.jpg'
import img3 from '../assets/images/home-slid2.jpg'
import BannerImage from '../assets/images/home-slid1.jpg'
import { Link } from 'react-router-dom';
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
export default function Programes() {
  return (
    <>
      <section className='bannerImage'>
        <img src={BannerImage} alt="" />
        <div className="Banner-Layer">
          <h1 className='fw-bold text-white fs-1'>Programs</h1>
          <p className='text-white fw-medium'>Home <i className="fa-solid fa-angle-right"></i>  Programs</p>
          {[...Array(10)].map((_, index) => (
            <span className={`bubble bubble-${index}`} key={index}></span>
          ))}
        </div>
      </section>

      <div className="container py-5">
        <div className="row g-4">
          {classData.map((cls, index) => (
            <div className="col-md-4" key={index}>
              <Link to="/Programdetails" className='text-decoration-none'>
                <div className="card border-0 shadow-sm rounded-4 h-100">
                  <div className="position-relative">
                    <img
                      src={cls.image}
                      className="card-img-top rounded-4"
                      alt="class"
                      style={{ height: '250px', objectFit: 'cover' }}
                    />
                    <div className="position-absolute top-100 start-50 translate-middle bg-white px-3 py-1 rounded-pill shadow-sm">
                      <span className="text-primary fw-bold">{cls.price}</span> / Person
                    </div>
                  </div>
                  <div className="card-body mt-5">
                    <Link to="/Programdetails" className="text-decoration-none fw-bold text-dark">{cls.title}</Link>
                    <p className="text-muted small mt-2">{cls.desc}</p>
                    <hr />
                    <div className="d-flex justify-content-between text-muted small">
                      <span><i className="fa-solid fa-book me-1 text-primary"></i>Lesson 8</span>
                      <span><i className="fa-solid fa-user-group me-1 text-primary"></i>Enrolled 60+</span>
                      <span><i className="fa-solid fa-children me-1 text-primary"></i>Children</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

    </>
  )
}
