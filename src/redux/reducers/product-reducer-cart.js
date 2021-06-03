import {ADD_TO_CART, REMOVE_FROM_CART} from '../action-types';
const initialState = {
    productInCart: [],
}
export const productReducerCart = (state = initialState, action) => {
    switch (action.type){
        case ADD_TO_CART: {
            return {
                ...state,
                productInCart: [...state.productInCart, action.payload]
            }
        }
        case REMOVE_FROM_CART: {
            return {
                ...state,
                productInCart: state.productInCart.filter(el => action.payload !== el)
            }
        }
        default: {
            return state
        }
    }
}