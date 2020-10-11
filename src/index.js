import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const inputReducer = (state = { feelingInput: null, understandingInput: null, supportInput: null, commentInput: '' }, action) => {
    if (action.type === 'RECIEVE_INPUT') {
        return action.payload;
    }
    if (action.type === 'RESET_INPUT') {
        return { feelingInput: null, understandingInput: null, supportInput: null, commentInput: '' }
    }
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