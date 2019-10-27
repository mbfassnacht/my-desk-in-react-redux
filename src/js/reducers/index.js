import { KEY_CONSUMED, KEY_PRESS, MOVE_MOUSE, TURN_OFF, TURN_ON } from "../constants/action-types";

const initialState = {
    turnedOn: false,
    mousePosition: { x: 80, y: 20 },
    keysPressed: ''
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

    if (action.type === KEY_PRESS) {
        if (state.turnedOn) {
            return Object.assign({}, state, {
                keysPressed:  action.payload
            });
        }
    }

    if (action.type === KEY_CONSUMED) {
        return Object.assign({}, state, {
            keysPressed: ''
        }); 
    }
    
    return state;
}

export default rootReducer;