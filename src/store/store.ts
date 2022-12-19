import { configureStore } from '@reduxjs/toolkit';
import usersSlice from './users/usersSlice';
import polygonsSlice from './polygons/polygonsSlice';
import commonSlice from './common/CommonSlice';

const store = configureStore({
  reducer: {
    user: usersSlice,
    common: commonSlice,
    polygon: polygonsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
