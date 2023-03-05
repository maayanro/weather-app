import { fetchData } from "./common";
import { ERROR_INVALID_CITY, BASE_WEATHER_URL, WEATHER_API_KEY } from "../utils/constants";

export const getForecastByCity = async (city) => {
  if (!city || city === "" || city === " ") {
    const error = { message: ERROR_INVALID_CITY };
    throw(error);
  }

  const baseUrl = BASE_WEATHER_URL + "/forecast";;
  const params = `q=${city}&units=metric`;
  return await fetchData(baseUrl, WEATHER_API_KEY, params);
};