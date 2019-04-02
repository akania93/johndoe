import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from './components/App';
import store from "./store";
import { Provider } from "react-redux";
import * as serviceWorker from './serviceWorker';
import "./sass/app.scss"

console.info("INITIAL store > index.js: ", store.getState())

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();