import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./js/store/index";
import Desk from "./js/components/desk/Desk";
import './index.css';

render(
  <Provider store={store}>
    <Desk />
  </Provider>,
  document.getElementById("root")
);