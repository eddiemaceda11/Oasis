import { createSlice, current } from "@reduxjs/toolkit";

type InitialStateProps = {
  tenantsState: string[];
  search: string;
};

const initialState: InitialStateProps = {
  tenantsState: ["eddie", "bob", "john", "eddie", "bob", "john", "eddie", "bob", "john", "eddie", "bob", "john"],
  search: "",
};

const tenantsSlice = createSlice({
  name: "tenants",
  initialState,
  reducers: {
    filterTenants: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const { filterTenants } = tenantsSlice.actions;

export default tenantsSlice.reducer;
