import { ADD_TO_CART } from "../action-types/getShoeData";
import { DELETE_FROM_CART } from "../action-types/getShoeData";

export const addToCart=(id,image,brand,name,retailPrice)=>{
    return{
        type:ADD_TO_CART,
        payload: id,image,brand,name,retailPrice
    }
}

export const removeFromCart = (id)=>{
    return{
        type: DELETE_FROM_CART, 
        
        payload: id
        
        
    }
}