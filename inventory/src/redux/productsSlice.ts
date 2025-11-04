import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { Product } from "../types/Product";
import { api } from "../services/api";

interface ProductsState {
  list: Product[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductsState = {
  list: [],
  loading: false,
  error: null,
};

export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
  const response = await api.get<Product[]>("products?select=*&order=id.desc");
  return response.data;
});

export const createProduct = createAsyncThunk(
  "products/createProduct",
  async (newProduct: Omit<Product, "id" | "created_at">) => {
    const response = await api.post<Product[]>("products", newProduct);
    return response.data[0];
  }
);

export const updateProduct = createAsyncThunk("products/updateProduct", async (product: Product) => {
  const response = await api.put<Product[]>(`products?id=eq.${product.id}`, product);
  return response.data[0];
});

export const deleteProduct = createAsyncThunk("products/deleteProduct", async (productId: string) => {
  await api.delete(`products?id=eq.${productId}`);
  return productId;
});

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // FETCH
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Error al cargar productos";
      })
      // CREATE
      .addCase(createProduct.fulfilled, (state, action) => {
        state.list.unshift(action.payload);
      })
      // UPDATE
      .addCase(updateProduct.fulfilled, (state, action) => {
        const i = state.list.findIndex((p) => p.id === action.payload.id);
        if (i !== -1) state.list[i] = action.payload;
      })
      // DELETE
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.list = state.list.filter((p) => p.id !== action.payload);
      });
  },
});

export default productsSlice.reducer;
