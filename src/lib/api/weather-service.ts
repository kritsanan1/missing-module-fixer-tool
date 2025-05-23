
import { Weather } from "../../types/common";

// Mock data for development - in production this would fetch from a weather API
const mockWeatherData: Record<string, Weather> = {
  "New York": {
    condition: "clear",
    temperature: 22,
    location: "New York, US",
    icon: "sun"
  },
  "London": {
    condition: "rain",
    temperature: 15,
    location: "London, UK",
    icon: "cloud-rain"
  },
  "Tokyo": {
    condition: "cloudy",
    temperature: 19,
    location: "Tokyo, Japan",
    icon: "cloud"
  },
  "Bangkok": {
    condition: "clear",
    temperature: 32,
    location: "Bangkok, Thailand",
    icon: "sun"
  },
  "default": {
    condition: "clear",
    temperature: 25,
    location: "Unknown",
    icon: "sun"
  }
};

export const fetchWeatherByLocation = async (location: string): Promise<Weather> => {
  // In a real implementation, this would fetch from a weather API
  // Example: return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=YOUR_API_KEY`)
  //          .then(res => res.json())
  //          .then(data => mapToWeatherData(data));
  
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 800));
  
  // Return mock data for the requested location or default
  return mockWeatherData[location] || mockWeatherData.default;
};

export const fetchWeatherByCoordinates = async (
  lat: number, 
  lng: number
): Promise<Weather> => {
  // In a real implementation, this would fetch from a weather API
  // Example: return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=YOUR_API_KEY`)
  
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 800));
  
  // For demo purposes, return a location based on rough coordinates
  if (lat > 35 && lat < 45 && lng > -80 && lng < -70) {
    return mockWeatherData["New York"];
  } else if (lat > 50 && lat < 55 && lng > -1 && lng < 1) {
    return mockWeatherData["London"];
  } else if (lat > 35 && lat < 40 && lng > 135 && lng < 140) {
    return mockWeatherData["Tokyo"];
  } else if (lat > 10 && lat < 15 && lng > 100 && lng < 105) {
    return mockWeatherData["Bangkok"];
  }
  
  return mockWeatherData.default;
};

export const getWeatherBasedOnTime = (): Weather => {
  const hour = new Date().getHours();
  
  // Night time (8 PM - 6 AM)
  if (hour < 6 || hour > 20) {
    return {
      condition: "clear",
      temperature: 18,
      location: "Night time",
      icon: "moon"
    };
  }
  
  // Morning (6 AM - 11 AM)
  if (hour < 11) {
    return {
      condition: "clear",
      temperature: 22,
      location: "Morning",
      icon: "sunrise"
    };
  }
  
  // Afternoon (11 AM - 5 PM)
  if (hour < 17) {
    return {
      condition: "clear",
      temperature: 28,
      location: "Afternoon",
      icon: "sun"
    };
  }
  
  // Evening (5 PM - 8 PM)
  return {
    condition: "clear",
    temperature: 24,
    location: "Evening",
    icon: "sunset"
  };
};
