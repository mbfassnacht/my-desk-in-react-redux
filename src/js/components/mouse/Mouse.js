import React, { Component } from 'react';
import './Mouse.css';
import { connect } from "react-redux";
import { moveMouse } from "../../actions/index";
import Draggable from 'react-draggable';

const mapStateToProps = state => {
    return { 
        mousePosition: state.mousePosition,
    };
};

function mapDispatchToProps(dispatch) {
    return {
        moveMouse: payload => dispatch(moveMouse(payload)),
    };
}

class ConnectedMouse extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            startPosition : {
                x: this.props.mousePosition.x, 
                y: this.props.mousePosition.y
            },
            position : {
                x: this.props.mousePosition.x, 
                y: this.props.mousePosition.y
            }
        };

        this._handleDrag = this.handleDrag.bind(this);
    }

    handleDrag(event, position) {
        const nextPosition = {
            x: position.x, 
            y: position.y,
        };

        this.setState({ position: nextPosition });
        this.props.moveMouse(nextPosition);
    }

    render() {

        return (
            <div className="mouse-component">
                <Draggable
                onDrag={this._handleDrag}
                defaultPosition = {this.state.startPosition}
                position={this.state.position}
                >
                    <div className="effective-mouse">
                        <div className="button is-left" />
                        <div className="button is-right" />
                    </div>
                </Draggable>
            </div>
        );
    }
}

const Mouse = connect(
    mapStateToProps,
    mapDispatchToProps,
)(ConnectedMouse);

export default Mouse;