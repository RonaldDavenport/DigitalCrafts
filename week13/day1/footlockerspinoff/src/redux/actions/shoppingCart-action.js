import { ADD_TO_CART } from "../action-types/getShoeData";
import { DELETE_FROM_CART } from "../action-types/getShoeData";

export const addToCart=(shoeID,name,image,retailPrice)=>{
    return{
        type:ADD_TO_CART,
        payload: shoeID
    }
}

export const removeFromCart = (name)=>{
    return{
        type: DELETE_FROM_CART, 
        
        payload: name
        
        
    }
}