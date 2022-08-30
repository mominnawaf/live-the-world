import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { ActivityState, Activity } from './activity.type'
import { RootState } from '../../app/store';


const initialState: ActivityState = {
    activity: {} as Activity
}
const activitySlice = createSlice({
    name: "activitySlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getActivityBySlug.fulfilled, (state, action) => {
            state.activity = action.payload
        })
    }
})
export const getActivityBySlug = createAsyncThunk(
    'activity', async (slug : string) => {
        const url :string = `${process.env.REACT_APP_BASE_URL}/frontend/activities/slug/${slug}`
        const activity = await axios.get(url
        )
        return activity.data
    }
)
export const selectActivity = ((state:RootState) => state.activityStore.activity)
export default activitySlice.reducer