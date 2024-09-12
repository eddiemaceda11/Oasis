import { useState } from "react";

const Documents = () => {
  const [currentTab, setCurrentTab] = useState<string | null>("All Orders");

  return (
    <div className="pt-3 w-[74.3rem] m-auto p-4 ">
      <h1 className="text-[2rem] font-medium mb-4">Documents</h1>
      <p className="text-xs text-gray-500 w-[75%] leading-[1.6] ">
        In the order details section, you can review and manage all orders with their details. You can view and edit information such as ID's of all orders, product date, order status, price, and location. Access to this view is limited. Only Administrators and team leaders have access. The changes
        you make will be approved after they are reviewed.
      </p>
      <div className="border-b flex border-gray-300 mt-10 gap-2 h-10">
        <div
          className={currentTab === "All Orders" ? "border-b-2 border-blue-800 flex justify-center items-center w-24 cursor-pointer" : "border-b-2 border-transparent flex justify-center items-center w-24 cursor-pointer"}
          onClick={(e) => setCurrentTab(e.currentTarget.textContent)}
        >
          All Orders
        </div>
        <div
          className={currentTab === "Completed" ? "border-b-2 border-blue-800 flex justify-center items-center w-24 cursor-pointer" : "border-b-2 border-transparent flex justify-center items-center w-24 cursor-pointer"}
          onClick={(e) => setCurrentTab(e.currentTarget.textContent)}
        >
          Completed
        </div>
        <div
          className={currentTab === "In Progress" ? "border-b-2 border-blue-800 flex justify-center items-center w-24 cursor-pointer" : "border-b-2 border-transparent flex justify-center items-center w-24 cursor-pointer"}
          onClick={(e) => setCurrentTab(e.currentTarget.textContent)}
        >
          In Progress
        </div>
        <div
          className={currentTab === "Backlogged" ? "border-b-2 border-blue-800 flex justify-center items-center w-24 cursor-pointer" : "border-b-2 border-transparent flex justify-center items-center w-24 cursor-pointer"}
          onClick={(e) => setCurrentTab(e.currentTarget.textContent)}
        >
          Backlogged
        </div>
        <div
          className={currentTab === "Canceled" ? "border-b-2 border-blue-800 flex justify-center items-center w-24 cursor-pointer" : "border-b-2 border-transparent flex justify-center items-center w-24 cursor-pointer"}
          onClick={(e) => setCurrentTab(e.currentTarget.textContent)}
        >
          Canceled
        </div>
      </div>
    </div>
  );
};

export default Documents;
