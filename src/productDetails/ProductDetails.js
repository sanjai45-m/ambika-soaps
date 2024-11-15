import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";

const ProductDetails = () => {
    const { productId } = useParams();  // Get the productId from the URL
    const [product, setProduct] = useState(null);  // To store product data
    const [subproducts, setSubproducts] = useState([]);  // To store subproducts
    const [loading, setLoading] = useState(true);  // Loading state for API calls

    useEffect(() => {
        // Fetch product details using productId from the API
        fetch(`${process.env.REACT_APP_API_URL}/api/products/${productId}`)
            .then((response) => response.json())
            .then((data) => {
                setProduct(data);  // Store the product data
                setSubproducts(data.subproducts || []);  // Use the subproducts from the product data
                setLoading(false);  // Set loading to false once data is fetched
            })
            .catch((error) => {
                console.error("Error fetching product details:", error);
                setLoading(false);
            });
    }, [productId]);  // Fetch product details when productId changes

    // Loading state or fallback if product data is not found
    if (loading) {
        return <p>Loading product details...</p>;
    }

    if (!product) {
        return <p>Product not found.</p>;
    }

    return (
        <div className="product-details-container">
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <div className="subproducts-list">
                {subproducts.length > 0 ? (
                    subproducts.map((sub) => (
                        <div key={sub.id} className="subproduct-card">
                            <div className="discount-badge">
                                <span>{sub.discountPrice}% off</span>
                            </div>
                            <img src={sub.image} alt={sub.name} className="subproduct-image" />
                            <h2>{sub.name}</h2>
                            <p>Price: <span className="price">₹{sub.price}</span></p>
                           
                        </div>
                    ))
                ) : (
                    <p>No sub-products available for this product.</p>
                )}
            </div>
        </div>
    );
};

export default ProductDetails;
