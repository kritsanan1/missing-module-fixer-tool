
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { useThemeStore } from "@/lib/theme-config";
import { Moon, Sun, User, Menu, X, MapPin, ShoppingBag, Briefcase, Plane } from "lucide-react";

export function Navbar() {
  const { isAuthenticated, currentUser, logout } = useAuth();
  const { mode, toggleMode } = useThemeStore();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
  return (
    <header className="border-b border-blue-900/20 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <div className="text-amber-400 text-2xl">∞</div>
            <span className="ml-2 font-bold">InfiWorld</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/map" className="flex items-center hover:text-amber-400 transition-colors">
            <MapPin size={16} className="mr-1" /> Map
          </Link>
          <Link to="/marketplace" className="flex items-center hover:text-amber-400 transition-colors">
            <ShoppingBag size={16} className="mr-1" /> Marketplace
          </Link>
          <Link to="/freelance" className="flex items-center hover:text-amber-400 transition-colors">
            <Briefcase size={16} className="mr-1" /> Freelance
          </Link>
          <Link to="/travel" className="flex items-center hover:text-amber-400 transition-colors">
            <Plane size={16} className="mr-1" /> Travel
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
            onClick={toggleMode}
          >
            {mode === "dark" ? (
              <Sun className="h-[1.2rem] w-[1.2rem]" />
            ) : (
              <Moon className="h-[1.2rem] w-[1.2rem]" />
            )}
            <span className="sr-only">Toggle theme</span>
          </Button>

          {isAuthenticated ? (
            <div className="flex items-center space-x-4">
              <Link to="/dashboard">
                <Button variant="ghost" className="flex items-center">
                  <User size={16} className="mr-2" />
                  {currentUser?.name}
                </Button>
              </Link>
              <Button variant="outline" onClick={() => logout()}>
                Logout
              </Button>
            </div>
          ) : (
            <div className="hidden md:flex items-center space-x-4">
              <Link to="/login">
                <Button variant="ghost">Login</Button>
              </Link>
              <Link to="/register">
                <Button className="bg-amber-400 hover:bg-amber-500 text-black font-medium">
                  Sign Up
                </Button>
              </Link>
            </div>
          )}

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden p-4 bg-background border-t border-blue-900/20">
          <nav className="flex flex-col space-y-4">
            <Link
              to="/map"
              className="flex items-center hover:text-amber-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <MapPin size={16} className="mr-2" /> Map
            </Link>
            <Link
              to="/marketplace"
              className="flex items-center hover:text-amber-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <ShoppingBag size={16} className="mr-2" /> Marketplace
            </Link>
            <Link
              to="/freelance"
              className="flex items-center hover:text-amber-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <Briefcase size={16} className="mr-2" /> Freelance
            </Link>
            <Link
              to="/travel"
              className="flex items-center hover:text-amber-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <Plane size={16} className="mr-2" /> Travel
            </Link>
            
            {!isAuthenticated && (
              <>
                <Link
                  to="/login"
                  className="flex items-center hover:text-amber-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-amber-400 hover:bg-amber-500 text-black font-medium px-4 py-2 rounded-md text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign Up
                </Link>
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
