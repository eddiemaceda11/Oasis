import { useState } from "react";
import { Link } from "react-router-dom";

const sidebarData = [
  {
    title: "Dashboard",
    selections: [
      {
        selection: "Home",
        image: "fa-solid fa-warehouse",
        path: "home",
      },
    ],
  },
  {
    title: "Pages",
    selections: [
      {
        selection: "Tasks",
        image: "fa-solid fa-money-check-dollar",
        path: "tasks",
      },
      {
        selection: "Tenants",
        image: "fa-solid fa-user-tie",
        path: "tenants",
      },
      {
        selection: "Documents",
        image: "fa-solid fa-bag-shopping",
        path: "documents",
      },
    ],
  },
  {
    title: "Apps",
    selections: [
      {
        selection: "Calender",
        image: "fa-solid fa-calendar-days",
        path: "apps",
      },
      {
        selection: "Themes",
        image: "fa-solid fa-palette",
        path: "themes",
      },
      {
        selection: "Editor",
        image: "fa-solid fa-pen-to-square",
        path: "editor",
      },
    ],
  },
  {
    title: "Charts",
    selections: [
      {
        selection: "Line Chart",
        image: "fa-solid fa-chart-line",
        path: "line-chart",
      },
      {
        selection: "Area Chart",
        image: "fa-solid fa-chart-area",
        path: "area-chart",
      },
      {
        selection: "Bar Chart",
        image: "fa-solid fa-chart-simple",
        path: "bar-chart",
      },
    ],
  },
  {
    title: "Support",
    selections: [
      {
        selection: "Live Chat",
        image: "fa-solid fa-headset",
        path: "live-chat",
      },
      {
        selection: "Email",
        image: "fa-solid fa-envelope",
        path: "email",
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
    <section className={sidebarIsOpen ? "bg-[#f8f9fb] min-w-[250px] [transition:0.5s]  border-r-[1px] overflow-scroll h-full" : "bg-[grey] w-[0] [transition:0.5s] h-full"}>
      <div className="px-[1.3rem] py-[0] w-full">
        {sidebarIsOpen && (
          <div className="">
            <div className="h-[8%] flex items-center justify-between mt-4">
              <Link
                to="/"
                className="cursor-pointer font-bold text-[1.5rem] border-b-[2px] pb-[12px] w-[99%]"
              >
                Oasis
              </Link>
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
                      <Link
                        to={selection.path}
                        key={selection.selection}
                      >
                        <div className="flex items-center hover:cursor-pointer hover:bg-[#bbdefb] hover:rounded-[4px] hover:[transition:0.01s]">
                          <i className={`${selection.image} pb-[1.5px] text-[15px] pl-4 w-10`}></i>
                          <li className="flex pl-[1.1rem] text-[13px] items-center [list-style:none] cursor-pointer h-[2.1rem] border-[1px] border-[solid] border-[transparent] w-full hover:cursor-pointer hover:bg-[#bbdefb] hover:rounded-[4px] hover:[transition:0.01s] font-normal">
                            {selection.selection}
                          </li>
                        </div>
                      </Link>
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
