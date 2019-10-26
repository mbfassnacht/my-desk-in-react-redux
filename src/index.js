import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./js/store/index";
import Desk from "./js/components/desk/Desk";
import './index.css';

render(
    <Provider store={store}>
        <a href="https://github.com/mbfassnacht/my-desk-in-react-redux">
            <img 
                style={{position: 'absolute', top: 0, left: 0, border: 0}} 
                src="https://s3.amazonaws.com/github/ribbons/forkme_left_green_007200.png" 
                alt="Fork me on GitHub" 
                />
        </a>
        <Desk />
    </Provider>,
    document.getElementById("root")
);