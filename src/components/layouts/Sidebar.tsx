import { useState } from "react";
import React from "react";


const sidebarData = [
    {
      title: "Dashboard",
      selections: [
        {
          selection: "Home",
          image: "fa-solid fa-warehouse",
        },
      ],
    },
    {
      title: "Pages",
      selections: [
        {
          selection: "Orders",
          image: "fa-solid fa-money-check-dollar",
        },
        {
          selection: "Employees",
          image: "fa-solid fa-user-tie",
        },
        {
          selection: "Customers",
          image: "fa-solid fa-bag-shopping",
        },
      ],
    },
    {
      title: "Apps",
      selections: [
        {
          selection: "Calender",
          image: "fa-solid fa-calendar-days",
        },
        {
          selection: "Themes",
          image: "fa-solid fa-palette",
        },
        {
          selection: "Editor",
          image: "fa-solid fa-pen-to-square",
        },
      ],
    },
    {
      title: "Charts",
      selections: [
        {
          selection: "Line Chart",
          image: "fa-solid fa-chart-line",
        },
        {
          selection: "Area Chart",
          image: "fa-solid fa-chart-area",
        },
        {
          selection: "Bar Chart",
          image: "fa-solid fa-chart-simple",
        },
      ],
    },
    {
      title: "Support",
      selections: [
        {
          selection: "Live Chat",
          image: "fa-solid fa-headset",
        },
        {
          selection: "Email",
          image: "fa-solid fa-envelope",
        },
      ],
    },
  ];

export default function Sidebar() {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(true);

  function toggleSidebar() {
    setSidebarIsOpen((prevState) => !prevState);
  }

  // bg-[#fbfbfb]

  return (
    <section className={sidebarIsOpen ? "bg-[#f8f9fb] min-w-[250px] [transition:0.5s] overflow-y-auto border-r-[1px]" : "bg-[grey] h-screen w-[0] [transition:0.5s]"}>
      <div className="px-[1.3rem] py-[0] w-full">
        {sidebarIsOpen && (
          <div className="">
            <div className="h-[8%] flex items-center justify-between mt-4">
              <p className="font-bold text-[1.5rem] border-b-[2px] pb-[12px] w-[99%]">Oasis</p>
            </div>
            <div className="h-[92%]">
              {sidebarData.map((data) => (
                <div
                  className="h-auto mt-2"
                  key={data.title}
                >
                  <p className="mb-1 cursor-default font-medium text-[17px]">{data.title}</p>
                  <ul>
                    {data.selections.map((selection) => (
                      <div
                        className="flex items-center hover:cursor-pointer hover:bg-[#bbdefb] hover:rounded-[4px] hover:[transition:0.01s]"
                        key={selection.selection}
                      >
                        <i className={`${selection.image} pb-[1.5px] text-[15px] pl-4`}></i>
                        <li className="flex pl-[1.1rem] text-[13px] items-center [list-style:none] cursor-pointer h-[2.1rem] border-[1px] border-[solid] border-[transparent] w-full hover:cursor-pointer hover:bg-[#bbdefb] hover:rounded-[4px] hover:[transition:0.01s] font-normal">{selection.selection}</li>
                      </div>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}
        {!sidebarIsOpen && <button onClick={toggleSidebar}>open</button>}
      </div>
    </section>
  );
}