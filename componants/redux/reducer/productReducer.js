import { ADD_PRODUCT, DELETE_PRODUCT, GET_PRODUCT } from "../actions/type";

export const ProductReducer = ( state = { product: [], addedProducts: [] }, action) => {

  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        product: [...state.product, action.payload],
      };

    case GET_PRODUCT:
      return {
        ...state,
        product: action.payload,
        addedProducts: action.payload,
      };

    case DELETE_PRODUCT:
      return {
        ...state,
        product: state.product.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};
