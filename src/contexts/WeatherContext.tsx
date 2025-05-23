
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { fetchWeatherByCoordinates, getWeatherBasedOnTime } from "../lib/api/weather-service";
import { Weather } from "../types/common";
import { useThemeStore, applyWeatherEffect } from "../lib/theme-config";

interface WeatherContextType {
  weather: Weather | null;
  isLoading: boolean;
  error: Error | null;
  refreshWeather: (lat?: number, lng?: number) => Promise<void>;
}

const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

export function WeatherProvider({ children }: { children: ReactNode }) {
  const [weather, setWeather] = useState<Weather | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const { setWeatherCondition } = useThemeStore();

  const loadWeather = async (lat?: number, lng?: number) => {
    setIsLoading(true);
    setError(null);
    try {
      let weatherData: Weather;
      
      if (lat !== undefined && lng !== undefined) {
        weatherData = await fetchWeatherByCoordinates(lat, lng);
      } else {
        // If no coordinates provided, use time-based weather
        weatherData = getWeatherBasedOnTime();
      }
      
      setWeather(weatherData);
      
      // Apply weather effect to the theme
      setWeatherCondition(weatherData.condition);
      applyWeatherEffect(weatherData.condition);
    } catch (err) {
      console.error("Failed to fetch weather:", err);
      setError(err instanceof Error ? err : new Error("Failed to fetch weather"));
    } finally {
      setIsLoading(false);
    }
  };

  // Get user location and load weather on mount
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          loadWeather(position.coords.latitude, position.coords.longitude);
        },
        () => {
          // Fall back to time-based weather if geolocation fails
          loadWeather();
        }
      );
    } else {
      // Fall back to time-based weather if geolocation not available
      loadWeather();
    }
  }, []);

  const value = {
    weather,
    isLoading,
    error,
    refreshWeather: loadWeather,
  };

  return <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>;
}

export function useWeather() {
  const context = useContext(WeatherContext);
  if (context === undefined) {
    throw new Error("useWeather must be used within a WeatherProvider");
  }
  return context;
}
