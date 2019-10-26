import { TURN_OFF, TURN_ON } from "../constants/action-types";

export function turnOn(payload) {
    return { type: TURN_ON, payload };
}

export function turnOff(payload) {
    return { type: TURN_OFF, payload };
}