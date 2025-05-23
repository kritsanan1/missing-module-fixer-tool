
import React, { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { WeatherProvider } from "@/contexts/WeatherContext";
import { CryptoProvider } from "@/contexts/CryptoContext";
import { ThemeProvider } from "@/components/ThemeProvider";

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <ThemeProvider>
      <WeatherProvider>
        <CryptoProvider>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </CryptoProvider>
      </WeatherProvider>
    </ThemeProvider>
  );
}
