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
    const value = {
        total:state.total,
        cartList:state.cartList,
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
    

