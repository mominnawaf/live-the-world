import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { RootState } from '../../app/store';
import { UserState, CredentialType, RootUser} from "./user.types";


const initialState: UserState = {
  user: {} as RootUser,
  loginStatus: "idle",
  loginError: '',
  trips : {}
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loginStatus = "pending";
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loginStatus = "success";
        localStorage.setItem('jwt' , action.payload.jwt) //session storage can also be used, but user will have to reauthenticate.
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state,action) => {
        state.loginError= action.error.message! + '. Please try again.'
        state.loginStatus = "rejected";
      })
      .addCase(getUserTrips.fulfilled, (state, action)=>{
        state.trips = action.payload
      })
  },
});

export const loginUser = createAsyncThunk("user/login", async (creds :CredentialType) => {
    const url :string = `${process.env.REACT_APP_BASE_URL}/auth/local`
    const user = await axios.post(
      url,
      {
        identifier: creds.identifier,
        password: creds.password,
      },
    );
    return user.data;
});

export const getUserTrips = createAsyncThunk(
  "user/trips",
  async () => {
    const trips = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/frontend/trips`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('jwt')}`,
        },
      },
    );
    return trips.data;
  },
);

export const selectUser = ((state : RootState) => state.userStore.user)
export const selectLoginError=((state: RootState)=> state.userStore.loginError)
export default userSlice.reducer;
