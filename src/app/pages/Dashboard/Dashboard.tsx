import Sidebar from "../../../components/layouts/Dashboard/Sidebar";
import { Outlet } from "react-router";

const DashboardPage = () => {
  return (
    <div className="h-full w-full max-w-[1950px] m-auto">
      <div className="flex flex-1 h-full justify-between overflow-scroll">
        <Sidebar />
        <div className="h-full w-[100%] bg-[#f3f3f3] overflow-x-hidden overflow-y-scroll">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
