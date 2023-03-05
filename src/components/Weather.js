import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import '../styles/Weather.css';
import { CurrentWeather } from './CurrentWeather';
import { Forecast } from './Forecast';
import { getWeatherByCity } from '../reducers/weather';
import { getForecastByCity } from '../reducers/forecast';

export function Weather() {
  const dispatch = useDispatch();
  const [cityName, setCityName] = useState('');

  return (
    <div>
      <div className="row">
        <input
          className="textbox"
          aria-label="Typed city name"
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
        />
        <button
          className="button"
          onClick={() => { dispatch(getWeatherByCity(cityName));
            dispatch(getForecastByCity(cityName));
          }}
        >
          Search
        </button>
      </div>
      <CurrentWeather />
      <Forecast />
    </div>
  );
}
