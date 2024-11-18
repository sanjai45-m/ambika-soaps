import React from "react";
import "./Footer.css"; // Import the CSS for styling
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Footer = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setIsMenuOpen(false);
        }
    };

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li> <a href="#" onClick={() => scrollToSection("about-section")}>About</a></li>
                        <li><a href="#" onClick={() => scrollToSection("products-section")}>Products</a></li>
                        <li><a href="#" onClick={() => scrollToSection("contact-us-section")}>Contact Us</a></li>
                        <li><a   onClick={() => navigate("/user-review")}  >User Reviews</a></li>
                    </ul>
                </div>
                <div className="footer-social">
                    <h3>Follow Us</h3>
                    <div className="social-icons">
                        <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
                        <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
                        <a href="#" className="social-icon"><i className="fab fa-threads"></i></a>

                    </div>
                </div>
                <div className="footer-copyright">
                    <p>&copy; 2024 Ambika Soaps. All Rights Reserved.</p>
                </div>
            </div>
        </footer>




    );
};

export default Footer;
