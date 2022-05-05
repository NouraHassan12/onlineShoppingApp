import { combineReducers } from "redux";
import ProductsReducer from "./ProductsList/Reducer";
import cartReducer from "./Cart/Cart";
import wishListReducer from "./WishList/wishListReducer";
import productDetailsReducer from "./ProductDetails/reducer";

const rootReducer = combineReducers({
  products: ProductsReducer,
  cart: cartReducer,
  wishList: wishListReducer,
  productDtails: productDetailsReducer,
});

export default rootReducer;
