import { useState } from "react";
import { useTitle } from "../hooks/useTitle";
import iphone1 from "../assets/images/iphone1.jpg";
import iphone15 from "../assets/images/iphone15.jpg";
import "../components/CartCard.css";
import { CartCard } from "../components";

export const Cart = () => {
  useTitle("Cart");
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || ""
  );
  // const totalPrice = cart.reduce((acc, item) => acc + item.price, 0); // this is used to get the sum of all the products

  return cart.length > 0 ? (
    <main>
      {cart.map((item, index) => (
        <CartCard key={index}  product={item}/>
      ))}
      
    </main>
  ) : (
    <p>Your cart is empty.</p>
  );
};
