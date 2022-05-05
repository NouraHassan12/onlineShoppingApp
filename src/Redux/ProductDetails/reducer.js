import {
  FETCH_Products_DETAILS_REQUEST,
  FETCH_Products_DETAILS_SUCCESS,
  FETCH_Products_DETAILS_FAILURE,
} from "./type";

const initialState = {
  loading: false,
  product: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_Products_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_Products_DETAILS_SUCCESS:
      return {
        loading: false,
        product: action.payload,
        error: "",
      };

    case FETCH_Products_DETAILS_FAILURE:
      return {
        loading: false,
        product: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
