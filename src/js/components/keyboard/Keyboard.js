import React, { Component } from 'react';
import './Keyboard.css';
import { keyPress } from "../../actions/index";
import { connect } from "react-redux";

function mapDispatchToProps(dispatch) {
    return {
        keyPress: payload => dispatch(keyPress(payload)),
    };
}

class ConnectedKeyboard extends Component {

    constructor(props) {
        super(props);

        this._onPressKey = this.onPressKey.bind(this);
    }

    onPressKey(event) {
        const value = event.currentTarget.getAttribute('value');
        this.props.keyPress(value);
    }

    render() {
        return (
            <div className="keyboard-component">
                {
                    this.props.keysMap.map((row, index) => {
                        return (<ul key={`row-${index}`} className="keys-row">
                            {
                                row.map((key, index) => {
                                    return(
                                        <li onClick={this._onPressKey} value={key.value} key={`key-${index}`} className={`key is-${key.size}`}>
                                            {key.value}
                                        </li>
                                    )
                                })
                            }
                        </ul>)
                    })
                }
            </div>
        );
    }
}

ConnectedKeyboard.defaultProps = {
    keysMap: [
        [
            { value: '1', size: 'small' },
            { value: '2', size: 'small' },
            { value: '3', size: 'small' },
            { value: '4', size: 'small' },
            { value: '5', size: 'small' },
            { value: '6', size: 'small' },  
            { value: '7', size: 'small' },  
            { value: '8', size: 'small' },  
            { value: '9', size: 'small' },  
            { value: '0', size: 'small' },  
            { value: 'delete', size: 'medium' },
        ],
        [
            { value: 'Q', size: 'small' },
            { value: 'W', size: 'small' },
            { value: 'E', size: 'small' },
            { value: 'R', size: 'small' },
            { value: 'T', size: 'small' },
            { value: 'Y', size: 'small' },  
            { value: 'U', size: 'small' },  
            { value: 'I', size: 'small' },  
            { value: 'O', size: 'small' },  
            { value: 'P', size: 'small' },  
        ],
        [
            { value: 'A', size: 'small' },
            { value: 'S', size: 'small' },
            { value: 'D', size: 'small' },
            { value: 'F', size: 'small' },
            { value: 'G', size: 'small' },
            { value: 'H', size: 'small' },  
            { value: 'J', size: 'small' },  
            { value: 'K', size: 'small' },  
            { value: 'L', size: 'small' },  
            { value: 'return', size: 'medium', realValue: '/n' },  
        ],
        [
            { value: 'Z', size: 'small' },
            { value: 'X', size: 'small' },
            { value: 'C', size: 'small' },
            { value: 'V', size: 'small' },
            { value: 'B', size: 'small' },
            { value: 'N', size: 'small' },  
            { value: 'M', size: 'small' },  
            { value: ',', size: 'small' },  
            { value: '.', size: 'small' },  
            { value: '/', size: 'small' },  
        ],
        [ { value: 'space', size: 'large', realValue: '/n' } ],
    ],
}

const Keyboard = connect(
    null,
    mapDispatchToProps,
)(ConnectedKeyboard);

export default Keyboard;
