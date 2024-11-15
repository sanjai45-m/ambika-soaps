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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
