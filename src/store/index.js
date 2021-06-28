import { configureStore } from "@reduxjs/toolkit";

import leaveSlice from "./leave";
import techSlice from "./tech";

const store = configureStore({
  reducer: {
    leave: leaveSlice.reducer,
    tech: techSlice.reducer,
  },
});

export default store;
