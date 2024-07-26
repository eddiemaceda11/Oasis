import { useState } from "react";
import React from "react";
// import { formatCurrentDateTime } from "@/hooks/formatDateTime";

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
    <div className="h-[820px] w-[100%] bg-[#f3f3f3] overflow-hidden">
      <div className="pt-4 w-[74.3rem] m-auto p-4">
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
    </div>
  );
};

export default Tasks;
