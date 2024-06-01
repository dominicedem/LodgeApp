import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openMenu: true,
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    toggleMenu(state, action) {
      state.openMenu = action.payload;
    },
  },
});

export const { toggleMenu } = menuSlice.actions;
export default menuSlice.reducer;
