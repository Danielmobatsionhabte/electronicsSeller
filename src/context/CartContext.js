import { createContext, useContext, useReducer} from "react"
import { CartReducer } from "../reducer/CartReducer";

const initialState ={
    cartList:[],
    total:0
}

const CartContext = createContext(initialState);
/*
we can use//  export const CartContext = createContext(initialState);
to export the context so we can use it in other file example in the Cart.js 
we can call this // const {total} = useContext(CartContext);
*/

export const CartProvider = ({children}) => {
    const [state, dispatch] = useReducer(CartReducer,initialState)

    const addToCart = (product) => {
      const updatedCartList =   state.cartList.concat(product);
      updateTotal(updatedCartList);
      dispatch({
        type: 'ADD_TO_CART',
        payload: {
            products:updatedCartList
        }
      })
    }
    const removeFromCart = (product) => {
        const updatedCartList = state.cartList.filter(current => current.id !==product.id);
        updateTotal(updatedCartList);
        dispatch({
            type: 'REMOVE_FROM_CART',
            payload: {
                products:updatedCartList
            }
        })
    }

    const updateTotal = (products) => {
        let total =0; 
       products.forEach(product => total = total + product.price)
       dispatch(
        {
            type:'UPDATE_TOTAL',
            payload:{
                total
            }
        }
       )
    }

    const value = {
        total:state.total,
        cartList:state.cartList,
        addToCart,
        removeFromCart
    }

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}
export const useCart = () =>{
    const context = useContext(CartContext);
    return context;
}
    

