import React from "react";
import { useParams } from "react-router-dom";
import products from "../ProductData"; // Import products data
import "./ProductDetails.css";

const ProductDetails = () => {
    const { productName } = useParams();
    const product = products.find(p => p.name === productName); // Find the product by name

    if (!product) {
        return <div className="product-details-container">Product not found.</div>;
    }

    return (
        <div className="product-details-container">
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <div className="subproducts-list">
                {product.subproducts.map(sub => (
                    <div key={sub.id} className="subproduct-card">
                        {/* Default 10% Discount Badge */}
                        <div className="discount-badge">
                            <span>10% off</span>
                        </div>
                        <img src={sub.image} alt={sub.name} className="subproduct-image" />
                        <h2>{sub.name}</h2>
                        <p>Price: <span className="price">₹{sub.price}</span></p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductDetails;
