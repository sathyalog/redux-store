import * as types from './constants';

export const addToCart = (val) => {
    return {
        type: types.ADD_TO_CART,
        val
    }
}

export const welcomeMsg = () => {
    return {
        type: types.MESSAGE,
        val: 'Hello! Welcome to Redux Vegetable Store.'
    }
}