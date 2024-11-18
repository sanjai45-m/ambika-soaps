import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Products.css";

const Products = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    const displayLimit = 5;

    // Fetch products from the API
    async function fetchProducts() {
        try {
            const response = await fetch('https://authen-48d46-default-rtdb.firebaseio.com/products.json');
            const data = await response.json();

            // Transform the response into an array of product objects
            const productArray = data ? Object.keys(data).map(key => ({
                id: key, // Use the key as the product ID
                ...data[key] // Spread the product data
            })) : [];

            console.log('Fetched Products:', productArray);
            setProducts(productArray); // Set the transformed array to state
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    }

    // Fetch products when the component mounts
    useEffect(() => {
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
                        {/* Check if products is an array and if it has data */}
                        {Array.isArray(products) && products.length > 0 ? (
                            products.slice(0, displayLimit).map((product) => (
                                <div
                                    key={product.id}
                                    className="product-item"
                                    onClick={() => handleProductClick(product.id)}
                                >
                                    {/* Display product image with fallback */}
                                    <img
                                        src={product.image || 'default-image-url'} // Add a fallback if image is missing
                                        alt={product.name}
                                        className="product-image"
                                    />
                                    <h2>{product.name}</h2>
                                    <p>{product.description}</p>
                                </div>
                            ))
                        ) : (
                            <p>No products available</p> // Display message if no products
                        )}
                    </div>
                    <button
                        className="view-all-button"
                        onClick={() => navigate("/all-products", { state: { products } })}
                    >
                        View All Products ➔
                    </button>

                </div>
            </div>
        </>
    );
};

export default Products;
