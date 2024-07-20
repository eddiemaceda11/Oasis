import { useDispatch } from "react-redux";
import { addActivity } from "../taskManagerSlice"
import { useState } from "react";
import React from 'react'

type ModalProps = {
    postQuickActionUpdate: boolean;
    setPostQuickActionUpdate: React.Dispatch<React.SetStateAction<boolean>>;
};

const QuickActions = ({ postQuickActionUpdate, setPostQuickActionUpdate }: ModalProps) => {
    const [input, setInput] = useState('hi')

    const dispatch = useDispatch();

    return (
        <div className="border h-36 w-[45rem] rounded-lg">
            <p className="bg-slate-100 pl-4 font-medium py-1">Quick Actions</p>
            {!postQuickActionUpdate ? <div>
                <p className="pl-5 text-medium py-3">What would you like to do next?</p>
                <div className="ml-5 flex gap-5 text-sm font-medium">
                    <button
                        className="border border-2 border-slate-600 rounded-md py-2 px-6"
                        onClick={() => setPostQuickActionUpdate(!postQuickActionUpdate)}
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
            </div> :
            <div>
                <p className="pl-5 text-medium py-3">Enter your message:</p>
                <div className="flex items-center">
                    <textarea value={input} onChange={(e) => setInput(e.target.value)} className="ml-5 w-[36rem] h-12 pl-2 pt-1 break-words"></textarea>
                    <button
                        className="border border-2 border-slate-600 rounded-md py-2 px-6 ml-4"
                        onClick={() => {
                            dispatch(addActivity({
                                name: "Eddie Maceda",
                                text: input,
                            }))
                            setPostQuickActionUpdate(!postQuickActionUpdate)}
                        }
                    >Post</button>
                </div>
            </div>}

        </div>
    );
};

export default QuickActions;