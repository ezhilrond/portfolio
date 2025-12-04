import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleScroll = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
            setMenuOpen(false);
        }
    };

    return (
        <div className="nav-container">
            <h2 className="logo">EzhPortfolio.</h2>

            <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? "✖" : "☰"}
            </button>

            <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
                <li onClick={() => handleScroll("home")}>Home</li>
                <li onClick={() => handleScroll("about")}>About</li>
                <li onClick={() => handleScroll("skill")}>Skills</li>
                <li onClick={() => handleScroll("project")}>Project</li>
                <li onClick={() => handleScroll("certificate")}>Certifications</li>
                <li onClick={() => handleScroll("contact")}>Contact</li>
            </ul>

        
        </div>

    );
};

export default Navbar;
