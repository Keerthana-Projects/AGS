"use client";

import React, { createContext, useContext, useState, ReactNode, useCallback } from "react";
import { useRouter, usePathname } from "next/navigation";
import type { User, Role } from "@/lib/types";
import { mockUsers } from "@/lib/placeholder-data";

interface AuthContextType {
  user: User | null;
  login: (role: Role) => void;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const login = useCallback((role: Role) => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      const mockUser = mockUsers[role];
      if (mockUser) {
        setUser(mockUser);
        router.push("/dashboard");
      }
      setLoading(false);
    }, 500);
  }, [router]);

  const logout = useCallback(() => {
    setUser(null);
    router.push("/auth/signin");
  }, [router]);

  const value = { user, login, logout, loading };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
