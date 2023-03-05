import * as WeatherAPI from '../api/weather';
import { createSlice, createAsyncThunk} from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  error: undefined,
  data: undefined
}

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setError: (state, action) => {
      const { payload } = action;
      state.error = payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getWeatherByCity.pending, (state) => {
        state.error = undefined;
        state.loading = true;
      })
      .addCase(getWeatherByCity.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.forecast = action.payload;
      })
      .addCase(getWeatherByCity.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
        state.data = undefined;
      });
}
})

export const getWeatherByCity = createAsyncThunk('weather/getWeatherByCity', async (city, { rejectWithValue }) => {
  try {
    return WeatherAPI.getWeatherByCity(city);
  } catch (e) {
    return rejectWithValue(e);
  }
});

export const selectWeahter = (state) => state.weather.data;
export const selectWeatherLoader = (state) => state.weather.loading;
export const selectWeatherError = (state) => state.weather.error;

export default weatherSlice.reducer;