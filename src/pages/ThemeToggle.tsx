import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

import "./ThemeToggle.css";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      return savedTheme === "dark";
    }

    return true;
  });

  useEffect(() => {
    document.body.classList.toggle("dark-mode", isDark);
    document.body.classList.toggle("light-mode", !isDark);

    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((currentTheme) => !currentTheme);
  };

  return (
    <button
      type="button"
      className={`theme-toggle-btn ${isDark ? "dark-active" : "light-active"}`}
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      aria-pressed={isDark}
    >
      <span className="theme-toggle-icon">
        {isDark ? (
          <Sun size={17} strokeWidth={2.4} />
        ) : (
          <Moon size={17} strokeWidth={2.4} />
        )}
      </span>

      <span className="theme-toggle-text">
        {isDark ? "Dark" : "Light"}
      </span>
    </button>
  );
}