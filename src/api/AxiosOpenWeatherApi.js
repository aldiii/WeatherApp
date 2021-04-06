import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
});

export const getCurrentWeather = async (city, lang) => {
  const response = await instance.get(
    `/weather?q=${city}&appid=${process.env.REACT_APP_OW_API_KEY}&units=metric&lang=${lang}`
  );
  const currentWeather = response.data;
  return currentWeather;
};

export const getDailyForecast = async (coords, lang) => {
  const response = await instance.get(
    `/onecall?lat=${coords.lat}&lon=${coords.lon}&appid=${process.env.REACT_APP_OW_API_KEY}&exclude=minutely,current&units=metric&lang=${lang}`
  );
  const dailyWeather = response.data;
  return dailyWeather;
};

//data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
