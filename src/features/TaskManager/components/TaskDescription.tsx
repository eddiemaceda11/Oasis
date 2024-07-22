const TaskDescription = () => {
    return (
      <div className="border h-[10.95rem] w-[45rem] rounded-lg mt-4 shadow bg-white">
        <p className="bg-slate-100 pl-4 font-medium py-1">Description</p>
        <div className="flex">
          <div>
            <p className="pl-5 text-medium py-3">Tenant submitted a ticket:</p>
            <p className="italic text-xs max-w-[20rem] ml-6">"I arrived home last night and the AC stopped working. Please send someone out to troubleshoot or fix it."</p>
          </div>
          <div className="ml-32">
            <p className="text-medium py-3">Permission To Enter: <span className="text-green-500"><i className="fa-solid fa-circle-check"></i> Yes</span></p>
            <p className="text-medium py-1">Phone: <span><i className="fa-solid fa-phone-volume"></i> 845-412-7892</span></p>
            <p className="text-medium py-3">Priority: <span className="text-orange-300"><i className="fa-solid fa-circle-check"></i> Medium</span></p>
          </div>
        </div>
      </div>
    )
  }

export default TaskDescription;