
# System Architecture Diagram

```mermaid
graph TD
    subgraph "Frontend"
        A[Browser] --> B[React App]
        
        subgraph "Pages"
            P1[HomePage]
            P2[MapPage]
            P3[Login/Register]
            P4[NotFound]
        end
        
        subgraph "Components"
            C1[Layout Components]
            C2[Map Components]
            C3[Crypto Components]
            C4[Weather Components]
            C5[UI Components]
        end
        
        subgraph "State Management"
            S1[AuthContext]
            S2[CryptoContext]
            S3[WeatherContext]
            S4[React Query]
        end
    end
    
    subgraph "External Services"
        E1[Crypto API]
        E2[Weather API]
        E3[Map API]
    end

    B --> P1 & P2 & P3 & P4
    P1 & P2 & P3 & P4 --> C1 & C2 & C3 & C4 & C5
    C1 & C2 & C3 & C4 --> S1 & S2 & S3 & S4
    S2 --> E1
    S3 --> E2
    C2 --> E3

    classDef page fill:#f9f,stroke:#333,stroke-width:2px;
    classDef component fill:#bbf,stroke:#33f,stroke-width:1px;
    classDef state fill:#bfb,stroke:#3f3,stroke-width:1px;
    classDef external fill:#fbb,stroke:#f33,stroke-width:1px;
    
    class P1,P2,P3,P4 page;
    class C1,C2,C3,C4,C5 component;
    class S1,S2,S3,S4 state;
    class E1,E2,E3 external;
```

## Component Overview

### Pages
- **HomePage**: Landing page with hero, features, and testimonials sections
- **MapPage**: Interactive map displaying crypto-friendly locations
- **Login/Register**: User authentication pages
- **NotFound**: 404 error page

### Key Components
- **Layout Components**: Main layout, navigation bar, and footer
- **Map Components**: Interactive map, filters, and location details sidebar
- **Crypto Components**: Exchange rate displays and cryptocurrency cards
- **Weather Components**: Weather indicators for travel locations
- **UI Components**: Base reusable UI components from shadcn/ui

### State Management
- **AuthContext**: User authentication state
- **CryptoContext**: Cryptocurrency data and rates
- **WeatherContext**: Weather information based on location
- **React Query**: External API data fetching and caching

### External Services
- **Crypto API**: Price and exchange rate data
- **Weather API**: Weather data by location
- **Map API**: Map rendering and location data

## Data Flow

1. User interacts with the application through pages
2. Components render UI and handle user interactions
3. Context providers manage application state
4. React Query handles API data fetching, caching, and refreshing
5. External services provide real-time data

## Authentication Flow

```mermaid
sequenceDiagram
    participant User
    participant App
    participant AuthContext
    participant API
    
    User->>App: Visit Login Page
    User->>App: Enter credentials
    App->>AuthContext: Call login()
    AuthContext->>API: POST /auth/login
    API-->>AuthContext: Return JWT token
    AuthContext-->>App: Update auth state
    App-->>User: Redirect to Dashboard
```

## Feature Extension Points

When adding new features, consider these extension points:

1. **New Page**: Add a new page in the pages directory
2. **New Component**: Create in the appropriate component subfolder
3. **New API Service**: Add to the lib/api directory
4. **New Context**: Create in the contexts directory if needed for global state
