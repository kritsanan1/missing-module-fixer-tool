import { create } from "zustand";
import { persist } from "zustand/middleware";

type ThemeMode = "light" | "dark" | "system" | "auto";
type WeatherCondition = "clear" | "rain" | "cloudy" | "snow";

interface ThemeState {
  mode: ThemeMode;
  weatherCondition: WeatherCondition | null;
  setMode: (mode: ThemeMode) => void;
  setWeatherCondition: (condition: WeatherCondition | null) => void;
  toggleMode: () => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      mode: "dark",
      weatherCondition: null,
      setMode: (mode) => set({ mode }),
      setWeatherCondition: (condition) => set({ weatherCondition: condition }),
      toggleMode: () => set((state) => ({ 
        mode: state.mode === "dark" ? "light" : "dark" 
      })),
    }),
    {
      name: "theme-storage",
    }
  )
);

export const applyThemeMode = (mode: ThemeMode) => {
  // If auto mode, determine by time of day
  if (mode === "auto") {
    const hours = new Date().getHours();
    const isDayTime = hours > 6 && hours < 18;
    document.documentElement.classList.toggle("dark", !isDayTime);
    return;
  }

  // Otherwise apply the specified mode
  if (mode === "dark") {
    document.documentElement.classList.add("dark");
  } else if (mode === "light") {
    document.documentElement.classList.remove("dark");
  } else if (mode === "system") {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.classList.toggle("dark", prefersDark);
  }
};

export const applyWeatherEffect = (condition: WeatherCondition | null) => {
  // Remove any existing weather overlays
  const existingOverlay = document.querySelector(".weather-overlay");
  if (existingOverlay) {
    existingOverlay.remove();
  }

  // If no condition specified, stop here
  if (!condition) return;

  // Create a new weather overlay
  const overlay = document.createElement("div");
  overlay.className = `weather-overlay weather-${condition}`;
  
  // Add specific weather effects
  if (condition === "rain") {
    // Add rain drops
    for (let i = 0; i < 100; i++) {
      const drop = document.createElement("div");
      drop.className = "rain-drop";
      drop.style.left = `${Math.random() * 100}%`;
      drop.style.animationDuration = `${0.5 + Math.random() * 1}s`;
      drop.style.animationDelay = `${Math.random() * 2}s`;
      overlay.appendChild(drop);
    }
  }

  document.body.appendChild(overlay);
};
