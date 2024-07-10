import { useSelector } from 'react-redux';
import { type RootState } from '../../store';

const TableModal = ({ propertyId } : {propertyId: number}) => {
  // Get the current array of rental properties from Redux store
  const rentals = useSelector((state: RootState) => state.rentals.rentalsData);

  // Find the property that will be edited
  const selectedProperty = rentals.find((rental) => rental.id === propertyId);
  
  return (
    <div className="absolute h-[30rem] w-[40rem] bg-black m-auto left-0 right-0 top-0 bottom-0">
      <form className="w-full h-full flex flex-col items-center justify-center">
        <input type="text" value={selectedProperty?.name} />
        <input type="radio" />
      </form>
    </div>
  );
};

export default TableModal;
