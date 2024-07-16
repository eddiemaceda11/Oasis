import {createSlice, current} from "@reduxjs/toolkit";

const initialState = {
    activities: [],
}

const tasksSlice = createSlice({
    name: "tasks",
    initialState: initialState,
    reducers: {
        addActivity: (state, action) => {
            console.log(action.payload)
            state.activities = state.activities.concat(action.payload)
        }
    }
})

export const {
    addActivity,
} = tasksSlice.actions

export default tasksSlice.reducer