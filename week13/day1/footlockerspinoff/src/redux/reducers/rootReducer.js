import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import ShoeData from "./ShoeData"
import CartInfo from "./cartReducer";



const persistConfig = {
    key: 'root',
    storage,
    whitelist:["ShoeData"]
}



const rootReducer = combineReducers({
    ShoeData,
    CartInfo
    
})

export default persistReducer(persistConfig,rootReducer)
