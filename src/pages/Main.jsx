import { useSelector } from "react-redux";
import SearchBar from "../components/SearchBar";
import WeatherWidget from "../components/WeatherWidget";
import useCurrentWeather from "../hooks/useCurrentWeather";

const Main = () => {
  const getItem = localStorage.getItem("city");
  useCurrentWeather(getItem ? getItem : "Lahore");
  return (
    <>
      <div className="xl:w-3/12 lg:w-4/12 md:w-6/12 sm:w-10/12 w-11/12 mx-auto">
        <SearchBar />
        <WeatherWidget />
      </div>
    </>
  );
};

export default Main;
