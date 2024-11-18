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
        fetch(`https://authen-48d46-default-rtdb.firebaseio.com/products/${productId}.json`)  // Corrected API URL
            .then((response) => response.json())
            .then((data) => {
                setProduct(data);  // Store the product data
                // If subproducts exist, fetch them
                if (data && data.subproducts) {
                    const subproductsData = Object.keys(data.subproducts).map(key => ({
                        id: key,  // Use the key as the subproduct ID
                        ...data.subproducts[key],  // Spread the subproduct data
                    }));
                    setSubproducts(subproductsData);  // Store subproduct data
                }
                setLoading(false);  // Set loading to false once data is fetched
            })
            .catch((error) => {
                console.error("Error fetching product details:", error);
                setLoading(false);
            });
    }, [productId]);  // Fetch product details and subproducts when productId changes

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
