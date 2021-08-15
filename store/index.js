import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import ProductsReducer from "./reducers/products.reducers";

const RootReducer = combineReducers({
    products:ProductsReducer
})

export default createStore(RootReducer,applyMiddleware(thunk))