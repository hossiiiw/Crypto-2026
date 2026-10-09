import { createContext, useEffect, useState } from "react";
export const AppThemeContext = createContext(null);

function ThemeContext({ children }) {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  const handleTheme = () => {
    setTheme((prev) => {
      return prev === "dark" ? "light" : "dark";
    });
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <AppThemeContext.Provider value={{ theme, handleTheme }}>
        {children}
      </AppThemeContext.Provider>
    </>
  );
}

export default ThemeContext;
