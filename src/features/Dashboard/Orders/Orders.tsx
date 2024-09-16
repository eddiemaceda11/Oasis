import { useState } from "react";
import Tabs from "./components/Tabs";

const Orders = () => {
  const [currentTab, setCurrentTab] = useState<string | null>("All Orders");

  return (
    <div className="pt-3 w-[74.3rem] m-auto p-4 ">
      <h1 className="text-[2rem] font-medium mb-4">Orders</h1>
      <p className="text-xs text-gray-500 w-[75%] leading-[1.6] ">
        In the order details section, you can review and manage all orders with their details. You can view and edit information such as ID's of all orders, product date, order status, price, and location. Access to this view is limited. Only Administrators and team leaders have access. The changes
        you make will be approved after they are reviewed.
      </p>
      <Tabs
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      />
      <div className="mt-8 h-16 flex items-center">
        <div className="relative">
          <i className="fa-solid fa-magnifying-glass absolute top-[7px] left-4 text-gray-400 text-lg"></i>
          <input
            className="border border-gray-300 h-10 w-[45rem] rounded pl-11 placeholder:text-gray-400 text-sm"
            placeholder="Search for an order ID, customer, or product"
          ></input>
        </div>
        <div className="flex ml-auto gap-2">
          <button className="border border-gray-300 h-10 px-4 text-gray-500 text-sm bg-white rounded">
            <i className="fa-solid fa-filter pr-2"></i>Filters
          </button>
          <button className="border border-gray-300 h-10 px-4 text-gray-500 text-sm bg-white rounded">
            <i className="fa-solid fa-paperclip pr-2"></i>Attachments
          </button>
          <button className="border border-gray-300 h-10 px-4 text-gray-500 text-sm bg-white rounded">
            <i className="fa-solid fa-file-arrow-down pr-2"></i>Exports
          </button>
        </div>
      </div>
    </div>
  );
};

export default Orders;
