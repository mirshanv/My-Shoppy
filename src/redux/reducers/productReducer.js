import { ActionType } from "../constands/action-types";

const initialState = {
    products: []
};
export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionType.SET_PRODUCT:
            return { ...state, products: payload };
        default:
            return state;
    }

}
export const selectedproductReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case ActionType.SELECTED_PRODUCT:
            return { ...state, ...payload };
        default:
            return state;
    }

}