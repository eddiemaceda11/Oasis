import { useDispatch, useSelector } from "react-redux";
import { filterTenants } from "../tenantsSlice";

import { type RootState } from "@/store";

const TenantsUtils = () => {
  const search = useSelector((state: RootState) => state.tenants.search);
  const dispatch = useDispatch();

  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(filterTenants(e.target.value));
  };

  return (
    <section className="border flex">
      <input
        className="placeholder:italic ml-auto block h-8"
        type="text"
        placeholder="Search tenant..."
        value={search}
        onChange={(e) => {
          handleFilter(e);
        }}
      />
      <button>add tenant</button>
    </section>
  );
};

export default TenantsUtils;
