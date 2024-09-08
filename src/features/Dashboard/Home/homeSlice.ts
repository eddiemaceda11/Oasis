import { createSlice } from "@reduxjs/toolkit";
// import { type RentalProps } from "@/data/dashboard-rental-properties";
import { rentalProperties } from "@/data/dashboard-rental-properties";

const initialState = {
  rentalProperties,
  search: "",
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    filterProperties: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const { filterProperties } = homeSlice.actions;

export default homeSlice.reducer;
