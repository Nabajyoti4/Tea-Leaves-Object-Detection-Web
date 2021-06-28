import { createSlice } from "@reduxjs/toolkit";

// auth slice
const initialLeaveState = {
  name: "",
  leave: {},
  result: {},
  loading: false,
};

const leaveSlice = createSlice({
  name: "leave",
  initialState: initialLeaveState,
  reducers: {
    setSelectedLeave(state, action) {
      state.name = action.payload;
    },
    setLeaveData(state, action) {
      state.leave = action.payload;
    },
    setResultData(state, action) {
      state.result = action.payload;
      sessionStorage.setItem("RESULT", JSON.stringify(action.payload));
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
  },
});

export const leaveActions = leaveSlice.actions;
export default leaveSlice;
