import { TURN_ON, TURN_OFF } from "../constants/action-types";

const initialState = {
    turnedOn: false,
};

function rootReducer(state = initialState, action) {

    if (action.type === TURN_ON) {
        return Object.assign({}, state, {
            turnedOn: true
        });
    }

    if (action.type === TURN_OFF) {
        return Object.assign({}, state, {
            turnedOn: false
        });
    }
    
    return state;
}

export default rootReducer;