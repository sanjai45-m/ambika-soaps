import React, { useState, useEffect } from 'react';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch data from the provided API
    fetch('https://demoadmin-50023372632.development.catalystappsail.in/api/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="product-list">
      {products.length === 0 ? (
        <p>Loading...</p>
      ) : (
        products.map((product) => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <img
              src={`data:image/png;base64,${product.imageData}`}
              alt={product.name}
              style={{ width: '200px', height: '200px' }}
            />
          </div>
        ))
      )}
    </div>
  );
};

export default ProductList;
