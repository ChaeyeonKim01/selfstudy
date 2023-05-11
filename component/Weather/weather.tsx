import axios from "axios";
import React, { useEffect, useState } from "react";

function Weather() {
  const [weather, setWeather] = useState<any>();
  const getWeather = async () => {
    const res = await axios.get(
      "https://api.openweathermap.org/data/3.0/onecall?lat=37.541&lon=126.986&exclude=hourly,daily&appid=441a547b7278423386f4342c38af3b60"
    );
    setWeather(res.data);
  };
  console.log();
  useEffect(() => {
    getWeather();
  }, []);
  useEffect(() => {
    console.log(weather);
  }, [weather]);

  const currentWeather = weather?.current?.[0];
  return (
    <div>
      <div>{currentWeather.main}</div>;<div>{currentWeather.humidity}</div>;
      {/* current > humidity
    current > weather > main */}
    </div>
  );
}

export default Weather;
