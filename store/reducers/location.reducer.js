import { GET_LOCATION } from "../actions/location.action";

const INITIAL_STATE = {
    messageLocation:null
}

const UserLocation = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_LOCATION:
            return { messageLocation:action.payload }
            
        default:
            return state;
    }
}
export default UserLocation;
    