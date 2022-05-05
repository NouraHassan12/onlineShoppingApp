import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  wishListItems: localStorage.getItem("wishListItem")
    ? JSON.parse(localStorage.getItem("wishListItem"))
    : [],
  wishListTotalQuantity: 0,
};

const wishListReducer = createSlice({
  name: "wishList",
  initialState,
  reducers: {
    addToWishList(state, action) {
      const itemIndex = state.wishListItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.wishListItems[itemIndex].wishListTotalQuantity += 1;
        toast.info(
          `${state.wishListItems[itemIndex].title} Already in the WishList`,
          {
            position: "top-right",
          }
        );
      } else {
        const tempProduct = { ...action.payload, wishListTotalQuantity: 1 };
        state.wishListItems.push(tempProduct);
        toast.success(`${action.payload.title} Added to the WishList`, {
          position: "top-right",
        });
      }
      localStorage.setItem("wishListItem", JSON.stringify(state.wishListItems));
    },

    removeFromWishList(state, action) {
      const remainingItems = state.wishListItems.filter(
        (wishListItem) => wishListItem.id !== action.payload.id
      );
      state.wishListItems = remainingItems;
      localStorage.setItem("wishListItem", JSON.stringify(state.wishListItems));
      toast.error(`${action.payload.title} removed from wishList`, {
        position: "top-right",
      });
    },

    clearWishList(state, action) {
      state.wishListItems = [];
      localStorage.setItem("wishListItem", JSON.stringify(state.wishListItems));
      toast.error("wishlistt cleared", { position: "top-right" });
    },
  },
});

export const { addToWishList, removeFromWishList, clearWishList } =
  wishListReducer.actions;
export default wishListReducer.reducer;
