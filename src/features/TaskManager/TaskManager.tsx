import { useState } from "react";
import React from "react";
// import { formatCurrentDateTime } from "@/hooks/formatDateTime";

import QuickActions from "./components/QuickActions"
import TaskDetails from "./components/TaskDetails"
import TaskDescription from "./components/TaskDescription";
import ActivityFeed from "./components/ActivityFeed";

// TODO - seperate necessary components into their own files

type ModalProps = {
  modalHidden: boolean;
  setModalHidden: React.Dispatch<React.SetStateAction<boolean>>;
};

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

// const TaskModal = ({ modalHidden, setModalHidden }: ModalProps) => {
//   const [input, setInput] = useState("");

//   const dispatch = useDispatch();

//   return (
//     <div className="bg-black absolute h-[20rem] w-[30rem] top-36">
//       <form>
//         <input
//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//         />
//         <button
//           onClick={(e) => {
//             e.preventDefault();
//             dispatch(
//               addActivity({
//                 name: "Eddie Maceda",
//                 text: input,
//               })
//             );
//             setInput("");
//             setModalHidden(!modalHidden);
//           }}
//         >
//           Add
//         </button>
//       </form>
//     </div>
//   );
// };

export default Tasks;
