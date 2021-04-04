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
