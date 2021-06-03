import {
    ADD_TO_FAVORITE,
    REMOVE_FROM_FAVORITE
} from '../action-types'

const addToFavorite = (id) => ({type: ADD_TO_FAVORITE, payload: id});
const deleteFromFavorite = (id) => ({type: REMOVE_FROM_FAVORITE, payload: id});
const toggleItemInFavorite = (id) => (dispatch, getState) => {
    const { favorite: {productsInFavorite}} = getState();
    const alreadyExists = !!productsInFavorite.find(el => el === id);
    dispatch(alreadyExists ? deleteFromFavorite(id) : addToFavorite(id))
}
export {
    toggleItemInFavorite,
    addToFavorite,
    deleteFromFavorite,
}
