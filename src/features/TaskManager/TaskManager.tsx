import { useState } from "react";
import { useDispatch } from "react-redux";
import { addActivity } from "./taskManagerSlice";

import ActivityFeed from "./components/ActivityFeed";

// TODO - seperate necessary components into their own files

type ModalProps = {
  modalHidden: boolean;
  setModalHidden: React.Dispatch<React.SetStateAction<boolean>>;
};

const Tasks = () => {
  const [modalHidden, setModalHidden] = useState(true);

  return (
    <section className="flex justify-between items-start m-auto md:w-[48rem] lg:bg-white lg:w-[61rem] xl:w-[80rem] h-[72rem] mb-4">
      <QuickActions modalHidden={modalHidden} setModalHidden={setModalHidden} />
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
    <div className="border h-32 w-[45rem] rounded-lg">
      <p className="bg-slate-100 pl-4 font-medium">Quick Actions</p>
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
