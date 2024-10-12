import { useState } from "react";
import "./CartCard.css";
export const CartCard = ({product}) => {
  const [cart, setCart] = useState([JSON.parse(localStorage.getItem("cart"))]||null);
  
    const {name, price, image} = product;
  return (
    <div className='cartCard'>
        <img src={image} alt={name}/>
        <p className='productName'>{name}</p>
        <p className='productPrice'>${price}</p>
        <button>Remove</button>
    </div>
  )
}
