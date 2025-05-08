import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from "../../assets/images/logo.png";
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    const [scrolled, setscrolled] = useState(false)
    const [logoSize, setLogoSize] = useState('normal')

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY
            setscrolled(offset > 50)
            setLogoSize(offset > 50 ? 'small' : 'normal')
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div>
            <nav className={`navbar navbar-expand-lg shadow-sm p-0 fixed-top ${scrolled ? 'navbarStyle' : ''}`}>
                <div className="container">
                    <NavLink to="/" className="navbar-brand">
                        <img 
                            src={logo} 
                            alt="Logo" 
                            className={`logo ${logoSize === 'small' ? 'logo-small' : ''}`} 
                        />
                    </NavLink>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/about">About Us</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/programes">Programs</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/ourstaff">Our Staff</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/gallery">Gallery</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/contact">Contact Us</NavLink>
                            </li>
                        </ul>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className={"button"} to="/contact">Contact Us</NavLink>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>

        </div>
    )
}
