import React, { useEffect } from "react";
import { ProductCard } from "../components";
import { useTitle } from "../hooks/useTitle";

import iphone1 from "../assets/images/iphone1.jpg";
import iphone15 from "../assets/images/iphone15.jpg";
import swatch from "../assets/images/swatch.jpg";
import smartWatch from "../assets/images/watch.jpg";
import mobile from "../assets/images/mobile.jpg";
import mobiles from "../assets/images/Mobiles.jpg";
import { useState } from "react";
import "../components/ProductCard.css";
import Loading from "../assets/images/loading.gif";
export const Home = () => {
  useTitle("Shopping Cart using React.js");
  const [cartProduct, setCartProduct] = useState(
    JSON.parse(localStorage.getItem("cart")) || ""
  );
  const [loading, setLoading] = useState(true);

  const products = [
    { id: 1, name: "Iphone 15 ProMax", price: 1199, image: iphone15 },
    { id: 2, name: "Iphone 15 Pro", price: 999, image: iphone1 },
    { id: 3, name: "Samsung SmartWatch", price: 150, image: swatch },
    { id: 4, name: "SmartWatch", price: 150, image: smartWatch },
    { id: 5, name: "Iphone X", price: 250, image: mobile },
    { id: 6, name: "HTC", price: 255, image: mobiles },
  ];
  const handleCart = (product) => {
    const isProductInCart = cartProduct.some(
      (cartItem) => cartItem.id === product.id
    );
    if (isProductInCart) {
      setCartProduct([...cartProduct, product]);
    } else {
      alert("Product already in the cart");
    }
  };
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartProduct));
  }, [cartProduct]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    },1000);
  }, []);

  return (
    <main>
      {loading ? (
        <section className="products">
          <img src={Loading} alt="loading" />
        </section>
      ) : (
        <section className="products">
          {products &&
            products.map((product, index) => (
              <ProductCard
                key={index}
                product={product}
                handleCart={handleCart}
                loading_ ={'In Stock'}
              />
            ))}
        </section>
      )}
    </main>
  );
};
