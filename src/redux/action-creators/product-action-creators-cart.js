import {
    ADD_TO_CART,
    REMOVE_FROM_CART
} from '../action-types'

const addToCart = (id) => ({type: ADD_TO_CART, payload: id});
const deleteFromCart = (id) => ({type: REMOVE_FROM_CART, payload: id});
const toggleItemInCart = (id) => (dispatch, getState) => {
    const { cart: {productsInCart}} = getState();
    const alreadyExists = !!productsInCart.find(el => el === id);
    dispatch(alreadyExists ? deleteFromCart(id) : addToCart(id))
}
export {
    toggleItemInCart,
    addToCart,
    deleteFromCart
}