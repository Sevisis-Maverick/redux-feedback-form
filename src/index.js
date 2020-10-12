import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const inputReducer = (state = [], action) => {
    if (action.type === 'RECIEVE_INPUT') {
        return [...state, action.payload];
    }
    if (action.type === 'RESET_INPUTS') {
        return state = [];
    }

    // { feelingInput: null, understandingInput: null, supportInput: null, commentInput: '' }

    // if (action.type === 'RESET_FEELING') {
    //     return { feelingInput: null, understandingInput: null, supportInput: null, commentInput: '' }
    // }
    // if (action.type === 'RESET_UNDERSTANDING') {
    //     return { understandingInput: null }
    // }
    // if (action.type === 'RESET_SUPPORT') {
    //     return { supportInput: null }
    // }
    // if (action.type === 'RESET_COMMENT') {
    //     return { commentInput: '' }
    // }
    return state;
}

const store = createStore(
    combineReducers({
        inputReducer,
    }),
    applyMiddleware(logger),
)

ReactDOM.render(<Provider store={store}> <App /> </Provider>, document.getElementById('root'));
registerServiceWorker();

// ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));