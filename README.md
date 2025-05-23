
# Crypto Travel Companion

A web application for crypto enthusiasts and digital nomads that helps discover businesses accepting cryptocurrencies around the world, track crypto rates, and get local information.

## Project URL

**URL**: https://lovable.dev/projects/636e6713-be43-4bd6-93c6-1abe388b4c42

## Features

- 🗺️ Interactive crypto-friendly business map
- 💱 Real-time cryptocurrency exchange rates
- 🌤️ Local weather information for travelers
- 👤 User authentication system
- 📱 Fully responsive design

## Tech Stack

This project is built with:

- [Vite](https://vitejs.dev/) - Next generation frontend tooling
- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript
- [React](https://reactjs.org/) - UI library
- [React Router](https://reactrouter.com/) - Client-side routing
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Shadcn UI](https://ui.shadcn.com/) - Re-usable UI components
- [Lucide React](https://lucide.dev/) - Beautiful SVG icons
- [Tanstack React Query](https://tanstack.com/query) - Data fetching and state management
- [Recharts](https://recharts.org/) - Composable charting library

## Getting Started

### Prerequisites

- Node.js v18+ - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
- npm v9+ (comes with Node.js)

### Installation

```bash
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to the project directory
cd crypto-travel-companion

# Install dependencies
npm install

# Start the development server
npm run dev
```

The application will be available at http://localhost:8080.

## Project Structure

The project follows a feature-based structure:

```
src/
├── components/       # Reusable UI components
│   ├── crypto/       # Cryptocurrency-related components
│   ├── layout/       # Layout components (navbar, footer)
│   ├── map/          # Map-related components
│   ├── ui/           # Base UI components (shadcn)
│   └── weather/      # Weather components
├── contexts/         # React context providers
├── hooks/            # Custom React hooks
├── lib/              # Utility functions and API services
├── pages/            # Page components
└── types/            # TypeScript type definitions
```

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Lint code with ESLint

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Open a Pull Request

### Code Style Guidelines

- Use TypeScript for all new code
- Follow the existing code style (ESLint configuration)
- Write component tests for critical functionality
- Keep components small and focused on a single responsibility
- Use Tailwind CSS for styling

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Built with [Lovable](https://lovable.dev)
- Icons provided by [Lucide Icons](https://lucide.dev)
- UI components based on [shadcn/ui](https://ui.shadcn.com/)
