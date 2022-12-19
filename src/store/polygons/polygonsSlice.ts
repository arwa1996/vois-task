import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PolygonsData } from '../../types/Polygon';
import { getPolygons } from './polygonsAction';

type polygonsState = {
  polygons: PolygonsData | undefined;
};

const initialState: polygonsState = {
  polygons: undefined,
};

const polygonsSlice = createSlice({
  name: 'polygon',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getPolygons.fulfilled,
      (state, action: PayloadAction<PolygonsData>) => {
        state.polygons = action.payload;
      }
    );
  },
});

export default polygonsSlice.reducer;
