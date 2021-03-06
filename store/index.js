import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import ProductsReducer from "./reducers/products.reducers";
import AuthReducer from "./reducers/auth.reducer";
import CartReducer from "./reducers/cart.reducer";
import FavsReducer from "./reducers/fav.reducer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
import { persistReducer, persistStore } from "redux-persist"
import DataUserReducer from "./reducers/dataUser.reducer";
import UserLocation from "./reducers/location.reducer";

// redux persist config
const persistConfig = {
    key:'root',
    storage: AsyncStorage,
    stateReconciler: autoMergeLevel2,
    blacklist:['dataUser','location']
}

// combine reducers
const RootReducer = combineReducers({
    products:ProductsReducer,
    auth:AuthReducer,
    cart:CartReducer,
    favs:FavsReducer,
    dataUser:DataUserReducer,
    location:UserLocation
})


const persistedReducer = persistReducer(persistConfig, RootReducer);
export const store = createStore(persistedReducer,applyMiddleware(thunk));
export const persistor = persistStore(store);


