import React, { useState } from 'react';
import BannerImage from '../assets/images/home-slid1.jpg'

export default function BookingForm() {
  const [formData, setFormData] = useState({
    First_name: '',
    Last_name: '',
    phone: '',
    email: '',
    course: '',
    date: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking Data:', formData);
    alert('تم إرسال الحجز بنجاح!');
  };
  return (
    <>
      <section className='bannerImage'>
        <img src={BannerImage} alt="" />
        <div className="Banner-Layer">
          <h1 className='fw-bold text-white fs-1'>Book appointment</h1>
          <p className='text-white fw-medium'>Home <i className="fa-solid fa-angle-right"></i>  Book appointment </p>
          {[...Array(10)].map((_, index) => (
            <span className={`bubble bubble-${index}`} key={index}></span>
          ))}
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <h2 className="mb-2 text-center">Book Your Course</h2>
          <p className="text-center text-muted mb-4">
            Fill in your details and we’ll get back to you within 24 hours.
          </p>
          <form onSubmit={handleSubmit} className="bg-light p-4 rounded shadow">
            <div className="row g-3">
              <div className="col-md-6">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="First Name"
                  value={formData.First_name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Last Name"
                  value={formData.Last_name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <input
                  type="tel"
                  name="phone"
                  className="form-control"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <select
                  name="course"
                  className="form-select"
                  value={formData.course}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Course Type</option>
                  <option value="baby">Baby Swim</option>
                  <option value="beginner">Beginner</option>
                  <option value="advanced">Advanced</option>
                  <option value="adult">Adult Fitness</option>
                </select>
              </div>
              <div className="col-md-6">
                <input
                  type="date"
                  name="date"
                  className="form-control"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-12">
                <textarea
                  name="message"
                  className="form-control"
                  rows="4"
                  placeholder="Let us know your preferred time and any specific requirements"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>
            <div className="text-center mt-4">
              <button type="submit" className="btn btn-primary fw-bold px-5">
                Submit Booking
              </button>
            </div>
          </form>
        </div>
      </section>

    </>
  );
}
