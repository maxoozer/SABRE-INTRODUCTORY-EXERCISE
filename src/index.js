import React from 'react';
import ReactDOM from 'react-dom';
import {FootBallPlayersFinder} from './modules/football-players-finder/pages';
import * as serviceWorker from './serviceWorker';
import 'typeface-roboto';
import store from "./store";
import {Provider} from "react-redux";

ReactDOM.render(
    <Provider store={store}>
        <FootBallPlayersFinder />
    </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
