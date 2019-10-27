import { MOVE_MOUSE, TURN_ON, TURN_OFF } from "../constants/action-types";

const initialState = {
    turnedOn: false,
    mousePosition: { x: 80, y: 20 } 
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

    if (action.type === MOVE_MOUSE) {
        return Object.assign({}, state, {
            mousePosition: action.payload
        });
    }
    
    return state;
}

export default rootReducer;