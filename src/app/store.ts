import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import UserReducer from '../features/User/userSlice'
import ActivityReducer from '../features/Activity/activitySlice';

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    userStore : UserReducer,
    activityStore: ActivityReducer
    
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
