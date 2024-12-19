import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./Slider.css";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { faBars, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Slider = () => {
    const [items, setItems] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState("fade-in");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home-section"); // Default
    const navigate = useNavigate();
    const { cart } = useCart();
    const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

    // Fetch banners from API
    useEffect(() => {
        const fetchBanners = async () => {
            try {
                const response = await fetch(`https://authen-48d46-default-rtdb.firebaseio.com/banner.json`);
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();

                // Check if data exists and is an object
                if (data && typeof data === "object") {
                    setItems(Object.values(data)); // Only call Object.values if data is valid
                } else {
                    console.error("Invalid data format:", data);
                    setItems([]); // Fallback to empty array
                }
            } catch (error) {
                console.error("Error fetching banners:", error);
                setItems([]); // Fallback to empty array on error
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
        if (id === "home") {
            window.scrollTo({ top: 0, behavior: "smooth" });  // Scroll to the top for home section
            setActiveSection(id); // Set "home" as the active section
        } else {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
                setActiveSection(id); // Update active section
            }
        }
        setIsMenuOpen(false);
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

    useEffect(() => {
        const handleScroll = () => {
            const sections = ["home", "about-section", "products-section", "contact-us-section"];
            sections.forEach((section) => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                        setActiveSection(section); // Set active section based on scroll position
                    }
                }
            });
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

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
                    <a
                        href="#"
                        onClick={() => scrollToSection("home-section")}
                        className={activeSection === "home-section" ? "active" : ""}
                    >
                        Home
                    </a>
                    <a
                        href="#"
                        onClick={() => scrollToSection("about-section")}
                        className={activeSection === "about-section" ? "active" : ""}
                    >
                        About
                    </a>
                    <a
                        href="#"
                        onClick={() => scrollToSection("products-section")}
                        className={activeSection === "products-section" ? "active" : ""}
                    >
                        Products
                    </a>
                    <a
                        href="#"
                        onClick={() => navigate("/user-review")}
                        className={activeSection === "user-review" ? "active" : ""}
                    >
                        User Reviews
                    </a>
                    <a
                        href="#"
                        onClick={() => scrollToSection("contact-us-section")}
                        className={activeSection === "contact-us-section" ? "active" : ""}
                    >
                        Contact Us
                    </a>
                    <a
                        href="#"
                        onClick={() => navigate("/cart")}
                        className={activeSection === "cart" ? "active" : ""}
                    >
                        Cart <FontAwesomeIcon icon={faShoppingCart} />
                        {cartItemCount > 0 && <span className="cart-count">{cartItemCount}</span>}
                    </a>
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
