import { fetchData } from "./common";
import { BASE_WEATHER_URL, ERROR_INVALID_CITY, WEATHER_API_KEY } from "../utils/constants";

export const getWeatherByCity = async (city) => {
  if (!city || city === "" || city === " ") {
    const error = { message: ERROR_INVALID_CITY };
    throw(error);
  }

  const baseUrl = BASE_WEATHER_URL + "/weather";;
  const params = `q=${city}&units=metric`;
  return fetchData(baseUrl, WEATHER_API_KEY, params);
};