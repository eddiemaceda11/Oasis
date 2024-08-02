import { createSlice, current } from "@reduxjs/toolkit";

type InitialStateProps = {
  tenantsState: string[];
  filteredTenantsState: string[];
  search: string;
};

const initialState: InitialStateProps = {
  tenantsState: ["eddie", "bob", "john", "eddie", "bob", "john", "eddie", "bob", "john", "eddie", "bob", "john"],
  filteredTenantsState: [],
  search: "",
};

const tenantsSlice = createSlice({
  name: "tenants",
  initialState,
  reducers: {
    filterTenants: (state, action) => {
      // console.log(action.payload, "current payload");
      // if (action.payload === "") return state;
      // state.filteredTenantsState = state.tenantsState.filter((item) => item.includes(action.payload));
      state.search = action.payload;
    },
  },
});

export const { filterTenants } = tenantsSlice.actions;

export default tenantsSlice.reducer;
