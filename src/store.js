import {createStore, compose, applyMiddleware} from 'redux';
import rootReducer from './reducer';
import createSagaMiddleware from 'redux-saga';
import formSaga from './formSaga';
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

// const rootReducer = () => ({
//     'message': 'Hello! Welcome to Redux Vegetable Store.'
// });

const store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(formSaga);
export default store;