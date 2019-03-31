import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


import {createStore, applyMiddleware } from 'redux';
import rootReducer from "./redux/rootReducer";
import {Provider} from "react-redux";

import reduxThunk from 'redux-thunk'

/*function loggerMiddleware(store) {
    return function (next) {
        return function (action) {
            const result = next(action)
            console.log('Middleware', result, store.getState())
            return result
        }
    }
}*/

const loggerMiddleware = store => next => action => {
    const result = next(action)
    console.log('Middleware', result, store.getState())
    return result
}


const store = createStore(rootReducer, applyMiddleware(loggerMiddleware, reduxThunk));

const app = (
    <Provider store = {store}>
        <App/>
    </Provider>);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
