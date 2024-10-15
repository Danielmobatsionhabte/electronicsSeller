import { useTitle } from "../hooks/useTitle";
import {useCart } from "../context/CartContext";
import "../components/CartCard.css";
import { CartCard } from "../components";

export const Cart = () => {
  const {total, cartList} = useCart();
  useTitle("Cart"); 
 // const totalPrice = cart.reduce((acc, item) => acc + item.price, 0); // this is used to get the sum of all the products

  return total > 0 ? (
    <main>
      <center>
      <h1>{cartList.length> 0 ? cartList.length : "No"} Items in the Cart: ${total}</h1>
      </center>
    
      {cartList && cartList.map((item, index) => (
        <CartCard key={index}  product={item}/>
      ))}
      
    </main>
  ) : (
    <center>
 <p>Your cart is empty.</p>
    </center>
   
  );
};
