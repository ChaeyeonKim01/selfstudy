// https://api.nasa.gov/planetary/earth/imagery?lon=100.75&lat=1.5&date=2014-02-01&api_key=d0EaapTiAi7a6DZVNyC040kuSJzWCsv08yckD99c

import axios from "axios";
import React, { useEffect, useState } from "react";

function Weather1() {
  const [weatherData, setWeatherData] = useState();
  const getWeather = async () => {
    const res = await axios.get(
      "https://api.unsplash.com/search/photos?page=1&query=flower&client_id=45ZlKt6XKrYv8Kc4s0ejeypfqIViPTZ00ydRzMdDy4I&orientati"
    );
    setWeatherData(res.data);
  };
  useEffect(() => {
    getWeather();
  }, []);
  useEffect(() => {
    console.log(weatherData);
  }, [weatherData]);

  return <div>Weather1</div>;
}

export default Weather1;
