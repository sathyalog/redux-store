import * as types from './constants';
import {combineReducers} from 'redux';

const initialState = {
    items:[]
}

const addToCart = (state=initialState,action) => {
    switch(action.type) {
        case types.ADD_TO_CART:
            const item = action.val;
            const items = [
                ...state.items,
                item
            ];

            return {
                items
            }
        default:
            return state
    }
}

const welcomeMsg = (state='',action) => {
    switch(action.type) {
        case types.MESSAGE:
            return action.val
        default:
            return state
    }
}

const reducer = combineReducers({
    addToCart,
    welcomeMsg
});

export default reducer;

