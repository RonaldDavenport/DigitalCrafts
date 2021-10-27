import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import ShoeData from "./ShoeData"



const persistConfig = {
    key: 'root',
    storage,
    whitelist:["ShoeData"]
}



const rootReducer = combineReducers({
    ShoeData,
    
})

export default persistReducer(persistConfig,rootReducer)
