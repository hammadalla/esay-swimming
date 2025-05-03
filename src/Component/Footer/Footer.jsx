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
                            <Link to={""} className="text-white text-decoration-none d-block mb-1">→ Home</Link>
                            <Link to={""} className="text-white text-decoration-none d-block mb-1">→ About Us</Link>
                            <Link to={""} className="text-white text-decoration-none d-block mb-1">→ Our Staff</Link>
                            <Link to={""} className="text-white text-decoration-none d-block mb-1">→ Contact Us</Link>
                            <Link to={""} className="text-white text-decoration-none d-block mb-1">→ Gallery</Link>
                        </div>


                        {/* Contact Info */}
                        <div className="col-md-4 col-lg-4 col-xl-4 ms-auto mt-3">
                            <h5 className="text-uppercase fw-bold mb-4">Contact Us</h5>
                            <p><i className="fas fa-map-marker-alt me-2"></i> 445 S E St unit 12, Santa Rosa CA 95404, United States</p>
                            <p><i className="fas fa-phone me-2"></i> +(163)-2654–3654</p>
                            <p><i className="fas fa-phone me-2"></i> +(163)-2654–3564</p>
                            <p><i className="fas fa-envelope me-2"></i> help24/7@Poolax.com</p>
                        </div>
                    </div>

                    {/* Footer Bottom */}
                    <div className="row mt-4">
                        <div className="col text-center">
                            <p className="text-light mb-0">
                                Copyright © 2024  Powered By : <Link className='text-white text-decoration-none' rel="noopener" to={"https://iwgt.ae/"} target="_blank">IDEA WEB GLOBAL
                                    TECHNOLOGY L.L.C</Link>. All Rights Reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}
