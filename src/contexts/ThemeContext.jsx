import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check localStorage first, then system preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme === "dark";
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    // Save theme preference to localStorage
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");

    // Apply theme to document root
    const root = document.documentElement;

    if (isDarkMode) {
      // Dark theme colors - improved for better readability
      root.style.setProperty("--color-grey-0", "#0f172a");
      root.style.setProperty("--color-grey-25", "#1e293b");
      root.style.setProperty("--color-grey-50", "#334155");
      root.style.setProperty("--color-grey-100", "#475569");
      root.style.setProperty("--color-grey-200", "#64748b");
      root.style.setProperty("--color-grey-300", "#94a3b8");
      root.style.setProperty("--color-grey-400", "#cbd5e1");
      root.style.setProperty("--color-grey-500", "#e2e8f0");
      root.style.setProperty("--color-grey-600", "#f1f5f9");
      root.style.setProperty("--color-grey-700", "#f8fafc");
      root.style.setProperty("--color-grey-800", "#ffffff");
      root.style.setProperty("--color-grey-900", "#ffffff");

      // Brand colors for dark mode
      root.style.setProperty("--color-brand-50", "#1e3a8a");
      root.style.setProperty("--color-brand-100", "#1d4ed8");
      root.style.setProperty("--color-brand-200", "#2563eb");
      root.style.setProperty("--color-brand-500", "#3b82f6");
      root.style.setProperty("--color-brand-600", "#60a5fa");
      root.style.setProperty("--color-brand-700", "#93c5fd");

      // Background adjustments
      root.style.setProperty("--backdrop-color", "rgba(0, 0, 0, 0.5)");

      // Input specific colors for dark mode
      root.style.setProperty("--input-bg", "#1e293b");
      root.style.setProperty("--input-border", "#475569");
      root.style.setProperty("--input-text", "#f8fafc");
      root.style.setProperty("--input-placeholder", "#94a3b8");
    } else {
      // Light theme colors (default)
      root.style.setProperty("--color-grey-0", "#fff");
      root.style.setProperty("--color-grey-25", "#fcfcfc");
      root.style.setProperty("--color-grey-50", "#f9fafb");
      root.style.setProperty("--color-grey-100", "#f3f4f6");
      root.style.setProperty("--color-grey-200", "#e5e7eb");
      root.style.setProperty("--color-grey-300", "#d1d5db");
      root.style.setProperty("--color-grey-400", "#9ca3af");
      root.style.setProperty("--color-grey-500", "#6b7280");
      root.style.setProperty("--color-grey-600", "#4b5563");
      root.style.setProperty("--color-grey-700", "#374151");
      root.style.setProperty("--color-grey-800", "#1f2937");
      root.style.setProperty("--color-grey-900", "#111827");

      // Brand colors for light mode
      root.style.setProperty("--color-brand-50", "#eff6ff");
      root.style.setProperty("--color-brand-100", "#dbeafe");
      root.style.setProperty("--color-brand-200", "#bfdbfe");
      root.style.setProperty("--color-brand-500", "#3b82f6");
      root.style.setProperty("--color-brand-600", "#2563eb");
      root.style.setProperty("--color-brand-700", "#1d4ed8");

      // Background adjustments
      root.style.setProperty("--backdrop-color", "rgba(255, 255, 255, 0.1)");

      // Input specific colors for light mode
      root.style.setProperty("--input-bg", "#ffffff");
      root.style.setProperty("--input-border", "#d1d5db");
      root.style.setProperty("--input-text", "#374151");
      root.style.setProperty("--input-placeholder", "#9ca3af");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
