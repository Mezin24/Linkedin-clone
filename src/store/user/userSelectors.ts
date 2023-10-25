import { StateSchema } from 'store/shema';

export const getUser = (state: StateSchema) => state.user.user;
