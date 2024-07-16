import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addActivity } from "./taskManagerSlice";

const Tasks = () => {
  const [modalHidden, setModalHidden] = useState(true);

  const activities = useSelector((state) => state.tasks.activities);
  console.log("activities", activities);

  return (
    <section className="border m-auto md:w-[48rem] lg:bg-white lg:w-[61rem] xl:w-[69rem] h-[72rem] items-center mb-4">
      <QuickActions modalHidden={modalHidden} setModalHidden={setModalHidden}/>
      {modalHidden ? "" : <TaskModal />}
      <ActivityFeed activities={activities} />
    </section>
  );
};

const QuickActions = ({modalHidden, setModalHidden}) => {
  return (
  <div className="border h-32">
    <p className="bg-slate-100 pl-4 font-medium">Quick Actions</p>
    <p className="pl-5 text-medium py-3">What would you like to do next?</p>
    <button className="border" onClick={() => setModalHidden(!modalHidden)}>
      Post an Update
    </button>
    <button className="border">New Work Order</button>
    <button className="border">Complete Task</button>
  </div>)
}

const TaskModal = () => {
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
            dispatch(addActivity(input));
            setInput("");
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
};

const ActivityFeed = ({ activities }: { activities: string[] }) => {
  return (
    <div className=" border rounded-lg bg-slate-100 h-[30rem] w-[34rem] overflow-hidden">
      <p className="bg-slate-100 pl-3 py-1 font-medium">Activity Feed</p>
      <div className="h-full bg-white">
        <div className="p-3">
          <div className="flex relative">
           <i className="flex items-center justify-center fa-solid fa-user absolute text-xl h-10 w-10 bg-slate-100 rounded-[50%] text-slate-400"></i>
           <p className="font-medium text-sm ml-14">John Doe updated this task</p>
          </div>
          <p className="text-xs w-[18rem] ml-14">"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, vel."</p>
        </div>
        <div className="p-3">
          <div className="flex relative">
           <i className="flex items-center justify-center fa-solid fa-user absolute text-xl h-10 w-10 bg-slate-100 rounded-[50%] text-slate-400"></i>
           <p className="font-medium text-sm ml-14">John Doe updated this task</p>
          </div>
          <p className="text-xs w-[18rem] ml-14">"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, vel."</p>
        </div>
        <div className="p-3">
          <div className="flex relative">
           <i className="flex items-center justify-center fa-solid fa-user absolute text-xl h-10 w-10 bg-slate-100 rounded-[50%] text-slate-400"></i>
           <p className="font-medium text-sm ml-14">John Doe updated this task</p>
          </div>
          <p className="text-xs w-[18rem] ml-14">"Lorem ipsum dolor sit amet consectetur, adipisicing elit."</p>
        </div>
      </div>
      {/* {activities.map((each) => (
        <p key={each} >{each}</p>
      ))} */}
    </div>
  );
};

export default Tasks;
