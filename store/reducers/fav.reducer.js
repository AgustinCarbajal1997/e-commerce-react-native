import { ADD_FAV } from "../actions/fav.action";

const INITIAL_STATE = {
    productsFavs: []
}

const FavsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_FAV:
            const findItem = state.productsFavs.find(item => item.id === action.payload.id);
            if(findItem){
                const deleteFav = state.productsFavs.filter(item => item.id !== findItem.id);
                return {
                    ...state,
                    productsFavs:deleteFav
                }
            }else{
                return {
                    ...state,
                    productsFavs:[...state.productsFavs,action.payload]
                }
            }
            
    
        default:
            return state;
    }
}
export default FavsReducer;