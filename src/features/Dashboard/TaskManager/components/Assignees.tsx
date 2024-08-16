const Assignees = () => {
  return (
    <div className="h-[18rem] w-[30rem]  border rounded-lg shadow bg-white overflow-hidden">
      <p className="bg-slate-100 pl-4 font-medium py-1">Assignees</p>
      <div className="p-3">
        <div className="flex items-center gap-3 mb-4">
          <i className="flex items-center justify-center fa-solid fa-user text-xl h-10 w-10 rounded-[50%] text-slate-400 bg-slate-100"></i>
          <p>John Adams</p>
        </div>
        <div className="flex items-center gap-3 mb-4">
          <i className="flex items-center justify-center fa-solid fa-user text-xl h-10 w-10 rounded-[50%] text-slate-400 bg-slate-100"></i>
          <p>Alexander Hamilton</p>
        </div>
      </div>
    </div>
  );
};
// bg-slate-100
// border h-36 w-[45rem] rounded-lg shadow bg-white

export default Assignees;
