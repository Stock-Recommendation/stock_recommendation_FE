import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 20,
  popupOpen: false,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increase: (state) => {
      state.count++;
    },
    decrease: (state) => {
      state.count--;
    },
    setPopup: (state, action) => {
      state.popupOpen = action.payload;
      sessionStorage["popup-flag"] = true;
    },
  },
});

export const { increase, decrease, setPopup } = counterSlice.actions;

export default counterSlice.reducer;
