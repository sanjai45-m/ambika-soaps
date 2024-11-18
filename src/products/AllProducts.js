import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./AllProducts.css";

const AllProducts = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // Get the products from the state passed from the Products component
    const products = location.state?.products || [];

    const handleProductClick = (productId) => {
        // Navigate to the product details page and pass the product ID
        navigate(`/products/${productId}`, { state: { productId } });
    };

    return (
        <div className="all-products-container">
            <h1>All Products</h1>
            <div className="products-list">
                {products.length > 0 ? (
                    products.map((product) => (
                        <div
                            key={product.id}
                            className="product-item"
                            onClick={() => handleProductClick(product.id)}
                        >
                            <img
                                src={product.image || "default-image-url"} // Fallback if no image is provided
                                alt={product.name}
                                className="product-image"
                            />
                            <h2>{product.name}</h2>
                            <p>{product.description}</p>
                        </div>
                    ))
                ) : (
                    <p>No products available</p>
                )}
            </div>
        </div>
    );
};

export default AllProducts;
