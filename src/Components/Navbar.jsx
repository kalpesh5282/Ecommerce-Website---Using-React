import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="logo">
                <a href="/"><img className="logo-image" src={logo} alt="Logo" /></a>
            </div>
            <div className="hamburger" onClick={toggleMenu}>
                &#9776; {/* This represents the hamburger icon */}
            </div>
            <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                <li><Link to="/" className="nav-list">Home</Link></li>
                <li><Link to="/Mobiles" className="nav-list">Mobiles</Link></li>
                <li><Link to="/Laptops" className="nav-list">Laptops</Link></li>
                <li><Link to="/About" className="nav-list">About</Link></li>
                <li><Link to="/Contact" className="nav-list">Contact</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
