import { useDispatch, useSelector } from "react-redux";
import { filterTenants } from "./tenantsSlice";
import { Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow } from "@tremor/react";
import { type RootState } from "@/store";

const TenantsTable = () => {
  const tenants = useSelector((state: RootState) => state.tenants.tenantsState);
  const search = useSelector((state: RootState) => state.tenants.search);
  const tenantsToShow = search !== "" ? tenants.filter((tenant) => tenant.toLowerCase().includes(search.toLowerCase())) : tenants;
  const dispatch = useDispatch();

  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(filterTenants(e.target.value));
  };

  // useEffect(() => {
  //   // Only dispatch the filter action if the query is not empty
  //   if (currentTenantQuery !== "") {
  //     dispatch(filterTenants(currentTenantQuery));
  //   }
  // }, [currentTenantQuery]);

  return (
    <div className="h-full w-[100%] bg-[#f3f3f3] overflow-hidden">
      <div className="pt-3 w-[74.3rem] m-auto p-4 ">
        <h1 className="text-[2rem] font-medium mb-4">Tenants</h1>
        <div className="flex flex-col h-38 gap-4 border">
          <section className="flex gap-4">
            <div className="shadow border w-[16rem] h-32 rounded-lg flex items-center justify-center gap-6 bg-white">
              <div className="text-center flex flex-col">
                <p>Total Tenants</p>
                <p className="text-[1.5rem]">18</p>
              </div>
              <div className="h-24 w-24 bg-slate-200 rounded-[50%] flex items-center justify-center">
                <div className="h-16 w-16 bg-white rounded-[50%]"></div>
              </div>
            </div>
            <div className="shadow border w-[12rem] h-32 rounded-lg flex flex-col items-center justify-center bg-white">
              <div className="text-center flex flex-col">
                <p>AVG Property Cost</p>
                <p className="text-[1.5rem]">$1,800</p>
              </div>
            </div>
            <div className="shadow border w-[12rem] h-32 rounded-lg flex flex-col items-center justify-center bg-white">
              <div className="text-center flex flex-col">
                <p>AVG Lease Term</p>
                <p className="text-[1.5rem]">6 months</p>
              </div>
            </div>
            <div className="shadow border w-[8.3rem] h-32 rounded-lg flex flex-col items-center justify-center bg-white">
              <p>Total Tenants</p>
            </div>
            <div className="shadow border w-[8.3rem] h-32 rounded-lg flex flex-col items-center justify-center bg-white">
              <p>Total Tenants</p>
            </div>
          </section>
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
        </div>
        <div className="">
          <div className="mx-auto w-[45rem] lg:w-[55rem] xl:w-[69rem] border mb-4 mt-4 shadow">
            <div className="w-full border-b">
              <div className="flex h-[2rem] items-center bg-slate-100 ">
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
    </div>
  );
};

export default TenantsTable;
