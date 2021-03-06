import * as types from './constants';
import {combineReducers} from 'redux';

const initialState = {
    items:[]
}

const step1FormState = {
    firstName:'',
    lastName: '',
}

const step2FormState = {
    addressLine1:'',
    addressLine2: '',
    city:'',
    state:'',
    zip:''
}

const formInitialState = [
    {
        step1FormState,
        step2FormState
    }
    
]

const addToCart = (state=initialState,action) => {
    switch(action.type) {
        case types.ADD_TO_CART:
            let quantity = 1;
            const product = action.val;
            product.quantity = quantity;
            let duplicate = state.items.find(prod => product.id === prod.id);
            console.log(duplicate)
            quantity = duplicate && duplicate.id ? quantity+1 : quantity;
            const item = {
                ...action.val,
                quantity
            };
            const items = [
                ...state.items,
                item
            ];
            
            const index = items.indexOf(duplicate);
            if (index > -1) {
                items.splice(index, 1);
            }

            return {
                items
            }
        case types.REMOVE_FROM_CART:
            {
                const removeItem = action.val;
                const cartItems = [...state.items];
                let items = cartItems.filter( prod => prod.id !== removeItem.id ); 
                return {
                    items
                }
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

const productTotal = (state=0,action) => {
    const productTotal = action.val;
    switch(action.type) {
        case types.PRODUCT_TOTAL:
            const product= {
                ...action.prod,
                productTotal
            }
            return {
                product  
            }
        default:
            return state
    }
}

const getFormData = (state={},action) => {
    switch(action.type) {
        case types.GET_FORMDATA:
            return { ...state, loading: true };
        case types.GET_FORMDATA_RECEIVED:
            return { ...state, formjson: action.data, loading: false }
        default:
            return state;
    }
}

const getAllProducts = (state={},action) => {
    switch(action.type) {
        case types.GET_PRODUCTS:
            return { ...state, loading: true };
        case types.PRODUCTS_RECEIVED:
            return { ...state, data: action.data, loading: false }
        default:
            return state;
    }
}


const updateForms = (state=formInitialState,action) => {
    switch(action.type){
        case types.UPDATE_FIELDS:
            const val = action.val;
            if(action.elem.name === 'firstName') {
                step1FormState.firstName = val.firstName
            } 
            if(action.elem.name === 'lastName') {
                step1FormState.lastName = val.lastName
            }
            if(action.elem.name === 'addressLine1') {
                step2FormState.addressLine1 = val.addressLine1
            } 
            if(action.elem.name === 'addressLine2') {
                step2FormState.addressLine2 = val.addressLine2
            }
            if(action.elem.name === 'city') {
                step2FormState.city = val.city
            } 
            if(action.elem.name === 'state') {
                step2FormState.state = val.state
            }
            if(action.elem.name === 'zip') {
                step2FormState.zip = val.zip
            }
            return {
                step1FormState,
                step2FormState
            }
        default:
            return state;
    }
}

const formSubmitted = (state='',action) => {
    switch(action.val) {
        case types.FORM_SUBMITTED:
            return action.val;
        default:
            return state;
    }
}


const reducer = combineReducers({
    addToCart,
    welcomeMsg,
    setQuantity,
    productTotal,
    getFormData,
    updateForms,
    formSubmitted,
    getAllProducts
});

export default reducer;

