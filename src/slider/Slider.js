import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import "./Slider.css";
import img1 from "../assets/first.jpeg";
import img2 from "../assets/second.jpg";
import img3 from "../assets/third.jpeg";
import img4 from "../assets/fourth.jpeg";
import logo from "../assets/logo.png";

const Slider = () => {
    const [items, setItems] = useState([
        { src: img1, title: "Beauty Skin ", type: "Solutions", description: "Radiant, Glowing, Refreshing, Hydrating, Perfect." },
        { src: img2, title: "Herbal Hair ", type: "Care", description: "Strengthening, Revitalizing, Natural, Refreshing, Essential." },
        { src: img3, title: "Healing Serums", type: "& Oils", description: "Moisturizing, Smooth, Nourishing, Revitalizing, Essential." },
        { src: img4, title: "Natural Soothing ", type: "Soaps", description: "Gentle, Organic, Nourishing, Refreshing, Healthy." }
    ]);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState("fade-in");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            transitionToNext();
        }, 8000); // Slide change every 8 seconds

        return () => clearInterval(interval);
    }, [items.length]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setIsMenuOpen(false);
        }
    };

    const transitionToNext = () => {
        setFade("fade-out");
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
            setFade("fade-in");
        }, 500); // Match this timeout with your CSS transition duration
    };

    const transitionToPrev = () => {
        setFade("fade-out");
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
            setFade("fade-in");
        }, 500); // Match this timeout with your CSS transition duration
    };

    return (
        <div className="slider">
            <header>
                <div className="logo-container">
                    <img src={logo} alt="Logo" className="logo" />
                </div>
                <button className="menu-button" onClick={toggleMenu}>
                    <FontAwesomeIcon icon={faBars} />
                </button>
                <nav className={isMenuOpen ? "open" : "closed"}>
                    <a href="#" className="active">Home</a>
                    <a href="#" onClick={() => scrollToSection("about-section")}>About</a>
                    <a href="#" onClick={() => scrollToSection("products-section")}>Products</a>
                    <a href="#">Services</a>
                    <a href="#">Contact</a>
                </nav>
            </header>
            <div className={`list ${fade}`}>
                <div className="item">
                    <img src={items[currentIndex].src} alt={`Slide ${currentIndex + 1}`} />
                    <div className="content">
                        <div className="title">{items[currentIndex].title}</div>
                        <div className="type">{items[currentIndex].type}</div>
                        <div className="description">{items[currentIndex].description}</div>
                        <div className="button">
                            <button onClick={() => scrollToSection("products-section")}>SEE MORE</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Thumbnail Section */}
            <div className="thumbnail">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className={`item ${index === currentIndex ? "active" : ""}`}
                    >
                        <img src={item.src} alt={`Thumbnail ${index + 1}`} />
                    </div>
                ))}
            </div>

            {/* Navigation Arrows */}
            <div className="nextPrevArrows">
                <button className="prev" onClick={transitionToPrev}>{"<"}</button>
                <button className="next" onClick={transitionToNext}>{">"}</button>
            </div>
        </div>
    );
};

export default Slider;
