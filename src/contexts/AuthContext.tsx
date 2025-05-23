
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { UserProfile } from "../types/common";

interface AuthContextType {
  currentUser: UserProfile | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name: string) => Promise<void>;
  logout: () => Promise<void>;
  isAuthenticated: boolean;
}

// Mock user data for development
const mockUser: UserProfile = {
  id: "user-123",
  name: "Demo User",
  email: "demo@example.com",
  isVerified: false,
  role: "user",
  walletAddress: "0x1a2b3c4d5e6f7g8h9i0j"
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUser] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check for existing session on mount
  useEffect(() => {
    const checkSession = async () => {
      try {
        // In a real app, this would check a stored token or session
        const storedUser = localStorage.getItem("infiworld_user");
        if (storedUser) {
          setCurrentUser(JSON.parse(storedUser));
        }
      } catch (error) {
        console.error("Failed to restore session:", error);
      } finally {
        setIsLoading(false);
      }
    };

    checkSession();
  }, []);

  // Login function
  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // In a real app, this would validate credentials with a backend
      if (email !== "demo@example.com" || password !== "password") {
        throw new Error("Invalid credentials");
      }
      
      // Set user and store in localStorage
      setCurrentUser(mockUser);
      localStorage.setItem("infiworld_user", JSON.stringify(mockUser));
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  // Register function
  const register = async (email: string, password: string, name: string) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // In a real app, this would create a new user in the backend
      const newUser: UserProfile = {
        id: `user-${Date.now()}`,
        name,
        email,
        isVerified: false,
        role: "user"
      };
      
      // Set user and store in localStorage
      setCurrentUser(newUser);
      localStorage.setItem("infiworld_user", JSON.stringify(newUser));
    } catch (error) {
      console.error("Registration failed:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  // Logout function
  const logout = async () => {
    try {
      // In a real app, this would invalidate the session with the backend
      localStorage.removeItem("infiworld_user");
      setCurrentUser(null);
    } catch (error) {
      console.error("Logout failed:", error);
      throw error;
    }
  };

  const value = {
    currentUser,
    isLoading,
    login,
    register,
    logout,
    isAuthenticated: !!currentUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
