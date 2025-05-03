import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from "../../assets/images/logo.png";
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    const [scrolled, setscrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY

            setscrolled(offset > 50)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.addEventListener('scroll', handleScroll)
        }

    }, [])
    return (
        <div>
            <nav class={`navbar navbar-expand-lg shadow-sm p-0 fixed-top ${scrolled ? 'navbarStyle' : ''}`}>
                <div className="container">
                    <NavLink to="/" className="navbar-brand">
                        <img src={logo} alt="Logo" className="logo" />
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
                                <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/home">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/about">About Us</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <NavLink
                                    className="nav-link"
                                    to="/programs"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Programs
                                </NavLink>
                                <ul className="dropdown-menu">
                                    <li><NavLink className="dropdown-item" to="/programs/action">Action</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="/programs/another">Another action</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="/programs/other">Something else here</NavLink></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/staff">Our Staff</NavLink>
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
