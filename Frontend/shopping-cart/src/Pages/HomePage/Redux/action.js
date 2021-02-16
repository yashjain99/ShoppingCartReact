import axios from "axios";
import {
    GET_ALL_PRODUCTS_REQUEST,
    GET_ALL_PRODUCTS_SUCCESS,
    GET_ALL_PRODUCTS_FAILURE
} from "./actionTypes";

const getAllProductsRequest = () => {
    return {
        type: GET_ALL_PRODUCTS_REQUEST
    }
}

const getAllProductsSuccess = (payload) => {
    return {
        type: GET_ALL_PRODUCTS_SUCCESS,
        payload
    }
}

const getAllProductsFailure = (error) => {
    return {
        type: GET_ALL_PRODUCTS_FAILURE,
        payload: error
    }
}

export const fetchAllProductDetails = () => dispatch => {
    dispatch(getAllProductsRequest());

    axios.get("http://localhost:8000/products")
        .then((res) => {
            console.log("All Products Home Page", res.data)
            dispatch(getAllProductsSuccess(res.data))
        })
        .catch((err) => {
            console.log("Error while fetch all product data", err)
            dispatch(getAllProductsFailure(err))
        })
}