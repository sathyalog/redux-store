import * as types from './constants';

export const addToCart = (val) => {
    return {
        type: types.ADD_TO_CART,
        val
    }
}

export const removeFromCart = (val) => {
    return {
        type: types.REMOVE_FROM_CART,
        val
    }
}

export const welcomeMsg = () => {
    return {
        type: types.MESSAGE,
        val: 'Hello! Welcome to Redux Vegetable Store.'
    }
}

export const setQuantity = (quantity,val) => {
    return {
        type: types.SET_QUANTITY,
        quantity,
        val
    }
}

export const productTotal = (prod,val) => {
    return {
        type: types.PRODUCT_TOTAL,
        prod,
        val
    }
}

export const getFormData = () => {
    return {
        type: types.GET_FORMDATA
    }
}

export const getAllProducts = () => {
    return {
        type: types.GET_PRODUCTS
    }
}

export const updateFormFields = (val,elem) => {
    return {
        type: types.UPDATE_FIELDS,
        val,
        elem
    }
}

export const formSubmit = (val) => {
    return {
        type: types.FORM_SUBMITTED,
        val
    }
}
