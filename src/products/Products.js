import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Products.css";

const Products = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    const displayLimit = 5;

    // Fetch products from the API
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                console.log(`here is `);
                const response = await fetch(`${process.env.REACT_APP_API_URL}/api/products`);
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };
        fetchProducts();
    }, []);

    const handleProductClick = (productId) => {
        // Navigate to the product details page using productId
        navigate(`/products/${productId}`);
    };

    return (
        <>
            <div className="intro-container">
                <div className="products-container">
                    <h1 className="products-title">Our Products</h1>
                    <div className="underline"></div>
                    <div className="products-list">
                        {products.slice(0, displayLimit).map((product) => (
                            <div
                                key={product.id}
                                className="product-item"
                                onClick={() => handleProductClick(product.id)}
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
