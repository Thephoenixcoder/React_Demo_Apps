import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../src/components/app/App';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers';
import thunk from "redux-thunk";
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

import {
    BrowserRouter as Router,

} from "react-router-dom";


const store = createStore(reducers, applyMiddleware(thunk))

console.log(store.getState())
ReactDOM.render(

    <Provider store={store}>
        <Router >
            <App />
        </Router>
    </Provider>

    , document.getElementById('root'));


