import { createSlice } from "@reduxjs/toolkit";

export const pinCodeSlice = createSlice({
  name: "pinCode",
  initialState: {
    pinCode: null,
  },
  reducers: {
    setPinCode(state, { payload }) {
      state.pinCode = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setPinCode } = pinCodeSlice.actions;

export default pinCodeSlice.reducer;
