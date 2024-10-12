import { useCallback, useEffect } from 'react'
import { Link, NavLink } from "react-router-dom"; 
import Logo from "../assets/images/logo.png"
import "./Header.css";
import { useState } from 'react';
export const Header = () => {
  const [cartProduct, setCartProduct] = useState(JSON.parse(localStorage.getItem("cart"))|| "");
  const [count, setCount] = useState(null);
  
const updateCart = (newCart)=>{
  // Update localStorage
  localStorage.setItem("cart", JSON.stringify(newCart));
  // Update state to trigger re-render
  setCartProduct(newCart);
}


useEffect(()=>{
  const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
  setCartProduct(storedCart);
},[])

  return (
    <header>
    <Link to="/" className="logo">
      <img src={Logo} alt="Shopmate Logo" />
      <span>Shopping Cart</span>
    </Link>
    <nav className="navigation">
      <NavLink to="/" className="link" end>Home</NavLink>
      <NavLink to="/cart" className="link">Cart</NavLink>
    </nav>
    <Link to="/cart" className="items">
      <span>Cart: {cartProduct.length}</span>
    </Link>
  </header>
  )
}
