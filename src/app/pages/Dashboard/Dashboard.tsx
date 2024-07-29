import Sidebar from "../../../components/layouts/Sidebar";
import { Outlet } from "react-router";

const DashboardPage = () => {
  return (
    <div className="h-1900 w-full max-w-[1950px] m-auto">
      <div className="flex flex-1 h-full justify-between overflow-scroll">
        <Sidebar />
        <div className="w-full flex flex-col ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
