import {ADD_TO_FAVORITE, REMOVE_FROM_FAVORITE} from '../action-types';
const initialState = {
    productInFavorite: []
}
export const productReducerFavorite = (state = initialState, action) => {
    switch (action.type){
        case ADD_TO_FAVORITE: {
            return {
                ...state,
                productInFavorite: [...state.productInFavorite, action.payload]
            }
        }
        case REMOVE_FROM_FAVORITE: {
            return {
                ...state,
                productInFavorite: state.productInFavorite.filter(el => action.payload !== el)
            }
        }
        default: {
            return state
        }
    }
}
