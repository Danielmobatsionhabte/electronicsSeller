export const CartReducer = (state, action) =>{
    const {type, payload} = action;

    switch(type){
        case "ADD_TO_CART": 
        return 
        case "REMOVE_FROM_CART":
        return
        case "UPDATE_TOTAL":
        return 
        default:
            throw new Error("No Case Found In cartReducer");
    }
}