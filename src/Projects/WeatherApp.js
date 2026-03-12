import React, { useState, useEffect } from "react";

const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [weatherList, setWeatherList] = useState([]);
  const [currentLocationLoaded, setCurrentLocationLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const showWeather = async () => {
    if (!city) return;
    const cityList = weatherList.find(
      (c) => c.name.toLowerCase() === city.toLowerCase(),
    );
    if (cityList) {
      alert("City already exist");
      setCity("");
      return;
    }
    setLoading(true);
    const apiKey = "85bd8febb5de27544d35fe31c5494d9a";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.cod !== 200) {
        alert("City not found");
        setLoading(false);
        return;
      }

      setWeatherList((prev) => [data, ...prev]);
      setCity("");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      alert("city not found");
    }
  };

  const removeCity = (index) => {
    const updatedList = weatherList.filter((_, i) => i !== index);
    setWeatherList(updatedList);
  };

  const getLocationWeather = async () => {
    if (currentLocationLoaded) return;
    navigator.geolocation.getCurrentPosition(async (position) => {
      console.log("current location", position);
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      const apiKey = "85bd8febb5de27544d35fe31c5494d9a";
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
      const response = await fetch(url);
      const data = await response.json();
      const cityExists = weatherList.find(
        (c) => c.name.toLowerCase() === data.name.toLowerCase(),
      );

      if (!cityExists) {
        setWeatherList((prev) => [data, ...prev]);
        setCurrentLocationLoaded(true);
      }
    });
  };

  useEffect(() => {
    getLocationWeather();
  }, []);

  const getWeatherColor = (type) => {
    if (type === "Clear") return "bg-yellow-200";
    if (type === "Clouds") return "bg-gray-200";
    if (type === "Rain") return "bg-blue-200";
    if (type === "Snow") return "bg-cyan-200";
    return "bg-white";
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-100 via-white to-purple-100 px-4">
      <h1 className="text-indigo-800 font-bold text-5xl mt-10 p-5">
        Weather App
      </h1>

      <input
        type="text"
        value={city}
        placeholder="Enter the city name"
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            showWeather();
          }
        }}
        className="p-2 rounded-md border border-gray-300 mb-4 w-full sm:w-80"
      />

      <button
        className="bg-slate-300 font-bold p-2 rounded-lg border border-green-600 hover:bg-slate-500 mb-6 w-full sm:w-80"
        onClick={showWeather}
      >
        {loading ? (
          <div className="w-5 h-5 border-4 border-black border-t-transparent rounded-full animate-spin"></div>
        ) : (
          "Show Weather"
        )}
      </button>
      <div className="grid gap-6 mt-8 w-full max-w-6xl sm:grid-cols-2 lg:grid-cols-3">
        {weatherList.map(
          (weather, index) =>
            weather?.main &&
            weather?.weather && (
              <div
                key={index}
                className={`${getWeatherColor(weather.weather[0].main)} rounded-xl p-5 text-center shadow-md hover:shadow-xl transition`}
              >
                <h3 className="font-semibold text-3xl mb-2">
                  {weather.name}, {weather.sys.country}
                </h3>

                <p className="text-2xl font-bold mb-2">{weather.main.temp}°C</p>

                <img
                  src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                  alt={weather.weather[0].description}
                  className="mx-auto"
                />

                <p className="capitalize mt-2">
                  {weather.weather[0].description}
                </p>
                <p>Humidity: {weather.main.humidity}%</p>
                <p>Wind: {weather.wind.speed} m/s</p>
                <p>Feels Like: {weather.main.feels_like}°C</p>
                <button
                  onClick={() => removeCity(index)}
                  className="mt-3 bg-red-400 text-white px-3 py-1 rounded hover:bg-red-500"
                >
                  Remove
                </button>
              </div>
            ),
        )}
      </div>
    </div>
  );
};

export default WeatherApp;
