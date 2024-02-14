"use client";
import { useEffect, useState } from "react";
import { getLocationData, getWeatherData } from "../utils/api";
import { WeatherDislpay } from "./WeatherDislpay";
import { useLocationContext } from "./Weathercontext";
import WeatherForm from "./WeatherForm";

const Weathermain = () => {
  const { location } = useLocationContext();
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!location) return; // Skip if location is empty
        const { latitude, longitude } = await getLocationData(location);
        const data = await getWeatherData(latitude, longitude);
        setWeatherData(data);
      } catch (error: any) {
        setError(error.message);
      }
    };

    fetchData();
  }, [location]); // Re-run effect on location change

  return (
    <main>
      <WeatherForm />
      {weatherData ? (
        <WeatherDislpay data={weatherData} />
      ) : error ? (
        <p className="mt-14">Error fetching weather data: {error}</p>
      ) : (
        <p className="mt-14">Enter Location To Show Weather Updates</p>
      )}
    </main>
  );
};

export default Weathermain;
