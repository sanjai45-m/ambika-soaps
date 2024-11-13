import React from "react";
import { useNavigate } from "react-router-dom";
import "./Products.css";
import products from "../ProductData"; // Ensure sub-products are part of the data

const Products = () => {
    const navigate = useNavigate();
    const displayLimit = 5;

    const handleProductClick = (productName) => {
        // Assuming each product has a 'subProducts' array that contains its sub-products
        const product = products.find((prod) => prod.name === productName);

        if (product && product.subProducts && product.subProducts.length > 0) {
            // Navigate to the product page with sub-products (replace with your route structure)
            navigate(`/products/${productName}`, { state: { subProducts: product.subProducts } });
        } else {
            // Handle case where no sub-products are available
            navigate(`/products/${productName}`);
        }
    };

    return (
        <>
            {/* Full screen intro container */}
            <div className="intro-container">
                <div className="products-container">
                    <h1 className="products-title">Our Products</h1>
                    <div className="underline"></div>
                    <div className="products-list">
                        {products.slice(0, displayLimit).map((product) => (
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
                    {products.length > displayLimit && (
                        <button className="view-all-button" onClick={() => navigate("/all-products")}>
                            View All Products ➔
                        </button>
                    )}
                </div>
            </div>
        </>
    );
};

export default Products;
