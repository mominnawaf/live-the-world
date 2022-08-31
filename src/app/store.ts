import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';
import UserReducer from '../features/User/userSlice'
import ActivityReducer from '../features/Activity/activitySlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  Persistor,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}


const persistedReducer = persistReducer(persistConfig, combineReducers({userStore : UserReducer,
  activityStore: ActivityReducer}))

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    // userStore : UserReducer,
    // activityStore: ActivityReducer
    persistedReducer
    
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor : Persistor = persistStore(store)

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
