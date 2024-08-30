import { createSlice } from "@reduxjs/toolkit";
// import { type RentalProps } from "@/data/dashboard-rental-properties";
import { rentalProperties } from "@/data/dashboard-rental-properties";

const homeSlice = createSlice({
  name: "home",
  initialState: rentalProperties,
  reducers: {},
});

export default homeSlice.reducer;
