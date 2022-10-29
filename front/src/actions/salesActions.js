import axios from "axios";
import { ALL_PRODUCTS_SUCCESS } from "../constants/productConstants";

import {
    ALL_SALES_REQUEST,
    ALL_PRODUCTS_REQUEST,
    ALL_SALES_FAILURE,
    CLEAR_ERRORS
} from '../constants/salesConstants';

export const getSales = () => async(dispatch) => {
    try {
        const { data } = await axios.get('api/productos')

        dispatch({
            type: ALL_PRODUCTS_SUCCESS,
            payload: true
        })

    } catch (error) {
        dispatch({
            type: ALL_PRODUCTS_REQUEST,
            payload: error.response.data.message
        })
    }

}



export const clearErrors = () => async(dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}