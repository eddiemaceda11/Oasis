import { formatCurrentDateTime } from "@/hooks/formatDateTime";
import React from 'react';

const TaskDetails = () => {
    return (
      <div className="flex justify-between items-center h-32 w-[45rem] rounded-lg mt-4">
        <div className="shadow border w-[8.3rem] h-32 rounded-lg flex flex-col items-center justify-center gap-1.5">
          <i className="flex items-center justify-center fa-solid fa-user text-xl h-10 w-10 bg-slate-100 rounded-[50%] text-slate-400"></i>
          <p className="font-medium text-sm">Created At</p>
          <span className="text-xs">{formatCurrentDateTime()}</span>
        </div>
        <div className="shadow border w-[8.3rem] h-32 rounded-lg flex flex-col items-center justify-center gap-1.5">
          <i className="flex items-center justify-center fa-solid fa-user text-xl h-10 w-10 bg-slate-100 rounded-[50%] text-slate-400"></i>
          <p className="font-medium text-sm">Tenant</p>
          <span className="text-xs">John Doe</span>
        </div>
        <div className="shadow border w-[8.3rem] h-32 rounded-lg flex flex-col items-center justify-center gap-1.5">
          <i className="flex items-center justify-center fa-solid fa-user text-xl h-10 w-10 bg-slate-100 rounded-[50%] text-slate-400"></i>
          <p className="font-medium text-sm">Unit #</p>
          <span className="text-xs">34</span>
        </div>
        <div className="shadow border w-[8.3rem] h-32 rounded-lg flex flex-col items-center justify-center gap-1.5">
          <i className="flex items-center justify-center fa-solid fa-user text-xl h-10 w-10 bg-slate-100 rounded-[50%] text-slate-400"></i>
          <p className="font-medium text-sm">Due Date</p>
          <span className="text-xs">{formatCurrentDateTime()}</span>
        </div>
        <div className="shadow border w-[8.3rem] h-32 rounded-lg flex flex-col items-center justify-center gap-1.5">
          <i className="flex items-center justify-center fa-solid fa-user text-xl h-10 w-10 bg-slate-100 rounded-[50%] text-slate-400"></i>
          <p className="font-medium text-sm">Status</p>
          <span className="text-xs">In Progress</span>
        </div>
      </div>
    );
  };

  export default TaskDetails