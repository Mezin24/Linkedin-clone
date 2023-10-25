import { configureStore } from '@reduxjs/toolkit';
import { StateSchema } from './shema';
import { userReducer } from './user/userSlice';

export const store = configureStore<StateSchema>({
  reducer: {
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
