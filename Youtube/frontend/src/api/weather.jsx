




/*import React, { useEffect, useState } from "react";

function Weather() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("Weather Data:", data);
        setWeather(data); 
      })
      .catch((err) => console.error("Error fetching weather:", err));
  }, []);

  return (
    <div className="p-4 text-center">
      <h1 className="text-2xl font-bold mb-4">Weather</h1>

      {weather ? (
        <>
          <p><strong>Latitude:</strong> {weather.latitude}</p>
          <p><strong>Longitude:</strong> {weather.longitude}</p>
          <p><strong>Current Temperature:</strong> {weather.current?.temperature_2m}°C</p>
          <p><strong>Wind Speed:</strong> {weather.current?.wind_speed_10m} km/h</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Weather;*/
