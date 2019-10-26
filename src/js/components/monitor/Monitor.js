import React, { Component } from 'react';
import './Monitor.css';
import { connect } from "react-redux";
import powerButton from '../../../svg/powerButton.svg';
import classNames from 'classnames';

const mapStateToProps = state => {
    return { towerTurnedOn: state.turnedOn };
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
                <div className={screenClasses} />
            );
        }
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

const Monitor = connect(
    mapStateToProps,
    null
)(ConnectedMonitor);

export default Monitor;