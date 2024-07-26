import { useSelector } from "react-redux";
import { type RootState } from "../../../store";
import React from "react";

const ActivityFeed = () => {
  const activities = useSelector((state: RootState) => state.tasks.activities);
  console.log("activities", activities);

  return (
    <div className="border rounded-lg h-[30rem] w-[26rem] shadow overflow-hidden">
      <p className="pl-3 py-1 font-medium bg-slate-100">Activity Feed</p>
      <div className="h-full bg-white overflow-y-auto">
        {activities.length < 1 && <p className="ml-3 pt-3 italic">No activies logged...</p>}
        {activities.map((activity) => (
          <div
            key={activity.text}
            className="p-3"
          >
            <div className="flex relative">
              <i className="flex items-center justify-center fa-solid fa-user absolute text-xl h-10 w-10 bg-slate-100 rounded-[50%] text-slate-400"></i>
              <p className="font-medium text-sm ml-14">{activity.name} updated this task</p>
              <p className="font-medium text-xs ml-auto text-slate-500">{activity.timestamp}</p>
              <></>
            </div>
            <p className="text-xs w-[18rem] ml-14">"{activity.text}"</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;
