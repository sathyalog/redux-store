import * as types from './constants';
import {combineReducers} from 'redux';

const initialState = {
    items:[]
}

const addToCart = (state=initialState,action) => {
    switch(action.type) {
        case types.ADD_TO_CART:
            const quantity = 1;
            const item = {
                ...action.val,
                quantity
                };
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

const setQuantity = (state=1,action) => {
    const quantity = action.quantity ? action.quantity: 1;
    switch(action.type) {
        case types.SET_QUANTITY:
            const product= {
                ...action.val,
                quantity
            }
            return {
                product  
            }
        default:
            return state
    }
}

const reducer = combineReducers({
    addToCart,
    welcomeMsg,
    setQuantity
});

export default reducer;

