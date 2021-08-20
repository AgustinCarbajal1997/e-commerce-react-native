import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import ProductsReducer from "./reducers/products.reducers";
import AuthReducer from "./reducers/auth.reducer";


const RootReducer = combineReducers({
    products:ProductsReducer,
    auth:AuthReducer
})

export default createStore(RootReducer,applyMiddleware(thunk))