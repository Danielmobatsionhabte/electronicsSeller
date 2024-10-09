import React from 'react'
import { ProductCard } from '../components';

import iphone1 from "../assets/images/iphone1.jpg";
import iphone15 from "../assets/images/iphone15.jpg";
import swatch from "../assets/images/swatch.jpg";
import smartWatch from "../assets/images/watch.jpg"
export const Home = () => {
    const products = [
        { id: 1, name: 'Iphone 15 ProMax', price: 150, image:iphone15 },
        { id: 2, name: 'Iphone 15 Pro', price: 150, image:iphone1},
        { id: 3, name: 'Samsung SmartWatch', price: 150, image:swatch },
        { id: 4, name: 'SmartWatch', price: 150, image:smartWatch }
    ]; 

  return (
   <main>
    <section className="products">
    {products.map((product)=>(
    <ProductCard key={product.id} product={product} />
))}
    </section>

   </main>
  )
}
