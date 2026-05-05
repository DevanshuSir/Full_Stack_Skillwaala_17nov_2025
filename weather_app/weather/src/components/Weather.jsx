import React, { useState } from "react";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const Api_Key = "e10e48cd5c1df35f6da8d75df73a8bb5";

  const handleData = async () => {
    try {
      setError("")
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Api_Key}&units=metric`,
      );
      if (!response.ok) throw new Error("City Not Found.🥺");
      const LiveData = await response.json();
      setWeather(LiveData);
    } catch (error) {
      setWeather(null)
      setError(error.message);
    }
  };

  console.log(weather);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-black opacity-85 backdrop-blur-lg rounded-3xl shadow-2xl text-white p-6">
        <h1 className="text-5xl font-semibold text-center mb-6 ">
          Weather Forecast
        </h1>
        <div className="flex flex-col gap-5">
          <input
            type="text"
            name=""
            id=""
            className="p-3 rounded-xl bg-white text-black focus:outline-none "
            placeholder="Enter City Name..."
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
            }}
            onKeyDown={(e) => e.key === "Enter" && handleData()}
          />
          <button
            className="bg-white text-red-500 font-semibold py-2 rounded-xl hover:bg-green-500 hover:text-white hover:cursor-pointer"
            onClick={handleData}
          >
            Search Weather 🔍
          </button>
        </div>
        {error && <p className="text-red-500 mt-4 text-center">{error}</p>}

        {weather && (
          <div className="text-center">
            <img
              src={`https://openweathermap.org/payload/api/media/file/${weather.weather[0].icon}.png`}
              alt=""
              className="mx-auto h-32 w-32 object-contain mb-4"
            />
            <h2 className="text-3xl font-bold">
              {weather.name}/{weather.sys.country}
            </h2>
            <p className="text-xl capitalize">{weather.weather[0].description}</p>

            <p className="text-5xl font-extrabold mt-2">{weather.main.temp}°C</p>

            <div className="grid grid-cols-3 gap-2 mt-4 text-sm">
              <div className="bg-white opacity-90 rounded-xl p-2 text-black">
                <p className="font-semibold">Humidity</p>
                <p>{weather.main.humidity} %</p>
              </div>
              <div className="bg-white opacity-90 rounded-xl p-2 text-black">
                <p className="font-semibold">Wind</p>
                <p>{weather.wind.speed} m/s</p>
              </div>
              <div className="bg-white opacity-90 rounded-xl p-2 text-black">
                <p className="font-semibold">Clouds</p>
                <p>{weather.clouds.all} %</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;
