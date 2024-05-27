import { createSlice } from "@reduxjs/toolkit";

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    currWeather: {},
    location: {},
  },
  reducers: {
    setCurrWeather: (state, action) => {
      state.currWeather = action.payload;
    },
    setLocation: (state, action) => {
      state.location = action.payload;
    },
  },
});

export const { setCurrWeather, setLocation } = weatherSlice.actions;

export default weatherSlice.reducer;
