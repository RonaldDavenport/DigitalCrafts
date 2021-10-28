import { ADD_SHOE_DATA } from "../action-types/getShoeData"
import { ADD_TO_CART } from "../action-types/getShoeData";
import { DELETE_FROM_CART } from "../action-types/getShoeData";
const intialState = {
shoeData: {},
cartInfo: [],
};
 const ShoeData = (state = intialState, action)=>{
 switch (action.type){
     case ADD_SHOE_DATA:
         return {...state, shoeData: action.payload}
    case ADD_TO_CART:
        return{...state, cartInfo: [...state.cartInfo,action.payload]}
    
        
    case DELETE_FROM_CART:
        const cartInfoState = state.cartInfo
        
     const newState=cartInfoState.filter((shoe)=>shoe.name !== action.payload.name);
    //  return newState
     


         default:
         return state
 }

}
export default ShoeData