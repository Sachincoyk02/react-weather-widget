

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import AcUnitIcon from "@mui/icons-material/AcUnit";

export default function InfoBox({ info }) {

  //  Prevent crash
  if (!info) return <h3>No Data</h3>;

  const INIT_URL =
    "https://images.unsplash.com/photo-1472145246862-b24cf25c4a36?w=800";

  const HOT_URL =
    "https://images.unsplash.com/photo-1502082553048-f009c37129b9"; // sunny

  const COLD_URL =
    "https://images.unsplash.com/photo-1608889175123-8ee362201f81?w=800"; // cold

  const RAIN_URL =
     "https://images.unsplash.com/photo-1608889175123-8ee362201f81?w=800";// rain

  //  image logic
  let imageUrl = 

   info.humidity > 80
      ? RAIN_URL
      : info.temp > 30
      ? HOT_URL
      : info.temp < 15
      ? COLD_URL
      : INIT_URL;

        // Icon logic
      let WeatherIcon =
      info.humidity > 80
      ? <ThunderstormIcon />
      : info.temp > 30
      ? <WbSunnyIcon />
      : <AcUnitIcon />;

     return (
     <div className="InfoBox">
      <div className="cardContainer">

        <Card sx={{ maxWidth: 345, margin: "auto", marginTop: 3 }}>

           <CardMedia
            component="img"
            height="140"
            image={imageUrl}
            alt="weather"
          />

          <CardContent>
            <Typography gutterBottom variant="h5">
              Weather - {info.weather}
            </Typography>

            <Typography variant="body2">
              🌡 Temp: {info.temp}°C
            </Typography>

            <Typography variant="body2">
              🤗 Feels Like: {info.feelsLike || "N/A"}°C
            </Typography>

            <Typography variant="body2">
              🔽 Min Temp: {info.tempMin || "N/A"}°C
            </Typography>

            <Typography variant="body2">
              🔼 Max Temp: {info.tempMax || "N/A"}°C
            </Typography>

            <Typography variant="body2">
              💧 Humidity: {info.humidity}%
            </Typography>
          </CardContent>

        </Card>

      </div>
    </div>
  );
}