import React from 'react'
import logo from '../../assets/images/logo.png'
import '../Footer/Footer.css'
import { Link } from 'react-router-dom';
'@fortawesome/free-solid-svg-icons';

export default function Footer() {

    return (
        <>

            <footer className="text-white pt-5 pb-4 footer">
                <div className="container text-md-left">
                    <div className="row">
                        {/* Logo and Description */}
                        <div className="col-md-3 col-lg-4 col-xl-4 mx-auto mt-3">
                            <img src={logo} className='logo-footer' alt="" />
                            <p>
                                We provide specialized winterization services to safeguard your pool during the off-season, and when spring arrives, we handle the thorough opening process.
                            </p>
                            <div className="d-flex gap-2 mt-3">
                                <Link to={""} className="btn btn-outline-light btn-sm rounded-circle"><i className="fab fa-facebook"></i></Link>
                                <Link to={""} className="btn btn-outline-light btn-sm rounded-circle"><i className="fab fa-x-twitter"></i></Link>
                                <Link to={""} className="btn btn-outline-light btn-sm rounded-circle"><i className="fab fa-linkedin-in"></i></Link>
                                <Link to={""} className="btn btn-outline-light btn-sm rounded-circle"><i className="fab fa-skype"></i></Link>
                                <Link to={""} className="btn btn-outline-light btn-sm rounded-circle"><i className="fab fa-youtube"></i></Link>
                            </div>
                        </div>

                        {/* Quick Link */}
                        <div className="col-md-2 col-lg-3 col-xl-2 mx-auto mt-3">
                            <h5 className="text-uppercase fw-bold mb-4">Quick Link</h5>
                            <Link to="/" className="text-white text-decoration-none d-block mb-1">→ Home</Link>
                            <Link to="/about" className="text-white text-decoration-none d-block mb-1">→ About Us</Link>
                            <Link to="/programes" className="text-white text-decoration-none d-block mb-1">→ Programs</Link>
                            <Link to="/ourstaff" className="text-white text-decoration-none d-block mb-1">→ Our Staff</Link>
                            <Link to="/gallery" className="text-white text-decoration-none d-block mb-1">→ Gallery</Link>
                            <Link to="/contact" className="text-white text-decoration-none d-block mb-1">→ Contact Us</Link>
                        </div>


                        {/* Contact Info */}
                        <div className="col-md-4 col-lg-4 col-xl-4 ms-auto mt-3">
                            <h5 className="text-uppercase fw-bold mb-4">Contact Us</h5>
                            <Link to={" https://maps.app.goo.gl/yFC2tBBsxQtP5Aow9?g_st=com.google.maps.preview.copy"} target='_blank' className='text-white text-decoration-none d-block mb-2'>
                                <i className="fas fa-map-marker-alt me-2"></i>
                                Yas Island- Yas American Academy - Abu Dhabi
                            </Link>
                            <Link to={"https://maps.app.goo.gl/rMYxt5aTijcHapPN8"} target='_blank' className='text-white text-decoration-none d-block mb-2'>
                                <i className="fas fa-map-marker-alt me-2"></i>
                                Khalifa City A -Canadian International School - abu dhabi
                            </Link>
                            <p><i className="fas fa-phone me-2"></i>+(+971) 58 597 1721</p>
                            <p><i className="fas fa-envelope me-2"></i>info@easyswimuae.com</p>
                        </div>
                    </div>

                    {/* Footer Bottom */}
                    <div className="row mt-4">
                        <div className="col-lg-6 text-center">
                            <p className="text-light mb-0 copyright">
                                Copyright © 2025 All rights reserved |  Easy Swimming
                            </p>
                        </div>
                        <div className="col-lg-6 text-center">
                            <p className="text-light mb-0 copyright">
                                Powered By : <Link className='text-white text-decoration-none' rel="noopener" to={"https://iwgt.ae/"} target="_blank">IDEA WEB GLOBAL
                                    TECHNOLOGY L.L.C</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}
