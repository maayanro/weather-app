import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from '../reducers/weather'
import forecastReducder from '../reducers/forecast';

export const store = configureStore({
  reducer: {
    weather: weatherReducer,
    forecast: forecastReducder,
  },
});
