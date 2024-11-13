import React from "react";
import { useNavigate } from "react-router-dom";
import "./AllProducts.css";
import products from "../ProductData";

const AllProducts = () => {
    const navigate = useNavigate();

    const handleProductClick = (productName) => {
        navigate(`/products/${productName}`);
    };

    return (
        <div className="all-products-container">
            <h1>All Products</h1>
            <div className="products-list">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="product-item"
                        onClick={() => handleProductClick(product.name)}
                    >
                        <img src={product.image} alt={product.name} className="product-image" />
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllProducts;
