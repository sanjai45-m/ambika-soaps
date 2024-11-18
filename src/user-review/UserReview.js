import React, { useEffect, useState } from "react";
import "./UserReview.css";  // Ensure this file styles your component

const UserReview = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const fetchReviews = async () => {
            const response = await fetch(
                'https://authen-48d46-default-rtdb.firebaseio.com/review.json'
            );
            const data = await response.json();
            const loadedReviews = [];

            // Loop through the data and format it into an array of reviews
            for (const key in data) {
                loadedReviews.push({
                    id: key,
                    image: data[key].image,  // Correctly access the image field
                });
            }
            setReviews(loadedReviews);
        };

        fetchReviews();
    }, []);  // Empty dependency array means this effect runs once when the component mounts

    return (
        <div className="user-review-container">
            <h1 className="user-review-title">Customer Reviews</h1>
            <div className="review-carousel">
                {reviews.length === 0 ? (
                    <p>Loading reviews...</p>
                ) : (
                    reviews.map((review) => (
                        <div key={review.id} className="review-card">
                            <img
                                src={review.image}  // Using the image URL from Firebase
                                alt={`Customer review snapshot ${review.id}`}
                                className="review-snapshot"
                            />
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default UserReview;
