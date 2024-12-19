import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import Toastify styles
import "./Cart.css";

const Cart = () => {
    const { cart, dispatch } = useCart();
    const [isCheckout, setIsCheckout] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        address: ""
    });
    const [error, setError] = useState("");

    const updateQuantity = (id, quantity) => {
        if (quantity === 0) {
            dispatch({ type: "REMOVE_FROM_CART", payload: { id } });
        } else {
            dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
        }
    };

    const getTotalItems = () => cart.reduce((total, item) => total + item.quantity, 0);
    const getTotalPrice = () => cart.reduce((total, item) => total + item.quantity * item.price, 0);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleCheckout = () => {
        if (cart.length === 0) {
            alert("Add a product to the cart before proceeding to checkout.");
        } else {
            setIsCheckout(true);
            console.log("Proceeding to checkout. isCheckout:", true); // Debugging log
        }
    };

    const handleSubmit = async () => {
        if (!formData.name || !formData.phone || !formData.address) {
            setError("Please fill out all fields.");
            return;
        }

        setError("");

        const orderDetails = {
            ...formData,
            totalItems: getTotalItems(),
            totalPrice: getTotalPrice(),
            products: cart.map((item) => ({
                id: item.id,
                name: item.name,
                quantity: item.quantity,
                price: item.price
            }))
        };

        try {
            const response = await fetch("https://authen-48d46-default-rtdb.firebaseio.com/orders.json", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(orderDetails)
            });

            if (!response.ok) {
                throw new Error("Failed to place the order. Please try again.");
            }

            // Show success toast
            toast.success("Order placed successfully!", {
                position: "top-center",
                autoClose: 3000, // 3 seconds
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "colored",
                closeButton: false,  // Removes the close button
                style: {
                    maxWidth: "500px",  // Adjust width to fit longer text
                    whiteSpace: "normal",  // Allow text to wrap
                    textAlign: "center",  // Optional: Center the text
                }
            });
            

            // Clear user input fields
            setFormData({ name: "", phone: "", address: "" });

            // Clear the cart
            dispatch({ type: "CLEAR_CART" });

            // Reset checkout state
            setIsCheckout(false);
        } catch (error) {
            toast.error(error.message, {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "colored"
            });
        }
    };

    return (
        <div className="cart-container">
            <div className="cart-items">
                <h1>Your Shopping Cart</h1>
                {cart.length === 0 ? (
                    <p className="empty-cart">Your cart is empty. Start shopping now!</p>
                ) : (
                    cart.map((item) => (
                        <div key={item.id} className="cart-card">
                            <div className="cart-card-image">
                                <img src={item.image} alt={item.name} />
                            </div>
                            <div className="cart-card-details">
                                <h2>{item.name}</h2>
                                <p>Price: ₹{item.price}</p>
                                <div className="quantity-controls">
                                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                                </div>
                                <p className="product-total">
                                    Total: <span>₹{item.quantity * item.price}</span>
                                </p>
                            </div>
                        </div>
                    ))
                )}
            </div>
            <div className="cart-summary">
                <h2>Order Summary</h2>
                <p>Total Items: <span>{getTotalItems()}</span></p>
                <p>Total Price: <span>₹{getTotalPrice()}</span></p>
                <button
                    className="checkout-button"
                    onClick={handleCheckout}
                    disabled={cart.length === 0}
                >
                    Proceed to Checkout
                </button>
                {isCheckout && cart.length > 0 && (
                    <div className="checkout-form">
                        <h2>Enter Your Details</h2>
                        <div className="form-group">
                            <label>Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Phone</label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Address</label>
                            <textarea
                                name="address"
                                value={formData.address}
                                onChange={handleInputChange}
                            ></textarea>
                        </div>
                        {error && <p className="error">{error}</p>}
                        <button className="submit-button" onClick={handleSubmit}>
                            Submit
                        </button>
                    </div>
                )}
            </div>
            <ToastContainer /> {/* Toast Container to display notifications */}
        </div>
    );
};

export default Cart;
