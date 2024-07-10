import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from '@tremor/react';

import TableModal from './TableModal';

import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { type RootState, type AppDispatch } from '../../store';
import { updateTablePrice } from '../../features/Rentals/rentalsSlice';

import { type RentalProps } from '../../data/properties';

export const TableHero = () => {
  // Get the current array of rental properties from Redux store
  const rentalProperties = useSelector(
    (state: RootState) => state.rentals.rentalsData
  );

  const dispatch: AppDispatch = useDispatch();

  // Create a localized array of properties to be able to adjust property prices UI
  const [properties, setProperties] = useState(rentalProperties);

  // Set a state for the how we want to sort our array - ASC/DESC
  const [currentPriceSort, setCurrentPriceSort] = useState('asc');

  // Property to edit
  const [propertyToEdit, setPropertyToEdit] = useState<number>();
  console.log(propertyToEdit);
  /*
  // Update price on input change
  const handleChange = (e, id: number) => {
    // Remove the $ dollar sign from the string value and convert to num
    // const newValue = Number(e.target.value.split('').slice(1).join(''));

    const newValue = Number(e.target.value);
    if (isNaN(newValue)) {
      return;
    }
    console.log(e);
    dispatch(updateTablePrice({ newValue, id }));
  };
  */

  // Function that will sort the price of our properties in the Table
  function sortbyPrice() {
    /*
    In order to be able to sort by price through this array of objects,
    we need to create two separate sort functions - 1 that will sort in
    ascending order and another in descending order. The types for this are tricky,
    but essentially we need to set the type of key to be type keyof RentalProps, and
    the type of the objects passed as the parameters (in this case a, b) to be of
    type RentalProps. The function format is as follows ->>

    (key: keyof RentalProps) => (a: RentalProps, b: RentalProps) =>
      a[key] > b[key] ? 1 : -1;
    */

    // Sort ascending
    const sortByKeyAsc =
      (key: keyof RentalProps) => (a: RentalProps, b: RentalProps) =>
        a[key] > b[key] ? 1 : -1;
    // Sort descending
    const sortByKeyDesc =
      (key: keyof RentalProps) => (a: RentalProps, b: RentalProps) =>
        a[key] < b[key] ? 1 : -1;

    // Set variable to the current sort function we intend to use (asc/desc)
    let currentSort = currentPriceSort === 'asc' ? sortByKeyAsc : sortByKeyDesc;

    // Create a copy of the current rentals array
    const newArr = [...properties];
    // Update the rentals array with the sorted array
    setProperties(newArr.sort(currentSort('price')));
    // Toggle the type of sort order to perform on the next sort click
    setCurrentPriceSort(currentPriceSort === 'asc' ? 'desc' : 'asc');
  }

  // Update the State anytime the rentalProperties state changes
  useEffect(() => {
    setProperties(rentalProperties);
  }, [rentalProperties]);

  /* 
  Do not sort the entire state, since the sort only affects the UI, 
  use/perform the sort locally within this component
  */

  return (
    <div className="mx-auto w-[69rem] border mb-4">
      <div className="w-full border-b">
        <div className="flex">
          <div className="w-[4.6rem] text-center">ID</div>
          <div className="text-left w-[19.25rem]">Name</div>
          <div className="text-center w-[20.8rem] relative">
            Price
            <i
              className="fa-solid fa-arrow-right-arrow-left text-xs rotate-90 absolute right-32 top-1 cursor-pointer"
              onClick={() => sortbyPrice()}
            ></i>
          </div>
          <div className="text-center w-[14.64rem]">Region</div>
          <div className="text-center border">Status</div>
        </div>
      </div>
      <Table className="overflow-scroll h-[26rem] w-full">
        <TableBody className="">
          {properties.map((property) => (
            <TableRow className="w-full" key={property.id}>
              <TableCell className="text-center">{property.id}</TableCell>
              <TableCell className="text-left">{property.name}</TableCell>
              <TableCell
                onClick={() => setPropertyToEdit(property.id)}
                className="w-[20.8rem] h-full text-center border-none focus:outline-none focus:ring focus:ring-violet-300 cursor-pointer"
              >
                {property.price}
              </TableCell>
              <TableCell className="text-center">
                {property.city}, {property.state}
              </TableCell>
              <TableCell className="text-center">
                {property.available ? 'Vacant' : 'Occupied'}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {propertyToEdit ? <TableModal property={propertyToEdit} /> : ''}
    </div>
  );
};
