import React, { PureComponent } from 'react';
import './TextEditor.css';
import { connect } from "react-redux";
import { keyConsumed } from "../../actions/index";
import classNames from 'classnames';

const mapStateToProps = state => {
    return { 
        keysPressed: state.keysPressed,
    };
};

function mapDispatchToProps(dispatch) {
    return {
        keyConsumed: payload => dispatch(keyConsumed(payload)),
    };
}

class ConnectedTextEditor extends PureComponent {

    constructor(props) {
        super(props);  

        this.state = {
            text: '',
        }
    }

    processNewEntry() {
        let text = this.state.text;

        switch(this.props.keysPressed) {
            case 'delete':
                text = text.substring(0, text.length - 1 );
                break;
            case 'return':
                text += '\n\r';
                break;
            case 'space':
                text += ' ';
                break;
            default:
                text += this.props.keysPressed;
        }
      
        this.props.keyConsumed();
        this.setState({text});
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.keysPressed.length > 0) {
            this.processNewEntry();
        }
    }

    render() {

        const screenClasses = classNames('text-editor-component', {
            'is-hidden': this.props.isHidden,
        });

        return (
            <div className={screenClasses}>
                <div className="top-bar"></div>
                <div className="text-editor-content">
                    { this.state.text }
                </div>
            </div>
        );
    }
}

const TextEditor = connect(
    mapStateToProps,
    mapDispatchToProps
)(ConnectedTextEditor);

export default TextEditor;