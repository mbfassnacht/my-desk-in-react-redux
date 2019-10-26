import React, { Component } from 'react';
import Camera from '../camera/Camera';
import Keyboard from '../keyboard/Keyboard';
import Mouse from '../mouse/Mouse';
import Monitor from '../monitor/Monitor';
import Speaker from '../speaker/Speaker';
import Tower from '../tower/Tower';
import './Desk.css';

class Desk extends Component {
    render() {
        return (
            <div className="desk-component">
                <Monitor />
                <Tower />
                <Keyboard />
                <Mouse />
                <Speaker />
                <Speaker />
                <Camera />
            </div>
        );
    }
}

export default Desk;
