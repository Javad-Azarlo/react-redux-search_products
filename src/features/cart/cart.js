import { createSlice } from "@reduxjs/toolkit";
import { totlaReduce, countReduce } from "../../services/helper";
const initialState = {
  item: [],
  count: 0,
  totla: 0,
  check: false,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      if (!state.item.find((item) => item.id === action.payload.id)) {
        state.item.push({ ...action.payload, quantity: 1 });
        state.count = countReduce(state.item);
        state.totla = totlaReduce(state.item);
        state.check = false;
      }
    },
    removeItem: (state, action) => {
      const newItem = state.item.filter(
        (item) => item.id !== action.payload.id
      );
      state.item = newItem;
      state.count = countReduce(state.item);
      state.totla = totlaReduce(state.item);
      state.check = false;
    },
    inCrese: (state, action) => {
      const index = state.item.findIndex(
        (item) => item.id === action.payload.id
      );
      state.item[index].quantity++;
      state.count = countReduce(state.item);
      state.totla = totlaReduce(state.item);
      state.check = false;
    },
    deCrese: (state, action) => {
      const index = state.item.findIndex(
        (item) => item.id === action.payload.id
      );
      state.item[index].quantity--;
      state.count = countReduce(state.item);
      state.totla = totlaReduce(state.item);
      state.check = false;
    },
    checkOut: (state, action) => {
      state.item = [];
      state.count = 0;
      state.totla = 0;
      state.check = true;
    },
  },
});
export default cartSlice.reducer;
export const { addItem, removeItem, inCrese, deCrese, checkOut } =
  cartSlice.actions;
