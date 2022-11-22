import { ActionType } from "../constands/action-types"
export const setProduct = (products) => {
    return {
        type: ActionType.SET_PRODUCT,
        payload: products,

    };
};
export const selectedProducts = (product) => {
    return {
        type: ActionType.SELECTED_PRODUCT,
        payload: product,

    };
};