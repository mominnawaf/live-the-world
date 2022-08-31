import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { ActivityState, Activity, NearByActivitiesType } from './activity.type'
import { RootState } from '../../app/store';
import { toast } from "react-toastify";


const initialState: ActivityState = {
    activity: {} as Activity,
    nearByActivities: {} as NearByActivitiesType
}
const activitySlice = createSlice({
    name: "activitySlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getActivityBySlug.fulfilled, (state, action) => {
            state.activity = action.payload
        })
        .addCase(getActivityBySlug.rejected,()=>{
            toast.error('Something went wrong')
        })
        .addCase(getNearByActivities.fulfilled, (state, action) => {
            state.nearByActivities = action.payload
        })
        .addCase(getNearByActivities.rejected, ()=>{
            toast.error('something went wrong')
        })
    }
})
export const getActivityBySlug = createAsyncThunk(
    'activity', async (slug: string) => {
        const url: string = `${process.env.REACT_APP_BASE_URL}/frontend/activities/slug/${slug}`
        const activity = await axios.get(url
        )
        return activity.data
    }
)
export const getNearByActivities = createAsyncThunk(
    "activity/nearby",
    async (activityId: number) => {
        const url: string = `${process.env.REACT_APP_BASE_URL}/frontend/activities/nearby/${activityId}`
        const nearby = await axios.get(
            url,
        );
        return nearby.data
    },
);
export const selectActivity = ((state: RootState) => state.activityStore.activity)
export const selectNearBYActivities =((state :RootState)=> state.activityStore.nearByActivities)
export default activitySlice.reducer