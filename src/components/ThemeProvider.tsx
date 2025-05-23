
import React, { ReactNode, useEffect } from "react";
import { useThemeStore, applyThemeMode } from "@/lib/theme-config";

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const { mode } = useThemeStore();

  // Apply the theme when it changes
  useEffect(() => {
    applyThemeMode(mode);
  }, [mode]);

  return <>{children}</>;
}
