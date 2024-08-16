import { rentalsData, type RentalProps } from "../../../data/properties";
import { createSlice, current } from "@reduxjs/toolkit";

// Define the initial state type
type InitialRentalsProps = {
  rentalsData: RentalProps[];
  filteredRentals: RentalProps[];
};

// Initial state object
const initialState: InitialRentalsProps = {
  rentalsData,
  filteredRentals: [],
};

// Create the rentals slice
const rentalsSlice = createSlice({
  name: "rentals",
  initialState,
  reducers: {
    updatePrice: (state, action) => {
      // Update rentalsData based on action payload
      state.rentalsData = state.rentalsData.map((rental) => (rental.name !== action.payload.name ? rental : action.payload));
    },
    setAvailibility: (state, action) => {
      const rentalCity = action.payload.city;

      // Function to toggle availibility
      const toggleAvailability = (rental: RentalProps) => {
        if (rental.city === rentalCity) {
          return { ...rental, available: !rental.available };
        }
        return rental;
      };

      // Update filteredRentals if it's filtered, otherwise update rentalsData
      if (state.filteredRentals.length > 0) {
        state.filteredRentals = state.filteredRentals.map((rental) => toggleAvailability(rental));
      } else {
        state.rentalsData = state.rentalsData.map((rental) => toggleAvailability(rental));
      }
    },
    filterProperties: (state, action) => {
      state.filteredRentals = state.rentalsData.filter((rental) => rental.city === action.payload);
    },
    filterPriceOrder: (state, action) => {
      if (action.payload === "sort") {
        console.log("sort");
        const sortByKey = (key: keyof RentalProps) => (a: RentalProps, b: RentalProps) => a[key] > b[key] ? 1 : -1;
        state.rentalsData = state.rentalsData.sort(sortByKey("price"));
      }
      console.log(current(state.rentalsData));
    },
    updateTablePrice: (state, action) => {
      const { newValue, id } = action.payload;
      if (!id) {
        return state;
      }

      const propertyToUpdate = state.rentalsData.find((rental) => rental.id === id);

      if (propertyToUpdate) {
        console.log("hi");
        state.rentalsData = state.rentalsData.map((property) =>
          property.id === propertyToUpdate.id
            ? {
                ...property,
                price: newValue,
              }
            : property
        );
      }
    },
  },
});

// Action creators are generated for each reducer function case
// ***ex/ export const {addRental} = rentalsSlice.actions
export const { updatePrice, setAvailibility, filterProperties, updateTablePrice, filterPriceOrder } = rentalsSlice.actions;

export default rentalsSlice.reducer;
