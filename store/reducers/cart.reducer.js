import { ADD_CART, ADD_QUANTITY, DELETE_QUANTITY } from "../actions/cart.action";

export const INITIAL_STATE = {
    productsCart:[]
}

const CartReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_CART:
            const existId = state.productsCart.find(item => item.id === action.payload.id);
            if(existId){
                existId.quantity += 1;
                let filterState = state.productsCart.filter(item => item.id !== existId.id);
                filterState = [...filterState, existId];
                
                return {
                    ...state,
                    productsCart:filterState
                }

            }else{
                const productToAdd = [...state.productsCart,action.payload]
                return {
                    ...state,
                    productsCart:productToAdd
                }
            }
        case ADD_QUANTITY:
            const findItem = state.productsCart.find(item => item.id === action.payload);
            findItem.quantity += 1;
            let filterState = state.productsCart.filter(item => item.id !== findItem.id);
            filterState = [...filterState, findItem];
            return {
                ...state,
                productsCart:filterState
            }
        case DELETE_QUANTITY:
            const findItemToDelete = state.productsCart.find(item => item.id === action.payload);
            if(findItemToDelete.quantity > 1){
                findItemToDelete.quantity -= 1;
                let filterState = state.productsCart.filter(item => item.id !== findItemToDelete.id);
                filterState = [...filterState, findItemToDelete];
                return {
                    ...state,
                    productsCart:filterState
                }
            }else{
                let filterState = state.productsCart.filter(item => item.id !== findItemToDelete.id);
                return {
                    ...state,
                    productsCart:filterState
                }
            }
            



    
        default:
            return state;
    }
}

export default CartReducer;
