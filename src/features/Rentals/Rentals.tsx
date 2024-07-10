import { useSelector, useDispatch } from 'react-redux';
import { type RootState, type AppDispatch } from '../../store';
import { updatePrice, setAvailibility } from './rentalsSlice';
import { type RentalProps } from '../../data/properties';
import Button from '../../components/ui/Button';

const Rentals = () => {
  // Get the current array of rentals
  const rentals: RentalProps[] = useSelector(
    (state: RootState) => state.rentals.rentalsData
  );
  // Get the current array of filtered rentals (if any)
  const filteredRentals: RentalProps[] = useSelector(
    (state: RootState) => state.rentals.filteredRentals
  );

  const rentalsToShow = filteredRentals.length > 0 ? filteredRentals : rentals;

  const dispatch: AppDispatch = useDispatch();

  // update the price of a rental
  // const editPrice = (rental: RentalProps) => {
  //   const updatedRental: RentalProps = { ...rental, price: 1000 };
  //   dispatch(updatePrice(updatedRental));
  // };

  return (
    <div className="grid grid-cols-2 gap-0 w-[69rem] m-auto">
      {rentalsToShow.map((rental) => (
        <div
          key={rental.name}
          className="flex border border-solid h-44 m-3 rounded-lg w-[33rem] place-self-center items-center"
        >
          <img src={rental.image} className="w-64 h-40 object-contain" />
          <div className="border border-solid w-64 h-40 ml-1 p-3">
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
            <p className="font-bold mt-1">{rental.name}</p>
            <p className="text-xs text-slate-400">
              {rental.city},{rental.state}
            </p>
            {/* <Button
              classInfo="border border-solid bg-black text-white px-4"
              handleClick={() => editPrice(rental)}
            >
              Click
            </Button> */}
            <div className="text-[10.5px] flex mt-1 text-slate-400 justify-between mt-3">
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
              <p className="text-sm mr-auto font-medium">
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
                classInfo="border border-solid border-neutral-400 px-4 text-xs ml-1"
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
  );
};

export default Rentals;
