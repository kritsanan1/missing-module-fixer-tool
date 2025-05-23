
import React from "react";
import { useWeather } from "@/contexts/WeatherContext";
import { Cloud, CloudRain, Sun, Loader2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function WeatherIndicator() {
  const { weather, isLoading } = useWeather();
  
  if (isLoading) {
    return (
      <Badge variant="outline" className="flex items-center gap-1">
        <Loader2 className="h-3 w-3 animate-spin" />
        <span>Loading weather...</span>
      </Badge>
    );
  }
  
  if (!weather) {
    return null;
  }
  
  const getWeatherIcon = () => {
    switch (weather.condition) {
      case "clear":
        return <Sun className="h-3 w-3 text-amber-400" />;
      case "cloudy":
        return <Cloud className="h-3 w-3 text-gray-400" />;
      case "rain":
        return <CloudRain className="h-3 w-3 text-blue-400" />;
      case "snow":
        return <Cloud className="h-3 w-3 text-white" />;
      default:
        return <Sun className="h-3 w-3 text-amber-400" />;
    }
  };
  
  return (
    <Badge variant="outline" className="flex items-center gap-1">
      {getWeatherIcon()}
      <span>{weather.temperature}°C</span>
      <span className="text-xs text-muted-foreground">{weather.location}</span>
    </Badge>
  );
}
