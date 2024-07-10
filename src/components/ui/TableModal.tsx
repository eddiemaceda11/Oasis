import { useSelector } from 'react-redux';
import { type RootState } from '../../store';

const TableModal = ({ property }) => {
  const rentals = useSelector((state: RootState) => state.rentals.rentalsData);

  const selectedProperty = rentals.find((rental) => rental.id === property.id);
  console.log(selectedProperty);
  return (
    <div className="absolute h-[30rem] w-[40rem] bg-black m-auto left-0 right-0 top-0 bottom-0">
      <form className="w-full h-full flex flex-col items-center justify-center">
        <input type="text" />
        <input type="radio" />
      </form>
    </div>
  );
};

export default TableModal;
