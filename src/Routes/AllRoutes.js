
import { Routes, Route } from 'react-router-dom'
import {Home, Cart} from "../pages";
import { useEffect, useState } from 'react';

export const AllRoutes = () => {
    const [cartProduct, setCartProduct] = useState([]);
    useEffect(()=>{
      setCartProduct('world');
    },[]);
   
    const check ='hello';
  return (
   <>
   <Routes>
    <Route path="/" element={<Home />} cartProduct={cartProduct} setCartProduct={setCartProduct}  />
    <Route path="/cart" element={<Cart />}  cartProduct={cartProduct} setCartProduct={setCartProduct} check={check}/>
   </Routes>
   </>
  )
}
