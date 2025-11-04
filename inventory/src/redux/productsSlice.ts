import { createSlice } from "@reduxjs/toolkit";
import type { Product } from "../types/Product";

interface ProductsState {
  list: Product[];
}

const initialState: ProductsState = {
  list: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;