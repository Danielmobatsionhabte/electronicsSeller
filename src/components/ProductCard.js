import { useEffect, useState } from "react";
import "./ProductCard.css";
import Loading from "../assets/images/loading.gif";
export const ProductCard = ({ product }) => {
  const { name, image, price } = product;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

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
    </div>
  );
};
