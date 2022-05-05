import {
  FETCH_Products_DETAILS_REQUEST,
  FETCH_Products_DETAILS_SUCCESS,
  FETCH_Products_DETAILS_FAILURE,
} from "./type";

import axios from "axios";
// import { products } from "../../products";

export const fetchProductDetailsRequest = () => {
  return {
    type: FETCH_Products_DETAILS_REQUEST,
  };
};

const fetchProductDetailsSuccess = (products) => {
  return {
    type: FETCH_Products_DETAILS_SUCCESS,
    payload: products,
  };
};

const fetchProductDetailsFailure = (error) => {
  return {
    type: FETCH_Products_DETAILS_FAILURE,
    payload: error,
  };
};

export const fetchProductDetails = (id) => {
  return (dispatch) => {
    dispatch(fetchProductDetailsRequest);

    // axios
    //   .get(`http://localhost:5000/products/${id}`)
    axios
      .get(`https://fakestoreapi.com/products/${id}`)

      .then((res) => {
        const products = res.data;
        dispatch(fetchProductDetailsSuccess(products, " redux products"));
      })

      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchProductDetailsFailure(errorMsg));
      });
  };
};
