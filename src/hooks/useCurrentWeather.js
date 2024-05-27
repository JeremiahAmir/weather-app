import { useEffect } from "react";
import { WEATHER_API_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { setCurrWeather, setLocation } from "../store/slices/weatherSlice";

const useCurrentWeather = (city) => {
  const dispatch = useDispatch();
  const apiUrl = WEATHER_API_URL;
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
  const getCurrentWeather = async () => {
    const data = await fetch(`${apiUrl}key=${apiKey}&q=${city}&aqi=no`);
    const json = await data.json();
    dispatch(setCurrWeather(json?.current));
    dispatch(setLocation(json?.location));
  };
  useEffect(() => {
    getCurrentWeather();
  }, []);
  return;
};

export default useCurrentWeather;
