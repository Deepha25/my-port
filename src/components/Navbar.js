import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <header className="sticky-header">
            <nav>
                <div className="hamburger" onClick={toggleMenu}>
                    <div className={`line ${isOpen ? 'open' : ''}`}></div>
                    <div className={`line ${isOpen ? 'open' : ''}`}></div>
                    <div className={`line ${isOpen ? 'open' : ''}`}></div>
                </div>
                <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                    <li><a href="#about" onClick={handleLinkClick}>About Me</a></li>
                    <li><a href="#education" onClick={handleLinkClick}>Education</a></li>
                    <li><a href="#internship" onClick={handleLinkClick}>Internship</a></li>
                    <li><a href="#skills" onClick={handleLinkClick}>Skills</a></li>
                    <li><a href="#design" onClick={handleLinkClick}>Designs</a></li>
                    <li><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
