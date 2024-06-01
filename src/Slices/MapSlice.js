import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: false,
};

const mapSlice = createSlice({
  name: "map",
  initialState,
  reducers: {
    toggleFilter(state, action) {
      if (state.filter) {
        state.filter = !action.payload;
      } else state.filter = action.payload;
    },
  },
});

export const { toggleFilter } = mapSlice.actions;
export default mapSlice.reducer;
