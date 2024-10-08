import { useState } from "react";

import QuickActions from "./components/QuickActions";
import TaskDetails from "./components/TaskDetails";
import TaskDescription from "./components/TaskDescription";
import ActivityFeed from "./components/ActivityFeed";
import Assignees from "./components/Assignees";

const Tasks = () => {
  const [postQuickActionUpdate, setPostQuickActionUpdate] = useState(false);
  // w-[74.38rem]

  return (
    // **** 7=27=24 TEMP ADJUST HEIGHT, NEED TO SET BACK TO H-FULL

    <div className="pt-3 w-[74.3rem] m-auto p-4 ">
      <h1 className="text-[2rem] font-medium mb-4">Tasks</h1>
      <section className="relative flex items-start gap-4 ">
        <div>
          <QuickActions
            postQuickActionUpdate={postQuickActionUpdate}
            setPostQuickActionUpdate={setPostQuickActionUpdate}
          />
          <TaskDetails />
          <TaskDescription />
        </div>
        <ActivityFeed />
      </section>
      <div className="py-4">
        <Assignees />
      </div>
    </div>
  );
};

export default Tasks;
