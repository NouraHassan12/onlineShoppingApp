import {
  FETCH_Products_LIST_REQUEST,
  FETCH_Products_LIST_SUCCESS,
  FETCH_Products_LIST_FAILURE,
} from "./Type";

import axios from "axios";
// import { products } from "../../products";

export const fetchProductsRequest = () => {
  return {
    type: FETCH_Products_LIST_REQUEST,
  };
};

const fetchProductsSuccess = (products) => {
  return {
    type: FETCH_Products_LIST_SUCCESS,
    payload: products,
  };
};

const fetchProductsFailure = (error) => {
  return {
    type: FETCH_Products_LIST_FAILURE,
    payload: error,
  };
};

export const fetchProducts = () => {
  return (dispatch) => {
    dispatch(fetchProductsRequest);

    // axios
    //   .get("http://localhost:5000/products")
    axios
      .get("https://fakestoreapi.com/products")

      .then((res) => {
        const products = res.data;
        dispatch(fetchProductsSuccess(products, " redux products"));
      })

      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchProductsFailure(errorMsg));
      });
  };
};
