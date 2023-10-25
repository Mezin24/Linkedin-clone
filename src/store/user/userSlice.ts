import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { User, UserSchema } from './user';

const initialState: UserSchema = {
  user: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logoot: (state) => {
      state.user = null;
    },
    login: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
  },
});

export const { login, logoot } = userSlice.actions;

export const { reducer: userReducer } = userSlice;
