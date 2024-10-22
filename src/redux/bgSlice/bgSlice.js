import { createSlice } from "@reduxjs/toolkit";

export const bgSlice = createSlice({
  name: "bg",
  initialState: {
    bg: null,
  },
  reducers: {
    setBg(state, { payload }) {
      state.bg = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setBg } = bgSlice.actions;

export default bgSlice.reducer;
