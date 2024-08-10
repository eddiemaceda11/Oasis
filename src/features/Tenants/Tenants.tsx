import { useDispatch, useSelector } from "react-redux";
import { filterTenants } from "./tenantsSlice";
import { Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow } from "@tremor/react";

const TenantsTable = () => {
  const tenants = useSelector((state) => state.tenants.tenantsState);
  const search = useSelector((state) => state.tenants.search);
  const tenantsToShow = search !== "" ? tenants.filter((tenant) => tenant.toLowerCase().includes(search.toLowerCase())) : tenants;
  const dispatch = useDispatch();

  const handleFilter = (e) => {
    dispatch(filterTenants(e.target.value));
  };

  // useEffect(() => {
  //   // Only dispatch the filter action if the query is not empty
  //   if (currentTenantQuery !== "") {
  //     dispatch(filterTenants(currentTenantQuery));
  //   }
  // }, [currentTenantQuery]);

  return (
    <div className="h-[820px] w-[100%] bg-[#f3f3f3] overflow-hidden">
      <input
        className="placeholder:italic"
        type="text"
        placeholder="Search tenant..."
        value={search}
        onChange={(e) => {
          handleFilter(e);
        }}
      />
      <div className="">
        <div className="mx-auto w-[45rem] lg:w-[55rem] xl:w-[69rem] border mb-4 mt-20 shadow">
          <div className="w-full border-b">
            <div className="flex h-[2rem] items-center bg-slate-300">
              <div className="text-left w-[13.25rem]  pl-4 ">Name</div>
              <div className="text-center w-[16.25rem] ">Unit</div>
              <div className="text-center w-[16rem] ">Email</div>
              <div className="text-center w-[14rem] ">Phone</div>
              <div className="text-center  w-[9.5rem]">Price</div>
            </div>
          </div>
          <Table className="overflow-scroll h-[26rem] w-full bg-white">
            <TableBody className="">
              {tenantsToShow.map((tenant, i) => (
                <TableRow
                  className="w-full"
                  key={i}
                >
                  <TableCell className="w-[13.25rem]   ">{tenant} Maceda</TableCell>
                  <TableCell className="w-[16.25rem] text-center  ">128 Washington Dr</TableCell>
                  <TableCell className="text-center w-[16rem]  ">{tenant}</TableCell>
                  <TableCell className="text-center w-[14rem]  ">{tenant ? "Vacant" : "Occupied"}</TableCell>
                  <TableCell className=" w-[9.5rem] h-full text-center  focus:outline-none focus:ring focus:ring-violet-300 cursor-pointer">$1900</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default TenantsTable;
