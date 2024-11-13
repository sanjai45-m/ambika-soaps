import React from "react";
import "./Footer.css"; // Import the CSS for styling
import { useState } from "react";
const Footer = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setIsMenuOpen(false);
        }
    };

    return (
        <footer class="footer">
        <div class="footer-container">
            <div class="footer-links">
                <h3>Quick Links</h3>
                <ul>
                    <li> <a href="#" onClick={() => scrollToSection("about-section")}>About</a></li>
                    <li><a href="#" onClick={() => scrollToSection("products-section")}>Products</a></li>
                    <li><a href="#" onClick={() => scrollToSection("contact-us-section")}>Contact Us</a></li>
                    <li><a href="#privacy">Privacy Policy</a></li>
                </ul>
            </div>
            <div class="footer-social">
                <h3>Follow Us</h3>
                <div class="social-icons">
                    <a href="#" class="social-icon"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" class="social-icon"><i class="fab fa-twitter"></i></a>
                    <a href="#" class="social-icon"><i class="fab fa-instagram"></i></a>
                    <a href="#" class="social-icon"><i class="fab fa-threads"></i></a>
                </div>
            </div>
            <div class="footer-copyright">
                <p>&copy; 2024 Ambika Soaps. All Rights Reserved.</p>
            </div>
        </div>
    </footer>
    
    
    
    
    );
};

export default Footer;
