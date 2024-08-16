const TableHeader = () => {
  return (
    <div className="w-full border-b">
      <div className="flex h-[2rem] items-center bg-slate-100 ">
        <div className="text-left w-[13.25rem]  pl-4 ">Name</div>
        <div className="text-center w-[16.25rem] ">Unit</div>
        <div className="text-center w-[16rem] ">Email</div>
        <div className="text-center w-[14rem] ">Phone</div>
        <div className="text-center  w-[9.5rem]">Price</div>
      </div>
    </div>
  );
};

export default TableHeader;
