import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../services/cofig";

const initialState = {
  loading: false,
  data: [],
  error: "",
};
const fetchData = createAsyncThunk("products/fetchData", () => {
  return api.get("/products");
});
const productSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (Builder) => {
    Builder.addCase(fetchData.pending , (state) => {
      state.loading = true
    });
    Builder.addCase(fetchData.fulfilled , (state , action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = '';
    });
    Builder.addCase(fetchData.rejected , (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.error.message
    })
  },
});
export default productSlice.reducer;
export {fetchData}