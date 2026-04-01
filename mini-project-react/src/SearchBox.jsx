import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";

export default function SearchBox({ updateInfo }) {
  const [city, setCity] = useState("");

  const API_URL =
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline";
  const API_KEY = process.env.REACT_APP_API_KEY;

  const handleChange = (evt) => {
    setCity(evt.target.value);
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    try {
      const response = await fetch(
        `${API_URL}/${city}?key=${API_KEY}&unitGroup=metric`
      );

      if (!response.ok) {
        throw new Error("City not found");
      }

      const data = await response.json();

      const result = {
        city: data.address,
        temp: data.currentConditions.temp,
        humidity: data.currentConditions.humidity,
        wind: data.currentConditions.windspeed,
        condition: data.currentConditions.conditions,
        feelsLike: data.currentConditions.feelslike,
        tempMin: data.days[0].tempmin,
        tempMax: data.days[0].tempmax,
      };

      updateInfo(result); // triggers UI update
    } catch (err) {
      console.log("Error:", err);
    }

    setCity(""); // clear input
  };

  return (
    <div className="SearchBox">
      <h2>Weather App</h2>

      <form onSubmit={handleSubmit}>
        <TextField
          label="Enter City"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />

        <br />
        <br />

        <Button variant="contained" type="submit">
          Search
        </Button>
      </form>
    </div>
  );
}