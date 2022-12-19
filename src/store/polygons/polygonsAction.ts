import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { PolygonsData } from '../../types/Polygon';
import { config } from '../../util/config';

const getPolygons = createAsyncThunk('polygons/getPolygons', async () => {
  const response = await axios(`${config.serverUrl}/polygons`);
  const data = (await response.data) as PolygonsData;
  return data;
});

export { getPolygons };
