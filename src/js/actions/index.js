import { KEY_CONSUMED, KEY_PRESS, MOVE_MOUSE, TURN_OFF, TURN_ON } from "../constants/action-types";

export function keyConsumed(payload) {
    return { type: KEY_CONSUMED, payload };
}

export function keyPress(payload) {
    return { type: KEY_PRESS, payload };
}

export function moveMouse(payload) {
    return { type: MOVE_MOUSE, payload };
}

export function turnOff(payload) {
    return { type: TURN_OFF, payload };
}

export function turnOn(payload) {
    return { type: TURN_ON, payload };
}