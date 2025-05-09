import React from 'react'
import BannerImage from '../assets/images/home-slid1.jpg'
import './main.css'
import { Link } from 'react-router-dom'

export default function Contact() {
  return (
    <>

      <section className='bannerImage'>
        <img src={BannerImage} alt="" />
        <div className="Banner-Layer">
          <h1 className='fw-bold text-white fs-1'>Contact Us</h1>
          <p className='text-white fw-medium'>Home <i className="fa-solid fa-angle-right"></i>  Contact Us</p>
          {[...Array(10)].map((_, index) => (
            <span className={`bubble bubble-${index}`} key={index}></span>
          ))}
        </div>
      </section>

      <section className="contact_us">
        <div className="container">
          <div className="row">
            <div className="col-md-10 offset-md-1">
              <div className="contact_inner">
                <div className="row">
                  <div className="col-md-10">
                    <div className="contact_form_inner">
                      <div className="contact_field">
                        <h3>Contatc Us</h3>
                        <p>Feel Free to contact us any time. We will get back to you as soon as we can!.</p>
                        <input type="text" className="form-control form-group" placeholder="Name" />
                        <input type="text" className="form-control form-group" placeholder="Email" />
                        <textarea className="form-control form-group" placeholder="Message"></textarea>
                        <button className="contact_form_submit">Send</button>
                      </div>
                    </div>

                    <div className="">
                      <ul className='d-flex contactList'>
                        <li><a href="#"><i className="fab fa-facebook-square"></i></a></li>
                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                        <li><a href="#"><i className="fab fa-x-twitter"></i></a></li>
                      </ul>
                    </div>
                  </div>

                </div>
                <div className="contact_info_sec">
                  <h4>Contact Info</h4>
                  <div className="d-flex info_single align-items-center">
                    <i className="fas fa-phone"></i>
                    <span>+(+971) 58 597 1721</span>
                  </div>
                  <div className="d-flex info_single align-items-center">
                    <i className="fas fa-envelope"></i>
                    <span>info@easyswimuae.com</span>
                  </div>

                  <div className="d-flex info_single align-items-center">
                    <Link to={" https://maps.app.goo.gl/yFC2tBBsxQtP5Aow9?g_st=com.google.maps.preview.copy"} target='_blank' className='text-white text-decoration-none d-block mb-2'>
                      <i className="fas fa-map-marked-alt"></i>
                      Yas Island- Yas American Academy - Abu Dhabi
                    </Link>
                  </div>
                  <div className="d-flex info_single align-items-center">
                    <Link to={"https://maps.app.goo.gl/rMYxt5aTijcHapPN8"} target='_blank' className='text-white text-decoration-none d-block mb-2'>
                      <i className="fas fa-map-marked-alt"></i>
                      Khalifa City A -Canadian International School - abu dhabi
                    </Link>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="map_sec">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3632.8942659700997!2d54.601011400000004!3d24.419740599999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e4618575dfb1d%3A0xd6259ac9a7060fd8!2sEasy%20Swim%20Academy!5e0!3m2!1sar!2seg!4v1746467587998!5m2!1sar!2seg"
                allowFullScreen=""
                loading="lazy"
                className="border-0"
                style={{ height: "400px", width: "100%" }}
              ></iframe>
            </div>
          </div>
        </div>
      </section> */}


      <section className="map_sec py-5">
        <div className="container-fluid">
          <div className="row g-4">

            {/* الخريطة الأولى */}
            <div className="col-md-6">
              <fieldset className="shadow-sm p-3 rounded">
                <legend className="w-auto px-2 fw-bold text-primary"> <i className='fa fa-location-dot'> </i> Khalifa City A  - abu dhabi</legend>
                <iframe
                  title="Google Map - Main Branch"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3632.8942659700997!2d54.601011400000004!3d24.419740599999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e4618575dfb1d%3A0xd6259ac9a7060fd8!2sEasy%20Swim%20Academy!5e0!3m2!1sar!2seg!4v1746467587998!5m2!1sar!2seg"
                  allowFullScreen=""
                  loading="lazy"
                  className="border-0"
                  style={{ height: "400px", width: "100%" }}
                ></iframe>
              </fieldset>
            </div>


            <div className="col-md-6">
              <fieldset className="shadow-sm p-3 rounded">
                <legend className="w-auto px-2 fw-bold text-primary"> <i className='fa fa-location-dot'> </i>  Yas Island - Abu Dhabi</legend>
                <iframe
                  title="Google Map - Main Branch"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3631.3844798270648!2d54.3427164!3d24.4721318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e65e1ceea3327%3A0xb05c5a921ab0e194!2sEasy%20Swim%20UAE%20-%20Cornish!5e0!3m2!1sar!2seg!4v1746803457924!5m2!1sar!2seg"
                  allowFullScreen=""
                  loading="lazy"
                  className="border-0"
                  style={{ height: "400px", width: "100%" }}
                ></iframe>
              </fieldset>
            </div>

          </div>
        </div>
      </section>





    </>
  )
}
