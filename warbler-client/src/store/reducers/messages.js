import { LOAD_MESSAGES, REMOVE_MESSAGES } from "../actionTypes";

/**
* @param {Object} state - Default application state
* @param {Object} action - Action from action creator
* @returns {Object} New state
*/
export default (state = [], action) => {
    switch (action.type) {
        case LOAD_MESSAGES:
            return [ ...action.messages ];
        case REMOVE_MESSAGES:
            return state.filter(message => message._id !== action.id)
        default: 
            return state;
    }
};  