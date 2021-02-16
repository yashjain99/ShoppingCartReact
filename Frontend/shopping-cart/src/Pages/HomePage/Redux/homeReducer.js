import {
    GET_ALL_PRODUCTS_REQUEST,
    GET_ALL_PRODUCTS_SUCCESS,
    GET_ALL_PRODUCTS_FAILURE
} from "./actionTypes";

const initState = {
    loading: false,
    error: false,
    allProducts: []
}

export const homeReducer = (state = initState, { type, payload }) => {
    console.log(type, payload)
    switch(type) {
        case GET_ALL_PRODUCTS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_ALL_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                allProducts: payload
            }
        case GET_ALL_PRODUCTS_FAILURE:
            return {
                ...state,
                error: true
            }
        default:
            return state
    }
}