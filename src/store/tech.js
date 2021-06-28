import { createSlice } from "@reduxjs/toolkit";

// auth slice
const initialTechState = {
  name: "",
};

const techSlice = createSlice({
  name: "tech",
  initialState: initialTechState,
  reducers: {
    setSelectedTech(state, action) {
      state.name = action.payload;
    },
  },
});

export const techActions = techSlice.actions;
export default techSlice;
