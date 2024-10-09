import React from 'react'

import "./ProductCard.css";
export const ProductCard = ({product}) => {
    const {name, image, price} = product;
  return (
    <div className='productCard'>
        <img src={image} alt={name}/>
        <p className='name'>{name}</p>
        
        <div className="action">
        <p>${price}</p>
        <button>Add To Cart</button>
      </div>

    </div>
  )
}
