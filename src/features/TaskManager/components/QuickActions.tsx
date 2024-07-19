import { useDispatch } from "react-redux";
import { addActivity } from "../taskManagerSlice"

type ModalProps = {
    modalHidden: boolean;
    setModalHidden: React.Dispatch<React.SetStateAction<boolean>>;
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

  export default QuickActions;