import { ADD_SHOE_DATA } from "../action-types/getShoeData"
import { ADD_TO_CART } from "../action-types/getShoeData";
import { DELETE_FROM_CART } from "../action-types/getShoeData";
const intialState = {
shoeData: {},

};
 const ShoeData = (state = intialState, action)=>{
 switch (action.type){
     case ADD_SHOE_DATA:
         return {...state, shoeData: action.payload}
    
         default:
         return state
 }

}
export default ShoeData