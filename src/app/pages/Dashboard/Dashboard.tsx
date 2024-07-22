import Sidebar from "../../../components/layouts/Sidebar";
import Tasks from "../../../features/TaskManager/TaskManager";
import React from "react";

const DashboardPage = () => {

  return (
    <div>
      <div className="h-screen w-screen max-w-[1950px] mx-[auto] my-[0]">
        <div className="flex h-full">
          <Sidebar />
          <div className="h-full flex flex-col w-full items-start bg-[#F0F0F0] px-2">
             <Tasks />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;