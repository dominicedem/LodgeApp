import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filteredLodge: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setFilteredLodge(state, action) {
      state.filteredLodge = action.payload;
    },
  },
});

export const { setFilteredLodge } = searchSlice.actions;
export default searchSlice.reducer;
