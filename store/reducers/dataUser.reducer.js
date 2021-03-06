import { GET_DATA_USER, POST_DATA_USER } from "../actions/dataUser.action";



const INITIAL_STATE = {}


const DataUserReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_DATA_USER:
            
            const filterUser = action.payload.find(item => item.userId === action.userId);
            
            if(!filterUser) return state;
            return {
                ...state,
                name:filterUser.name,
                phone:filterUser.phone,
                age:filterUser.age,
                userId:filterUser.userId
            }
        case POST_DATA_USER:
            return {
                
                name:action.payload.name,
                phone:action.payload.phone,
                age:action.payload.age,
                userId:action.payload.userId
            }
            
    
        default:
            return state;
    }
}

export default DataUserReducer;