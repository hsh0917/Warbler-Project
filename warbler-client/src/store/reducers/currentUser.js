import { SET_CURRENT_USER } from "../actionTypes";

const DEFAULT_STATE = {
    isAuthenticated: false, // hopefully be true, when logged in
    user: {} // All the user info when logged in
}

export default ( state= DEFAULT_STATE, action ) => {
    switch (action.type) {
        case SET_CURRENT_USER:
         return {
             // turn empty object into false of if there are key, true.
            isAuthenticated: Object.keys(action.user).length > 0,  // if the user is authenticated, there's more than one key inside of user which means that length is going to be greater than zero.
            user: action.user
        }
         default: 
            return state;
    }
}