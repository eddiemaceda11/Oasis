import {createSlice, current} from "@reduxjs/toolkit";
import { formatCurrentDateTime } from "@/hooks/formatDateTime";

type ActivityProps = {
    name: string,
    text: string,
    timestamp: string
}

type InitialActivityState = {
    activities: ActivityProps[]
}

const initialState: InitialActivityState = {
    activities: [],
}

const tasksSlice = createSlice({
    name: "tasks",
    initialState: initialState,
    reducers: {
        addActivity: (state, action) => {
            const {name, text} = action.payload
            const timestamp = formatCurrentDateTime();
            console.log(action.payload)
            state.activities = state.activities.concat({
                name,
                text,
                timestamp
            })
        }
    }
})

export const {
    addActivity,
} = tasksSlice.actions

export default tasksSlice.reducer