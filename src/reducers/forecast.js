import { createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import * as ForecastAPI from '../api/forecast';

const initialState = {
  loading: false,
  error: undefined,
  data: undefined
}

export const forecastSlice = createSlice({
  name: 'forecast',
  initialState,
  reducers: {
    setError: (state, action) => {
      const { payload } = action;
      state.error = payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getForecastByCity.pending, (state) => {
        state.error = undefined;
        state.loading = true;
      })
      .addCase(getForecastByCity.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.forecast = action.payload;
      })
      .addCase(getForecastByCity.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
        state.data = undefined;
      });
}
})

export const getForecastByCity = createAsyncThunk('forecast/getForecastByCity', async (city, { rejectWithValue }) => {
  try {
    return ForecastAPI.getForecastByCity(city);
  } catch (e) {
    return rejectWithValue(e);
  }
});

export const selectForecast = (state) => state.forecast.data;
export const selectForecastLoader = (state) => state.forecast.loading;
export const selectForecastError = (state) => state.forecast.error;

export default forecastSlice.reducer;