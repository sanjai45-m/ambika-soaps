import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faPlus } from "@fortawesome/free-solid-svg-icons";

const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "20px",
      gap: "30px",
      backgroundColor: "#f7f9fb",
      color: "#333",
      minHeight: "100vh",
    },
    subproductsList: {
      display: "flex",
      flexWrap: "wrap",
      gap: "20px",
      justifyContent: "center",
    },
    card: {
      width: "300px",
      height: "450px",
      background: "linear-gradient(145deg, #ffffff, #e6e6e6)",
      borderRadius: "20px",
      boxShadow: "10px 10px 20px #d1d1d1, -10px -10px 20px #ffffff",
      overflow: "hidden",
      position: "relative",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      display: "flex",
      flexDirection: "column",
      cursor: "pointer",
    },
    cardHover: {
      transform: "scale(1.05)",
      boxShadow: "12px 12px 25px #bbbbbb, -12px -12px 25px #ffffff",
    },
    imageContainer: {
      width: "100%",
      height: "260px",
      overflow: "hidden",
      borderRadius: "20px 20px 0 0",
    },
    image: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transition: "transform 0.5s ease",
    },
    imageHover: {
      transform: "scale(1.1)",
    },
    details: {
      padding: "20px",
      flexGrow: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    name: {
      margin: "0",
      fontSize: "1.3rem",
      color: "#34495e",
      fontWeight: "700",
      textAlign: "center",
      whiteSpace: "wrap",
      textOverflow: "ellipsis",
    },
    priceContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop: "20px",
    },
    currency: {
        fontSize: '1.5rem',  // Increase the font size for better emphasis
        color: 'linear-gradient(to right, #6a11cb, #2575fc)', // Gradient effect
        fontFamily: 'Arial, sans-serif',
        fontWeight: 'bold',
        textShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',  // Subtle 3D shadow for depth
        letterSpacing: '0.5px',
        transition: 'transform 0.3s ease, color 0.3s ease',  // Add transition for smooth hover effect
      },
        price: {
          color: "green", // Price color
          fontSize: "3rem", // Larger price font size for more emphasis
          fontWeight: "bold",
          fontFamily: "Arial, sans-serif",
          transform: "translateZ(0)", // Ensures text is on the right layer for 3D effect
          transition: "transform 0.3s ease, text-shadow 0.3s ease", // Adds smooth transition for hover effects
          letterSpacing: "1px", // Slight letter spacing to enhance 3D effect
        },
      
      
    
    button: {
      padding: "12px 24px",
      background: "linear-gradient(145deg, #27ae60, #2ecc71)",
      border: "none",
      color: "white",
      fontSize: "1rem",
      fontWeight: "600",
      borderRadius: "50px",
      cursor: "pointer",
      transition: "all 0.3s ease",
      marginTop: "20px",
      alignSelf: "center",
      boxShadow: "3px 3px 6px rgba(0,0,0,0.1), -3px -3px 6px rgba(255,255,255,0.5)",
    },
    buttonHover: {
      background: "linear-gradient(145deg, #2ecc71, #27ae60)",
      transform: "scale(1.1)",
    },
    buttonRemove: {
      background: "linear-gradient(145deg, #e74c3c, #c0392b)",
    },
  };
  

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [subproducts, setSubproducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { cart, dispatch } = useCart();

  useEffect(() => {
    fetch(`https://authen-48d46-default-rtdb.firebaseio.com/products/${productId}.json`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        if (data && data.subproducts) {
          const subproductsData = Object.keys(data.subproducts).map((key) => ({
            id: key,
            ...data.subproducts[key],
          }));
          setSubproducts(subproductsData);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
        setLoading(false);
      });
  }, [productId]);

  const toggleCartItem = (sub) => {
    const isInCart = cart.some((item) => item.id === sub.id);
    if (isInCart) {
      dispatch({ type: "REMOVE_FROM_CART", payload: { id: sub.id } });
    } else {
      dispatch({ type: "ADD_TO_CART", payload: sub });
    }
  };

  if (loading) return <p>Loading product details...</p>;
  if (!product) return <p>Product not found.</p>;

  return (
    <div style={styles.container}>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <div style={styles.subproductsList}>
        {subproducts.map((sub) => (
          <div
            key={sub.id}
            style={styles.card}
          >
            <div style={styles.imageContainer}>
              <img
                src={sub.image}
                alt={sub.name}
                style={styles.image}
              />
            </div>
            <div style={styles.details}>
              <h2 style={styles.name}>{sub.name}</h2>
              <div style={styles.priceContainer}>
                <span style={styles.currency}>₹</span>
                <span style={styles.price}>{sub.price}/-</span>
              </div>
              <button
                style={{
                  ...styles.button,
                  ...(cart.some((item) => item.id === sub.id) ? styles.buttonRemove : {}),
                }}
                onClick={() => toggleCartItem(sub)}
              >
                <FontAwesomeIcon
                  icon={cart.some((item) => item.id === sub.id) ? faShoppingCart : faPlus}
                  style={{ marginRight: "8px" }}
                />
                {cart.some((item) => item.id === sub.id) ? "Remove from Cart" : "Add to Cart"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;
