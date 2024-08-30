import { useSelector, useDispatch } from "react-redux";
// import { rentalProperties } from "@/data/dashboard-rental-properties";
import { type RootState } from "@/store";
import RentCard from "./components/RentCard";

const DashboardHome = () => {
  const rentalProperties = useSelector((state: RootState) => state.home);
  /* RENT */
  // Get the total amount of possible rent from all properties
  const totalRentalAmount = rentalProperties.reduce((acc, curr) => acc + curr.rentPrice, 0);
  // Get the income of the current properties tenants are renting
  const totalRentalIncome = rentalProperties.reduce((acc, curr) => {
    if (curr.available === false) {
      return acc + curr.rentPrice;
    }
    return acc;
  }, 0);
  //In this syntax, top val is the smaller val and bottom val is the bigger val
  const percentage = (totalRentalIncome / totalRentalAmount) * 100;

  /* PROPERTIES */
  const properties = rentalProperties.length;
  const propertiesRented = rentalProperties.reduce((acc, curr) => {
    if (curr.available === false) {
      return acc + 1;
    }
    return acc;
  }, 0);
  const propertiesUnderMaintenence = rentalProperties.reduce((acc, curr) => {
    if (curr.underMaint === true) {
      return acc + 1;
    }
    return acc;
  }, 0);
  const propertyPercentage = (propertiesRented / properties) * 100;
  const maintPercentage = (propertiesUnderMaintenence / properties) * 100;

  return (
    <div className="h-full w-[100%] bg-[#f3f3f3] overflow-hidden">
      <div className="pt-3 max-w-[74.3rem] m-auto p-4 ">
        <h1 className="text-[2rem] font-medium mb-4">Home</h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <RentCard
            percentage={percentage}
            totalRentalIncome={totalRentalIncome}
          />
          <div className="border shadow bg-white rounded-lg h-72 md:col-span-2 p-2">
            <select className="mb-4">
              <option>Monthly</option>
              <option>Yearly</option>
            </select>
            <br />
            <span className="border-l ml-3 pl-1 ">Properties</span>
            <div className="relative flex items-center justify-center ml-12 h-24 w-24">
              <div
                className="absolute w-full h-full flex items-center justify-center "
                style={{
                  background: `conic-gradient(#3bd1f6 ${propertyPercentage}%, #FFBF00 ${propertyPercentage}% ${100 - maintPercentage}%, #e5e7eb ${100 - maintPercentage}% 100%)`,
                  borderRadius: "50%",
                  // clipPath: 'circle(50% at 50% 50%)',
                }}
              >
                <div className="absolute flex items-center justify-center h-[48px] w-[48px] bg-white rounded-[50%]">{propertiesRented}</div>
              </div>
            </div>
            <div className="mt-2 ml-4 h-20 w-24">
              <div className=" h-6 flex items-center">
                <div className="h-3 w-3 bg-[#3bd1f6]"></div>
                <p className="text-xs ml-2 pb-[1.5px]">Rented</p>
              </div>
              <div className=" h-6 flex items-center">
                <div className="h-3 w-3 bg-[#e5e7eb]"></div>
                <p className="text-xs ml-2 pb-[1.5px]">Available</p>
              </div>
              <div className=" h-6 flex items-center">
                <div className="h-3 w-3 bg-[#FFBF00]"></div>
                <p className="text-xs ml-2 pb-[1.5px]">Maintenance</p>
              </div>
            </div>
            R
          </div>
          <div className="border shadow rounded-lg bg-white h-32 p-2">Card</div>
          <div className="border shadow rounded-lg bg-white h-32 p-2 md:col-span-2">Card</div>
          <div className="border shadow rounded-lg bg-white h-32 p-2">Card</div>
          <div className="border shadow rounded-lg bg-white h-32 p-2">Card</div>
          <div className="border shadow rounded-lg bg-white h-32 p-2">Card</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
