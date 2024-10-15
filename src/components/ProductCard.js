import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import "./ProductCard.css";
import Loading from "../assets/images/loading.gif";
export const ProductCard = ({ product, loading_}) => {
  const { removeFromCart, addToCart, cartList } = useCart();
  
  const { name, image, price } = product;
  const [loading, setLoading] = useState(true);

    const [isInCart, setIsInCart] = useState(false);

  console.log(cartList);
 

  useEffect(() => {
    const productIsInCart = cartList.find(cartItem=> cartItem.id === product.id);
    if(productIsInCart){
      setIsInCart(true);
    }else{
      setIsInCart(false);
    }
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [cartList, product.id]);

  return (
    <div className="productCard">
      {loading ? (
        <img src={Loading} alt="Loading..." height={100}/>
      ):(
      <img src={image ? image : Loading} alt={name}/>
      )}
      

      <p className="name">{name}</p>

      <div className="action">
        <p>${price}</p>
        {
          isInCart ? <button onClick={()=>removeFromCart(product)} className="remove">Remove</button>  
          : 
          <button onClick={()=>addToCart(product)}>Add To Cart</button>
        }
       
      </div>
      <p style={{fontSize:13.5}}>{loading_}</p>
    </div>
  );
}
