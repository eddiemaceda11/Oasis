import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { type RootState, type AppDispatch } from '../../store';
import { updatePrice, setAvailibility } from './rentalsSlice';
import { type RentalProps } from '../../data/properties';
import Button from '../../components/ui/Button';
import { useState } from 'react';

const Rentals = () => {
  // Get the current array of rentals
  const rentals: RentalProps[] = useSelector(
    (state: RootState) => state.rentals.rentalsData
  );
  // Get the current array of filtered rentals (if any)
  const filteredRentals: RentalProps[] = useSelector(
    (state: RootState) => state.rentals.filteredRentals
  );

  const [rentalsShowedLength, setRentalsShowedLength] = useState<number>(6); 

  const rentalsToShow = filteredRentals.length > 0 ? filteredRentals.slice(0, rentalsShowedLength) : rentals.slice(0, rentalsShowedLength);

  const dispatch: AppDispatch = useDispatch();

  // update the price of a rental
  // const editPrice = (rental: RentalProps) => {
  //   const updatedRental: RentalProps = { ...rental, price: 1000 };
  //   dispatch(updatePrice(updatedRental));
  // };

  return (
    <section className='m-auto md:w-[48rem] lg:bg-white lg:w-[61rem] xl:w-[69rem] flex flex-col items-center mb-4'>
    <div className="grid grid-cols-2 gap-0 md:w-[48rem] lg:bg-white lg:w-[61rem] xl:w-[69rem] m-auto">
      {rentalsToShow.map((rental) => (
        <div
          key={rental.name}
          className="overflow-hidden flex border border-solid h-44 m-3 rounded-lg md:w-[23rem] lg:w-[29rem] xl:w-[33rem] place-self-center items-center"
        >
          <img src={rental.image} className="ml-2 xl:ml-0 min-h-[10rem] md:w-48 lg:w-56 xl:w-64 xl:h-40 xl:object-contain" />
          <div className="md:w-[9.6rem] md:h-40 lg:w-[13.7rem] xl:w-64 xl:h-40 ml-1 p-3">
            <div className="flex justify-between">
              <div className="flex items-center gap-1.5">
                <i className="fa-solid fa-circle-check text-sky-500 text-xs"></i>
                <p className="text-sky-500 text-xs">Verified</p>
              </div>
              <span className="flex items-center">
                <i className="fa-solid fa-star text-yellow-400 text-sm mr-1"></i>
                <p className="text-sm font-medium">{rental.rating}</p>
                <p className="text-sm font-medium">({rental.reviews})</p>
              </span>
            </div>
            <p className="font-bold mt-1">{rental.name.split("").length > 15 ? "Too long" : rental.name} {rental.name.split("").length}</p>
            <p className="text-xs text-slate-400">
              {rental.city},{rental.state}
            </p>
            {/* <Button
              classInfo="border border-solid bg-black text-white px-4"
              handleClick={() => editPrice(rental)}
            >
              Click
            </Button> */}
            <div className="md:grid md:grid-cols-2 md:grid-rows-2 lg:flex md:text-[9px] lg:text-[9px] xl:text-[10.5px] flex mt-1 text-slate-400 justify-between mt-3">
              <div className="flex items-center gap-1">
                <i className="fa-solid fa-bed"></i>
                <p>{rental.bedrooms} Bed</p>
              </div>
              <div className="flex items-center gap-1">
                <i className="fa-solid fa-bath"></i>
                <p>{rental.bathrooms} Bath</p>
              </div>
              <div className="flex items-center gap-1">
                <i className="fa-solid fa-expand"></i>
                <p>{rental.sq} SQ</p>
              </div>
              <div className="flex items-center gap-1">
                <i className="fa-solid fa-warehouse"></i>
                <p>{rental.garage} Garage</p>
              </div>
            </div>
            <div className="flex justify-around mt-5">
              <p className="text-xs xl:text-sm mr-auto font-medium">
                ${rental.price}/month
              </p>
              <p
                className={
                  rental.available
                    ? 'text-xs text-sky-500'
                    : 'text-xs line-through text-red-500'
                }
              >
                {rental.available ? 'Available' : 'Sold out'}
              </p>
              <Button
                classInfo="border border-solid border-neutral-400 px-2 xl:px-4 text-xs ml-1"
                handleClick={() => {
                  dispatch(setAvailibility(rental));
                }}
              >
                Book
              </Button>
            </div>
          </div>
        </div>
      ))}  
    </div>
    <Button 
     classInfo="border border-solid border-neutral-300 px-2 xl:px-5 xl:py-2 text-xs m-auto"
     handleClick={() => setRentalsShowedLength((prevLength) => prevLength + 6)}
    >Load More</Button>
    </section>
  );
};

export default Rentals;
