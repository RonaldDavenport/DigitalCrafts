import { ADD_TO_CART } from "../action-types/getShoeData";
import { DELETE_FROM_CART } from "../action-types/getShoeData";

export const addToCart=(shoeID)=>{
    return{
        type:ADD_TO_CART,
        payload: {id: shoeID}
    }
}

export const removeFromCart = (shoeID)=>{
    return{
        type: DELETE_FROM_CART,
        payload:{id:shoeID}
        
    }
}