import { useSelector } from "react-redux";
import { Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow } from "@tremor/react";
import { type RootState } from "@/store";
import InfoBoxes from "./components/InfoBoxes";
import TenantsUtils from "./components/TenantsUtils";
import TableHeader from "./components/TableHeader";

const TenantsTable = () => {
  const tenants = useSelector((state: RootState) => state.tenants.tenantsState);
  const search = useSelector((state: RootState) => state.tenants.search);
  const tenantsToShow = search !== "" ? tenants.filter((tenant) => tenant.toLowerCase().includes(search.toLowerCase())) : tenants;

  return (
    <div className="h-full w-[100%] bg-[#f3f3f3] overflow-hidden">
      <div className="pt-3 w-[74.3rem] m-auto p-4 ">
        <h1 className="text-[2rem] font-medium mb-4">Tenants</h1>
        <div className="flex flex-col h-38 gap-4 border">
          <InfoBoxes />
          <TenantsUtils />
        </div>
        <div className="">
          <div className="mx-auto w-[45rem] lg:w-[55rem] xl:w-[69rem] border mb-4 mt-4 shadow">
            <TableHeader />
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
            <div className="flex h-[2rem] items-center bg-slate-100 border-t"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TenantsTable;
