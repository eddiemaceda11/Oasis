import { useState } from "react";
import Tabs from "./components/Tabs";
import Controls from "./components/Controls";

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
      <Controls />
      <div className="mt-6 h-[28rem]">
        <table className="w-full">
          <thead className="border-b border-gray-300 h-12">
            <tr className="">
              <th className="pl-5 w-40 text-left text-sm font-medium">Order ID</th>
              <th className="pl-5 w-40 text-left text-sm font-medium">Customer</th>
              <th className="pl-5 w-40 text-left text-sm font-medium">Order</th>
              <th className="w-40 text-sm font-medium">Delivery Date</th>
              <th className="w-40 text-sm font-medium">Price</th>
              <th className="w-40 text-sm font-medium">Delivery Status</th>
              <th className="w-40 text-sm font-medium">Payment</th>
            </tr>
          </thead>
          <tbody className="w-full">
            <tr className="h-12 hover:bg-blue-100 w-full">
              <td className="pl-5 w-40 text-sm font-light">1234</td>
              <td className="pl-5 w-40 text-sm font-light">Eddie</td>
              <td className="pl-5 w-40 text-sm font-light">Sink Drain</td>
              <td className="w-40 text-center text-sm font-light">3/28/24</td>
              <td className="w-40 text-center text-sm font-light">$22.99</td>
              <td className="w-40 text-center text-sm font-light">Shipped</td>
              <td className="w-40 text-center text-sm font-light">Credit Card</td>
            </tr>
            <tr className="h-12 hover:bg-blue-100 w-full">
              <td className="pl-5 w-40 text-sm font-light">1234</td>
              <td className="pl-5 w-40 text-sm font-light">Eddie</td>
              <td className="pl-5 w-40 text-sm font-light">Sink Drain</td>
              <td className="w-40 text-center text-sm font-light">3/28/24</td>
              <td className="w-40 text-center text-sm font-light">$22.99</td>
              <td className="w-40 text-center text-sm font-light">Shipped</td>
              <td className="w-40 text-center text-sm font-light">Credit Card</td>
            </tr>
            <tr className="h-12 hover:bg-blue-100 w-full">
              <td className="pl-5 w-40 text-sm font-light">1234</td>
              <td className="pl-5 w-40 text-sm font-light">Eddie</td>
              <td className="pl-5 w-40 text-sm font-light">Sink Drain</td>
              <td className="w-40 text-center text-sm font-light">3/28/24</td>
              <td className="w-40 text-center text-sm font-light">$22.99</td>
              <td className="w-40 text-center text-sm font-light">Shipped</td>
              <td className="w-40 text-center text-sm font-light">Credit Card</td>
            </tr>
            <tr className="h-12 hover:bg-blue-100 w-full">
              <td className="pl-5 w-40 text-sm font-light">1234</td>
              <td className="pl-5 w-40 text-sm font-light">Eddie</td>
              <td className="pl-5 w-40 text-sm font-light">Sink Drain</td>
              <td className="w-40 text-center text-sm font-light">3/28/24</td>
              <td className="w-40 text-center text-sm font-light">$22.99</td>
              <td className="w-40 text-center text-sm font-light">Shipped</td>
              <td className="w-40 text-center text-sm font-light">Credit Card</td>
            </tr>
            <tr className="h-12 hover:bg-blue-100 w-full">
              <td className="pl-5 w-40 text-sm font-light">1234</td>
              <td className="pl-5 w-40 text-sm font-light">Eddie</td>
              <td className="pl-5 w-40 text-sm font-light">Sink Drain</td>
              <td className="w-40 text-center text-sm font-light">3/28/24</td>
              <td className="w-40 text-center text-sm font-light">$22.99</td>
              <td className="w-40 text-center text-sm font-light">Shipped</td>
              <td className="w-40 text-center text-sm font-light">Credit Card</td>
            </tr>
            <tr className="h-12 hover:bg-blue-100 w-full">
              <td className="pl-5 w-40 text-sm font-light">1234</td>
              <td className="pl-5 w-40 text-sm font-light">Eddie</td>
              <td className="pl-5 w-40 text-sm font-light">Sink Drain</td>
              <td className="w-40 text-center text-sm font-light">3/28/24</td>
              <td className="w-40 text-center text-sm font-light">$22.99</td>
              <td className="w-40 text-center text-sm font-light">Shipped</td>
              <td className="w-40 text-center text-sm font-light">Credit Card</td>
            </tr>
            <tr className="h-12 hover:bg-blue-100 w-full">
              <td className="pl-5 w-40 text-sm font-light">1234</td>
              <td className="pl-5 w-40 text-sm font-light">Eddie</td>
              <td className="pl-5 w-40 text-sm font-light">Sink Drain</td>
              <td className="w-40 text-center text-sm font-light">3/28/24</td>
              <td className="w-40 text-center text-sm font-light">$22.99</td>
              <td className="w-40 text-center text-sm font-light">Shipped</td>
              <td className="w-40 text-center text-sm font-light">Credit Card</td>
            </tr>
            <tr className="h-12 hover:bg-blue-100 w-full">
              <td className="pl-5 w-40 text-sm font-light">1234</td>
              <td className="pl-5 w-40 text-sm font-light">Eddie</td>
              <td className="pl-5 w-40 text-sm font-light">Sink Drain</td>
              <td className="w-40 text-center text-sm font-light">3/28/24</td>
              <td className="w-40 text-center text-sm font-light">$22.99</td>
              <td className="w-40 text-center text-sm font-light">Shipped</td>
              <td className="w-40 text-center text-sm font-light">Credit Card</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
