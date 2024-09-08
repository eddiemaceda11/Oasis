import { useSelector, useDispatch } from "react-redux";
import { filterProperties } from "../homeSlice";
import { RootState } from "@/store";

export default function SearchProperties({ search }: { search: string }) {
  const rentalProperties = useSelector((state: RootState) => state.home.rentalProperties);
  const dispatch = useDispatch();

  const filteredRentals =
    search === ""
      ? []
      : rentalProperties.filter((property) => {
          return property.address.toLowerCase().includes(search.toLowerCase());
        });

  if (search !== "" && filteredRentals.length === 0) {
    return (
      <div>
        <div className="border shadow rounded-lg bg-white h-[4rem] p-2">
          <input
            className=""
            placeholder="Search"
            onChange={(e) => dispatch(filterProperties(e.target.value))}
          />
        </div>
        <div className="border shadow rounded-lg bg-white h-[8rem] p-2 overflow-scroll">
          <p>No properties found...</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="border shadow rounded-lg">
        <div className="rounded-t-lg bg-white h-[4rem] p-2">
          <input
            className=""
            placeholder="Search"
            onChange={(e) => dispatch(filterProperties(e.target.value))}
          />
        </div>
        <div className="rounded-b-lg bg-white h-[14rem] p-2 overflow-scroll">
          <ul className="">{filteredRentals.length > 0 ? filteredRentals.map((property) => <li key={property.id}>{property.address}</li>) : rentalProperties.map((property) => <li key={property.id}>{property.address}</li>)}</ul>
        </div>
      </div>
    );
  }
}
