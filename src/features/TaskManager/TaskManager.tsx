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
    <section className="relative flex justify-center gap-4 items-start w-full h-[32rem] mb-4 pt-4">
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
