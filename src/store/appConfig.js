import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./slices/weatherSlice";

const appConfig = configureStore({
  reducer: {
    weather: weatherReducer,
  },
});

export default appConfig;
