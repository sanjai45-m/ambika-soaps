import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './about/About';
import Products from './products/Products';
import AllProducts from './products/AllProducts';
import Slider from './slider/Slider';
import Footer from './footer/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';
import ProductDetails from './productDetails/ProductDetails';
import ContactUs from './contact-us/ContactUs';
import UserReview from './user-review/UserReview';
import LoginPage from './components/Login/LoginPage';
import RegisterPage from './components/Register/RegisterPage';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Slider />
                <div id="about-section">
                  <About />
                </div>
                <div id="products-section">
                  <Products />
                </div>
                <div id="contact-us-section">
                  <ContactUs />
                </div>
                
                <Footer />
              </>
            }
          />
          <Route path="/all-products" element={<AllProducts />} />
          <Route path="/products/:productId" element={<ProductDetails />} />
          <Route path="/user-review" element={<UserReview />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
