
import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";

export default function WeatherApp(){

  const [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    feelsLike: 24.84,
    temp: 25.05,
    tempMin: 25.05,
    tempMax: 25.05,
    humidity: 47,
    weather: "haze",
  });

  
  const updateInfo = (result) => {
    setWeatherInfo(result);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Weather App By Sachin</h2>

      {/* pass correct prop */}
      <SearchBox updateInfo={updateInfo} />

      {/* display data */}
      <InfoBox info={weatherInfo} />
    </div>
  );
}