import { useState } from "react";
import React from "react";
// import { formatCurrentDateTime } from "@/hooks/formatDateTime";

import QuickActions from "./components/QuickActions"
import TaskDetails from "./components/TaskDetails"
import TaskDescription from "./components/TaskDescription";
import ActivityFeed from "./components/ActivityFeed";

const Tasks = () => {
  const [postQuickActionUpdate, setPostQuickActionUpdate] = useState(false);

  return (
    <section className="relative flex justify-between items-start m-auto md:w-[48rem] lg:bg-white lg:w-[61rem] xl:w-[80rem] h-[32rem] mb-4">
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
  );
};

export default Tasks;
