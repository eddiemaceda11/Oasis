import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="h-16 w-screen border border-solid mb-12">
      <div className="container flex items-center h-full w-[78rem] m-auto overflow-hidden">
        <p className="font-bold text-[28px]">Oasis</p>
        <Navbar />
        <Notifications />
        <Divider />
        <Account />
      </div>
    </header>
  );
};

const Navbar = () => {
  return (
    <nav className="text-sm font-medium ml-16 flex w-[28rem] justify-between mt-1">
      <a className="hover:text-sky-500 cursor-pointer">Rent</a>
      <a className="hover:text-sky-500 cursor-pointer">Buy</a>
      <a className="hover:text-sky-500 cursor-pointer">Sell</a>
      <a className="hover:text-sky-500 cursor-pointer">Manage properties</a>
      <Link
        to="dashboard"
        className="hover:text-sky-500 cursor-pointer"
      >
        Dashboard
      </Link>
    </nav>
  );
};

const Notifications = () => {
  return (
    <div className="ml-auto flex content-center">
      <div className="mr-3 border border-slate-300 rounded-[50%] h-10 w-10 flex justify-center items-center relative">
        <i className="fa-regular fa-bell h-[16px] mr-[.7px]"></i>
        <div className="flex justify-center items-center absolute text-[0.65rem] bg-sky-500 text-white rounded-[50%] h-5 w-5 top-[-15%] right-[-20%] font-semibold">23</div>
      </div>
      <div className="border border-slate-300  rounded-[50%] h-10 w-10 flex justify-center items-center relative">
        <i className="fa-regular fa-message mr-[.7px] mt-[1px]"></i>
        <div className="flex justify-center items-center absolute text-[0.65rem] bg-sky-500 text-white rounded-[50%] h-5 w-5 top-[-15%] right-[-20%] font-semibold">11</div>
      </div>
    </div>
  );
};

const Divider = () => {
  return <div className="bg-black w-[2px] h-9 bg-stone-200 mr-8 ml-8"></div>;
};

const Account = () => {
  return (
    <div className="">
      <p>
        <span className="text-slate-400 text-sm">Good morning</span>, <br />
        <span className="font-semibold">Eddie Maceda</span>
      </p>
    </div>
  );
};

export default Header;
