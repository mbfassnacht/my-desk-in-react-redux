import React, { Component } from 'react';
import './Tower.css';
import { turnOn, turnOff } from "../../actions/index";
import powerButton from '../../../svg/powerButton.svg';
import { connect } from "react-redux";
import classNames from 'classnames';

function mapDispatchToProps(dispatch) {
    return {
        turnOn: payload => dispatch(turnOn(payload)),
        turnOff: payload => dispatch(turnOff(payload))
    };
}

class ConnectedTower extends Component {

    constructor(props) {
        super(props);
        this.state = {
            powerOn: false,
        };
        this._toggleEnergie = this.toggleEnergie.bind(this);
    }

    toggleEnergie() {
        if (this.state.powerOn) {
            this.props.turnOff();
            this.setState({ powerOn: false });
        } else {
            this.props.turnOn();
            this.setState({ powerOn: true });
        }
    }

    render() {
        const lightClass = classNames('light', {
            'is-on': this.state.powerOn,
        });

        return (
            <div className="tower-component">
                <img src={powerButton} onClick={this._toggleEnergie} className="power-button" />
                <div className={lightClass} />
            </div>
        );
    }
}

const Tower = connect(
    null,
    mapDispatchToProps
)(ConnectedTower);

export default Tower;
