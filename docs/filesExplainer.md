
# Project Files Structure

This file provides an overview of all files in the project, their purpose, and their relative complexity (indicated by colored dots).

- 🟢 - Simple file (0-3 imports)
- 🟡 - Moderate complexity (4-7 imports)
- 🔴 - Complex file (8+ imports)

## Root Files

- `vite.config.ts` 🟢 - Vite configuration file defining build settings and plugins
- `tailwind.config.ts` 🟢 - Tailwind CSS configuration with custom theme settings
- `README.md` 🟢 - Project overview and getting started guide

## Source Code (`/src`)

### Components

#### Layout
- `src/components/layout/MainLayout.tsx` 🟡 - Main application layout wrapper
- `src/components/layout/Navbar.tsx` 🟡 - Navigation bar component
- `src/components/layout/Footer.tsx` 🟢 - Footer component

#### Map
- `src/components/map/MapComponent.tsx` 🟡 - Interactive crypto map with markers
- `src/components/map/MapFilters.tsx` 🟡 - Filtering controls for the map
- `src/components/map/MapSidebar.tsx` 🔴 - Sidebar with detailed location information

#### Crypto
- `src/components/crypto/CryptoCard.tsx` 🟢 - Display card for cryptocurrency information
- `src/components/crypto/CryptoRates.tsx` 🟡 - Component displaying current crypto exchange rates

#### Home
- `src/components/home/HeroSection.tsx` 🟡 - Landing page hero section
- `src/components/home/FeatureSection.tsx` 🟡 - Feature highlights section
- `src/components/home/TestimonialSection.tsx` 🟡 - User testimonials section

#### Weather
- `src/components/weather/WeatherIndicator.tsx` 🟡 - Weather information display component

#### UI Components
- `src/components/ui/` 🟢 - Collection of shadcn/ui components (buttons, forms, dialogs, etc.)

### Pages
- `src/pages/HomePage.tsx` 🟡 - Main landing page
- `src/pages/Login.tsx` 🟡 - User login page
- `src/pages/Register.tsx` 🟡 - User registration page
- `src/pages/MapPage.tsx` 🟡 - Interactive crypto map page
- `src/pages/NotFound.tsx` 🟢 - 404 error page

### Contexts
- `src/contexts/AuthContext.tsx` 🟡 - Authentication state management
- `src/contexts/CryptoContext.tsx` 🟡 - Cryptocurrency data management
- `src/contexts/WeatherContext.tsx` 🟡 - Weather data management

### Hooks
- `src/hooks/use-toast.ts` 🟢 - Toast notification hook
- `src/hooks/use-mobile.tsx` 🟢 - Mobile device detection hook

### Library
- `src/lib/utils.ts` 🟢 - Utility functions
- `src/lib/theme-config.ts` 🟢 - Theme configuration
- `src/lib/api/crypto-service.ts` 🟢 - Cryptocurrency API service
- `src/lib/api/weather-service.ts` 🟢 - Weather API service

### Types
- `src/types/common.ts` 🟢 - Common TypeScript type definitions
