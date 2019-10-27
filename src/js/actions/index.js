import { TURN_OFF, TURN_ON, MOVE_MOUSE } from "../constants/action-types";

export function turnOn(payload) {
    return { type: TURN_ON, payload };
}

export function turnOff(payload) {
    return { type: TURN_OFF, payload };
}

export function moveMouse(payload) {
    return { type: MOVE_MOUSE, payload };
}