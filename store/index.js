import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import ProductsReducer from "./reducers/products.reducers";
import AuthReducer from "./reducers/auth.reducer";
import CartReducer from "./reducers/cart.reducer";
import FavsReducer from "./reducers/fav.reducer";


const RootReducer = combineReducers({
    products:ProductsReducer,
    auth:AuthReducer,
    cart:CartReducer,
    favs:FavsReducer
})

export default createStore(RootReducer,applyMiddleware(thunk))