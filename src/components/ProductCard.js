import { useEffect, useRef, useState } from "react";
import "./ProductCard.css";
import Loading from "../assets/images/loading.gif";
export const ProductCard = ({ product, loading_}) => {
  const { name, image, price } = product;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
const l = useRef(loading_);
const r = l.current; // needs a page reload to display the updated value of loading_
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
        <button>Add To Cart</button>
      </div>
      <p style={{fontSize:13.5}}>{loading_}</p>
    </div>
  );
};
