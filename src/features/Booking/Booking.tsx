import Button from '../../components/ui/Button';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { type RootState, type AppDispatch } from '../../store';
import { filterProperties } from '../Rentals/rentalsSlice';
import TremorDateRangePicker from './TremorDateRangePicker';

const color = 'white';

const Booking = () => {
  const [currentCity, setCurrentCity] = useState('');
  // key - X-Api-Key=kR45iXLWKwMTwgAuM6XXhw==wxyB7IqDNzZUjBem
  const [dropdownCities, setDropdownCities] = useState([]);

  const rentals = useSelector((state: RootState) => state.rentals);

  const dispatch = useDispatch();

  const fetchRentals = (e: React.MouseEvent<HTMLButtonElement> | React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    dispatch(filterProperties(currentCity));
  };
  console.log(currentCity);
  return (
    <form className="flex border-solid border justify-center gap-3 mt-4 w-[60rem] h-20 m-auto items-center">
      <div className="w-32">
        <div className="flex gap-2">
          <i className="fa-solid fa-location-dot text-sm text-slate-400"></i>
          <p className="text-slate-400 text-sm">Location</p>
        </div>
        <input
          className="w-full outline-none rounded-md border shadow-sm transition-all sm:text-sm bg-white dark:bg-gray-950 border-gray-300 dark:border-gray-800 text-gray-900 dark:text-gray-50 placeholder-gray-400 dark:placeholder-gray-500 hover:bg-gray-50 hover:dark:bg-gray-950/50 disabled:pointer-events-none disabled:bg-gray-100 disabled:text-gray-400 disabled:dark:border-gray-800 disabled:dark:bg-gray-800 disabled:dark:text-gray-500 focus:ring-2 focus:ring-blue-200 focus:dark:ring-blue-700/30 focus:border-blue-500 focus:dark:border-blue-700 w-60 p-[2px]"
          list="cities"
          name="city"
          id="city"
          type="search"
          placeholder="Enter city"
          onChange={(e) => {
            setCurrentCity(e.target.value);
            fetchRentals(e);
          }}
        />
        <datalist id="cities" className="bg-black">
          <option value="San Antonio" />
          <option value="Miami" />
          <option value="Middletown" />
        </datalist>
        {/* <input
          className="w-full outline-none rounded-md border shadow-sm transition-all sm:text-sm bg-white dark:bg-gray-950 border-gray-300 dark:border-gray-800 text-gray-900 dark:text-gray-50 placeholder-gray-400 dark:placeholder-gray-500 hover:bg-gray-50 hover:dark:bg-gray-950/50 disabled:pointer-events-none disabled:bg-gray-100 disabled:text-gray-400 disabled:dark:border-gray-800 disabled:dark:bg-gray-800 disabled:dark:text-gray-500 focus:ring-2 focus:ring-blue-200 focus:dark:ring-blue-700/30 focus:border-blue-500 focus:dark:border-blue-700 w-60 p-[2px]"
          value={currentCity}
          type="text"
          placeholder="Enter city"
          onChange={(e) => setCurrentCity(e.target.value)}
        /> */}
      </div>
      <div className="w-28">
        <div className="flex gap-2">
          <i className="fa-solid fa-location-dot text-sm text-slate-400"></i>
          <p className="text-slate-400 text-sm">Guests</p>
        </div>
        <p>4 adults</p>
      </div>

      <div className="w-28">
        <div className="flex gap-2">
          <i className="fa-solid fa-location-dot text-sm text-slate-400"></i>
          <p className="text-slate-400 text-sm">Price</p>
        </div>
        <p>$2,200</p>
      </div>
      <div className="w-36">
        <div className="flex gap-2">
          <i className="fa-solid fa-location-dot text-sm text-slate-400"></i>
          <p className="text-slate-400 text-sm">When</p>
        </div>
        {/* <DatePicker /> */}
        <TremorDateRangePicker />
      </div>
      <Button
        handleClick={(e: React.MouseEvent<HTMLButtonElement>) => fetchRentals(e)}
        classInfo="border border-solid border-neutral-400 ml-20 px-4 h-9 self-center"
      >
        Search
      </Button>
    </form>
  );
};

export default Booking;

// useEffect(() => {
//   try {
//     fetch('https://api.api-ninjas.com/v1/city?name=San Antonio')
//       .then((res) => res.json())
//       .then((data) => {
//         if (Array.isArray(data) && data.length > 0) {
//           setCurrentCity(data[0].name);
//         } else {
//           console.error('no city data found');
//         }
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   } catch (err) {
//     console.log('Data not found');
//   }
// }, []);

// fetch city
