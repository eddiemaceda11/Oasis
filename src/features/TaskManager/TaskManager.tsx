import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addActivity } from "./taskManagerSlice";

const Tasks = () => {
  const [modalHidden, setModalHidden] = useState(true);

  const activities = useSelector((state) => state.tasks.activities);
  console.log("activities", activities);

  return (
    <section className="border m-auto md:w-[48rem] lg:bg-white lg:w-[61rem] xl:w-[69rem] h-64 items-center mb-4">
      <div>
        <button className="border" onClick={() => setModalHidden(!modalHidden)}>
          Post an Update
        </button>
        <button className="border">New Work Order</button>
        <button className="border">Complete Task</button>
      </div>
      {modalHidden ? "" : <TaskModal />}
      <ActivityFeed activities={activities} />
    </section>
  );
};

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
    <div>
      {activities.map((each) => (
        <p key={each}>{each}</p>
      ))}
    </div>
  );
};

export default Tasks;
