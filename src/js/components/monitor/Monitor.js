import React, { Component } from 'react';
import './Monitor.css';
import { connect } from "react-redux";
import powerButton from '../../../svg/powerButton.svg';
import classNames from 'classnames';
import cursorIcon from '../../../svg/cursor.svg';

const mapStateToProps = state => {
    return { 
        towerTurnedOn: state.turnedOn,
        cursorPosition: state.mousePosition,
    };
};

class ConnectedMonitor extends Component {

    constructor(props) {
        super(props);
        this._toggleOnOff = this.toggleOnOff.bind(this);
        this.state = {
            turnedOn: false,
        }
    }

    toggleOnOff() {
        if (this.state.turnedOn) {
            this.setState({ turnedOn: false });
        } else {
            this.setState({ turnedOn: true });
        }
    }

    renderScreen() {

        const screenClasses = classNames('screen', {
            'is-on': this.state.turnedOn,
            'is-off': !this.state.turnedOn,
            'has-connection': this.state.turnedOn && this.props.towerTurnedOn,
        });

        if ( this.state.turnedOn && !this.props.towerTurnedOn) {
            return (
                <div className={screenClasses}>
                    No input connection
                </div>
            );
        } else {
            return (
                <div className={screenClasses}>
                    <img style={this.calculateCursorPosition()} className="cursor" src={cursorIcon} />
                </div>
            );
        }
    }

    calculateCursorPosition() {
        
        let x = Math.max(0 - this.props.monitorDeadPixels, this.props.cursorPosition.x * this.props.monitorScale);
        let y = Math.max(0 - this.props.monitorDeadPixels, this.props.cursorPosition.y * this.props.monitorScale);

        x =  Math.min(this.props.screenWidth - this.props.cursorWidth - this.props.monitorDeadPixels, x);
        y =  Math.min(this.props.screenHeight - this.props.cursorHeight - this.props.monitorDeadPixels, y);

        const cursorStyle = {
            transform: `translate(${x}px, ${y}px)` 
        };

        return cursorStyle;

    }

    render() {
        const lightClass = classNames('light', {
            'is-red': this.state.turnedOn && !this.props.towerTurnedOn,
            'is-blue': this.state.turnedOn && this.props.towerTurnedOn,
        });

        return (
            <div className="monitor-component">
                {this.renderScreen()}
                <div className="monitor-buttons">
                    <div className={lightClass} />
                    <div className="power-button" onClick={this._toggleOnOff}>
                        <img src={powerButton} />
                    </div>
                </div>
                <div className="monitor-stand">
                    <div className="monitor-column" />
                    <div className="monitor-base" />
                </div>
            </div>
        );
    }
}

ConnectedMonitor.defaultProps = {
    cursorHeight: 24,
    cursorWidth: 24,
    screenWidth: 380,
    screenHeight: 200,
    monitorScale: 2,
    monitorDeadPixels: 10,
}


const Monitor = connect(
    mapStateToProps,
    null
)(ConnectedMonitor);

export default Monitor;