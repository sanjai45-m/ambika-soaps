import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import "./Slider.css";
import logo from "../assets/logo.png";

const Slider = () => {
    const [items, setItems] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState("fade-in");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Fetch banners from API
    useEffect(() => {
        const fetchBanners = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_API_URL}/api/products/banners`);
                const data = await response.json();
                setItems(data);
            } catch (error) {
                console.error("Error fetching banners:", error);
            }
        };
        fetchBanners();
    }, []);

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
                    {items.length > 0 && (
                        <>
                            <img src={items[currentIndex].imageUrl} alt={`Slide ${currentIndex + 1}`} />
                            <div className="content">
                                <div className="title">{items[currentIndex].title}</div>
                                <div className="type">{items[currentIndex].type}</div>
                                <div className="description">{items[currentIndex].description}</div>
                                <div className="button">
                                    <button onClick={() => scrollToSection("products-section")}>SEE MORE</button>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>

            {/* Thumbnail Section */}
            <div className="thumbnail">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className={`item ${index === currentIndex ? "active" : ""}`}
                    >
                        <img src={item.imageUrl} alt={`Thumbnail ${index + 1}`} />
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
