import {
  FETCH_Products_LIST_REQUEST,
  FETCH_Products_LIST_SUCCESS,
  FETCH_Products_LIST_FAILURE,
} from "./Type";

const initialState = {
  loading: false,
  products: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_Products_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_Products_LIST_SUCCESS:
      return {
        loading: false,
        products: action.payload,
        error: "",
      };

    case FETCH_Products_LIST_FAILURE:
      return {
        loading: false,
        products: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
