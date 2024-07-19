import { useState } from "react";
import { useDispatch } from "react-redux";
import { addActivity } from "./taskManagerSlice";
import { formatCurrentDateTime } from "@/hooks/formatDateTime";

import ActivityFeed from "./components/ActivityFeed";

// TODO - seperate necessary components into their own files

type ModalProps = {
  modalHidden: boolean;
  setModalHidden: React.Dispatch<React.SetStateAction<boolean>>;
};

const Tasks = () => {
  const [modalHidden, setModalHidden] = useState(true);

  return (
    <section className="flex justify-between items-start m-auto md:w-[48rem] lg:bg-white lg:w-[61rem] xl:w-[80rem] h-[32rem] mb-4">
      <div>
        <QuickActions
          modalHidden={modalHidden}
          setModalHidden={setModalHidden}
        />
        <TaskDetails />
        <TaskDescription />
      </div>
      {modalHidden ? (
        ""
      ) : (
        <TaskModal modalHidden={modalHidden} setModalHidden={setModalHidden} />
      )}
      <ActivityFeed />
    </section>
  );
};

const QuickActions = ({ modalHidden, setModalHidden }: ModalProps) => {
  const dispatch = useDispatch();

  return (
    <div className="border h-36 w-[45rem] rounded-lg">
      <p className="bg-slate-100 pl-4 font-medium py-1">Quick Actions</p>
      <p className="pl-5 text-medium py-3">What would you like to do next?</p>
      <div className="ml-5 flex gap-5 text-sm font-medium">
        <button
          className="border border-2 border-slate-600 rounded-md py-2 px-6"
          onClick={() => setModalHidden(!modalHidden)}
        >
          <i className="fa-solid fa-pen-to-square mr-2"></i>
          <span>Post an Update</span>
        </button>
        <button className="border border-2 border-slate-600 rounded-md py-2 px-6">
          <i className="fa-regular fa-clipboard mr-2"></i>
          <span>Update Task</span>
        </button>
        <button
          className="border border-2 border-slate-600 rounded-md py-2 px-6"
          onClick={() =>
            dispatch(
              addActivity({
                name: "Eddie Maceda",
                text: "Task Complete ✔",
              })
            )
          }
        >
          <i className="fa-regular fa-calendar-check mr-2"></i>
          <span>Complete Task</span>
        </button>
      </div>
    </div>
  );
};

const TaskDetails = () => {
  return (
    <div className="flex justify-between items-center h-32 w-[45rem] rounded-lg mt-4">
      <div className="border w-[8.3rem] h-32 rounded-lg flex flex-col items-center justify-center gap-1.5">
        <i className="flex items-center justify-center fa-solid fa-user text-xl h-10 w-10 bg-slate-100 rounded-[50%] text-slate-400"></i>
        <p className="font-medium text-sm">Created At</p>
        <span className="text-xs">{formatCurrentDateTime()}</span>
      </div>
      <div className="border w-[8.3rem] h-32 rounded-lg flex flex-col items-center justify-center gap-1.5">
        <i className="flex items-center justify-center fa-solid fa-user text-xl h-10 w-10 bg-slate-100 rounded-[50%] text-slate-400"></i>
        <p className="font-medium text-sm">Tenant</p>
        <span className="text-xs">John Doe</span>
      </div>
      <div className="border w-[8.3rem] h-32 rounded-lg flex flex-col items-center justify-center gap-1.5">
        <i className="flex items-center justify-center fa-solid fa-user text-xl h-10 w-10 bg-slate-100 rounded-[50%] text-slate-400"></i>
        <p className="font-medium text-sm">Unit #</p>
        <span className="text-xs">34</span>
      </div>
      <div className="border w-[8.3rem] h-32 rounded-lg flex flex-col items-center justify-center gap-1.5">
        <i className="flex items-center justify-center fa-solid fa-user text-xl h-10 w-10 bg-slate-100 rounded-[50%] text-slate-400"></i>
        <p className="font-medium text-sm">Due Date</p>
        <span className="text-xs">{formatCurrentDateTime()}</span>
      </div>
      <div className="border w-[8.3rem] h-32 rounded-lg flex flex-col items-center justify-center gap-1.5">
        <i className="flex items-center justify-center fa-solid fa-user text-xl h-10 w-10 bg-slate-100 rounded-[50%] text-slate-400"></i>
        <p className="font-medium text-sm">Status</p>
        <span className="text-xs">In Progress</span>
      </div>
    </div>
  );
};

const TaskDescription = () => {
  return (
    <div className="border h-[10.95rem] w-[45rem] rounded-lg mt-4">
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

const TaskModal = ({ modalHidden, setModalHidden }: ModalProps) => {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  return (
    <div>
      <form>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            dispatch(
              addActivity({
                name: "Eddie Maceda",
                text: input,
              })
            );
            setInput("");
            setModalHidden(!modalHidden);
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default Tasks;
