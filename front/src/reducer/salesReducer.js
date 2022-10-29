import {
    ALL_SALES_REQUEST,
    ALL_SALES_SUCCESS,
    ALL_SALES_FAILURE,
    CLEAR_ERRORS
} from "../constants/salesConstants";

export const salesReducer = (state = { sales: [] }, action) => {
    switch (action.type) {
        case ALL_SALES_REQUEST:
            return {
                loading: true,
                sales: []
            }

        case ALL_SALES_SUCCESS:
            return {
                loading: false,
                sales: action.payload.sales,
                count: action.payload.count
            }

        case ALL_SALES_FAILURE:
            return {
                loading: false,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        default:
            return state;
    }
}