"use client";

import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // cargar sesión al inicio
    const loggedIn = localStorage.getItem("loggedIn");
    if (loggedIn === "true") {
      setUser({ status: "loggedIn" });
    }
  }, []);

  const login = () => {
    localStorage.setItem("loggedIn", "true");
    setUser({ status: "loggedIn" });
  };

  const logout = () => {
    localStorage.removeItem("loggedIn");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
