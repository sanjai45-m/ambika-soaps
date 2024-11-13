// ContactUs.js (React Component)

import React, { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        product: '',
        message: '',
        address: '',
        SenderEmail: '' // Add the SenderEmail field
    });

    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState('');

    const validateForm = () => {
        const errors = {};

        if (formData.name.trim().length < 2) {
            errors.name = 'Name must be at least 2 characters long.';
        }
        if (!/^\d{10}$/.test(formData.mobile)) {
            errors.mobile = 'Please enter a valid 10-digit mobile number.';
        }
        if (formData.product.trim() === '') {
            errors.product = 'Product field cannot be empty.';
        }
        if (formData.message.trim() === '') {
            errors.message = 'Message field cannot be empty.';
        }
        if (formData.address.trim() === '') {
            errors.address = 'Address field cannot be empty.';
        }
        if (!/\S+@\S+\.\S+/.test(formData.SenderEmail)) { // Validate email format
            errors.SenderEmail = 'Please enter a valid email address.';
        }

        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (!validateForm()) {
            return;
        }
    
        console.log('Submitting form...');  // Add this line to debug
    
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/send-email`, {
                method: 'POST',
                credentials: 'include',  // Optional, for sending cookies
                mode: 'cors',  // This ensures CORS is enabled
                headers: {
                    'Content-Type': 'application/json',  // Ensure this is set
                },
                body: JSON.stringify(formData),  // Pass the form data
            });
    
            if (response.ok) {
                setStatus('Thank you for contacting us!');
                setFormData({
                    name: '',
                    mobile: '',
                    product: '',
                    message: '',
                    address: '',
                    SenderEmail: '' // Reset the SenderEmail field
                });
                setErrors({});
            } else {
                setStatus('Failed to send message. Please try again.');
            }
        } catch (error) {
            setStatus('An error occurred. Please try again later.');
        }
    };
    
    
    return (
        <div className="contact-us">
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-row">
                    <div className="form-group">
                        <label>Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        {errors.name && <p className="error-message">{errors.name}</p>}
                    </div>
                    <div className="form-group">
                        <label>Mobile Number</label>
                        <input
                            type="tel"
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleChange}
                            required
                        />
                        {errors.mobile && <p className="error-message">{errors.mobile}</p>}
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label>Product Needed</label>
                        <input
                            type="text"
                            name="product"
                            value={formData.product}
                            onChange={handleChange}
                            required
                        />
                        {errors.product && <p className="error-message">{errors.product}</p>}
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label>Message</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                        {errors.message && <p className="error-message">{errors.message}</p>}
                    </div>
                    <div className="form-group">
                        <label>Address</label>
                        <textarea
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            required
                        ></textarea>
                        {errors.address && <p className="error-message">{errors.address}</p>}
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label>Sender Email</label>
                        <input
                            type="email"
                            name="SenderEmail"
                            value={formData.SenderEmail}
                            onChange={handleChange}
                            required
                        />
                        {errors.SenderEmail && <p className="error-message">{errors.SenderEmail}</p>}
                    </div>
                </div>
                <button type="submit">Submit</button>
                {status && <p className="status-message">{status}</p>}
            </form>
        </div>
    );
};

export default ContactUs;
