import { configureStore } from "@reduxjs/toolkit";

import bg from "./bgSlice/bgSlice";
import pinCode from "./pinCodeSlice/pinCodeSlice";

export const store = configureStore({
  reducer: {
    bg,
    pinCode,
  },
});
