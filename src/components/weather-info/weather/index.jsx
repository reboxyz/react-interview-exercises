import React, { useEffect, useState } from "react";
import Search from "../search";
import "./styles.css";

const Weather = () => {
  const [search, setSearch] = useState("tokyo");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [weatherData, setWeatherData] = useState({});

  const API_KEY = "092ca547a32bc7705f7da327c2239d5a";

  const fetchWeatherData = async () => {
    // https://openweathermap.org/api
    // https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=1bd228cbfef0e747d093eda11ddce255

    try {
      setLoading(true);
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_KEY}`
      );

      if (!response.ok) {
        setErrorMessage(response.errorMessage);
        console.log(response);
      } else {
        const data = await response.json();
        console.log(data);
        setWeatherData(data);
      }
    } catch (error) {
      console.log(error);
      setErrorMessage(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async () => {
    await fetchWeatherData();
  };

  const getCurrentDate = () => {
    return new Date().toLocaleDateString("en-us", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  useEffect(() => {
    fetchWeatherData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="weather-app">
      <Search
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      {loading && <div className="weather-loading">Loading data...</div>}
      {errorMessage && (
        <div className="weather-error">Error: {errorMessage}</div>
      )}
      {weatherData && (
        <div>
          <div className="search-city-name">
            <h2>
              {weatherData?.name}, <span>{weatherData?.sys?.country}</span>
            </h2>
          </div>
          <div className="search-date">{getCurrentDate()}</div>
          <div className="search-temp">{weatherData?.main?.temp}</div>
          <p className="search-description">
            {weatherData?.weather?.length > 0 &&
              weatherData?.weather[0]?.description}
          </p>
          <div className="search-weather-info">
            <div className="search-weather-info-column">
              <div>
                <p className="search-wind">{weatherData?.wind?.speed}</p>
                <p>Wind Speed</p>
              </div>
            </div>
            <div className="search-weather-info-column">
              <div>
                <p className="search-humidity">{weatherData?.main?.humidity}</p>
                <p>Humidity</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
