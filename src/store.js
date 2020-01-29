import {createStore, compose, applyMiddleware} from 'redux';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = () => ({
    'message': 'Hello! Welcome to Redux Vegetable Store.'
});

const store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware()),
);

export default store;