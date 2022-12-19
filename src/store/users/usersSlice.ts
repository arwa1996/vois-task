import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserType } from '../../types/UserType';
import { getUsers } from './usersAction';

type usersState = {
  users: UserType[];
};

const initialState: usersState = {
  users: [],
};

const usersSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.users = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      getUsers.fulfilled,
      (state, action: PayloadAction<UserType[]>) => {
        state.users = action.payload;
      }
    );
  },
});

export const { setUser } = usersSlice.actions;
export default usersSlice.reducer;
