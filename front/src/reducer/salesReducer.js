import {
    ALL_SALES_REQUEST,
    ALL_SALES_SUCCESS,
    ALL_SALES_FAILURE,
    CLEAR_ERRORS
} from "../constants/salesConstants";

export const salesReducer = (state = { sales: [] }, action) => {
    switch (action.type) {
        case ALL_SALES_SUCCESS:
            return {
                loading: true,

            }
    }
}