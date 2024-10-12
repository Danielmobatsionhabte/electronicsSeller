import { useState,useContext } from "react";
import { useTitle } from "../hooks/useTitle";
import { CartContext, useCart } from "../context/CartContext";
import iphone1 from "../assets/images/iphone1.jpg";
import iphone15 from "../assets/images/iphone15.jpg";
import "../components/CartCard.css";
import { CartCard } from "../components";

export const Cart = () => {
  const {total} = useCart();
  useTitle("Cart");
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || ""
  );
  // const totalPrice = cart.reduce((acc, item) => acc + item.price, 0); // this is used to get the sum of all the products

  return total > 0 ? (
    <main>
      <center>
      <h1>Items in the Cart: {total}</h1>
      </center>
    
      {cart && cart.map((item, index) => (
        <CartCard key={index}  product={item}/>
      ))}
      
    </main>
  ) : (
    <p>Your cart is empty.</p>
  );
};
