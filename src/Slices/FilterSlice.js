import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hostel: true,
  School: false,
  roomate: false,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setHome(state, action) {
      state.hostel = action.payload;
      state.School = false;
      state.roomate = false;
    },
    setSchool(state, action) {
      state.hostel = false;
      state.School = action.payload;
      state.roomate = false;
    },
    setRoommate(state, action) {
      state.hostel = false;
      state.School = false;
      state.roomate = action.payload;
    },
  },
});

export const { setHome, setSchool, setRoommate } = filterSlice.actions;
export default filterSlice.reducer;
