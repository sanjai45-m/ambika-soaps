import React from "react";
import "./About.css";
import aboutImage1 from "../assets/img1.jpg";
import aboutImage2 from "../assets/img2.jpg";

const About = () => {
    return (
        <div className="outer-container">
            <div className="about-container">
                <div className="about-content">
                    <div className="about-description">
                        <h1 className="about-title">About Us</h1>
                        <p>
                            At <strong>Ambika Soaps</strong>, we believe in the power of nature to nurture and care for your skin and hair. With over 5 years of experience in crafting homemade products, we focus on quality and customer satisfaction.
                        </p>
                        <p>
                            Our mission is to provide you with exceptional <strong>soaps, hair care products, serums</strong>, and more that enhance your natural beauty. We prioritize using wholesome ingredients sourced from nature, ensuring that every product is gentle yet effective.
                        </p>
                        <div className="about-points-grid">
                    <div className="point-item">✅ Natural Ingredients Only</div>
                    <div className="point-item">✅ Handcrafted with Love</div>
                    <div className="point-item">✅ Eco-Friendly Packaging</div>
                    <div className="point-item">✅ No Artificial Additives</div>
                </div>
                    </div>
                    <div className="about-images">
                        <img src={aboutImage1} alt="Ambika Soaps" className="about-image" />
                        <img src={aboutImage2} alt="Natural Ingredients" className="about-image" />
                    </div>
                </div>
                
                {/* New section for points in a 2x2 grid */}
                
            </div>
        </div>
    );
};

export default About;
