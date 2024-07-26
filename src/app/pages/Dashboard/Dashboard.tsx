import Sidebar from "../../../components/layouts/Sidebar";
import Tasks from "../../../features/TaskManager/TaskManager";
import React from "react";

const DashboardPage = () => {
  return (
    <div className="h-full w-full max-w-[1950px] m-auto">
      <div className="flex flex-1 h-full justify-between overflow-scroll">
        <Sidebar />
        <div className="w-full flex flex-col ">
          <Tasks />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
