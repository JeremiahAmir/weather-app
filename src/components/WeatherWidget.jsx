import { useSelector } from "react-redux";

const WeatherWidget = () => {
  const getWeather = useSelector((store) => store.weather.currWeather);
  const getLocation = useSelector((store) => store.weather.location);

  return (
    <>
      <div className="bg-white rounded-xl px-4 py-6 text-black">
        <h2 className="text-center text-4xl mb-2">{getLocation?.name}</h2>
        <p className="text-center text-2xl mb-6">
          {getWeather?.temp_c}°C / {getWeather?.temp_f}°F
        </p>

        <div className="condition text-center mb-6">
          <img src={getWeather?.condition?.icon} className="mx-auto" alt="" />
          <p className="text-center">{getWeather?.condition?.text}</p>
        </div>

        <table className="w-full">
          <tbody>
            <tr>
              <td>Feels Like</td>
              <td className="text-right">{getWeather?.feelslike_c} °C</td>
            </tr>
            <tr>
              <td>Humidity:</td>
              <td className="text-right">{getWeather?.humidity} %</td>
            </tr>
            <tr>
              <td>Cloud Cover</td>
              <td className="text-right">{getWeather?.cloud} %</td>
            </tr>
            <tr>
              <td>Wind:</td>
              <td className="text-right">{getWeather?.wind_kph} km/h</td>
            </tr>
            <tr>
              <td>Wind direction</td>
              <td className="text-right">{getWeather?.wind_dir}</td>
            </tr>
            <tr>
              <td>Wind Gust</td>
              <td className="text-right">{getWeather?.gust_kph} km/h</td>
            </tr>
            <tr>
              <td>Pressure</td>
              <td className="text-right">{getWeather?.pressure_mb} mb</td>
            </tr>
            <tr>
              <td>Country</td>
              <td className="text-right">{getLocation?.country}</td>
            </tr>
            <tr>
              <td>Region</td>
              <td className="text-right">{getLocation?.region}</td>
            </tr>
            <tr>
              <td>Timezone</td>
              <td className="text-right">{getLocation?.tz_id}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default WeatherWidget;
