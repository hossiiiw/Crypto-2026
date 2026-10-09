import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import ThemeContext from "./context/Theme/ThemeContext.jsx";
import "./i18n";
import LanguageContext from "./context/Theme/Language/LanguageContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LanguageContext>
      <ThemeContext>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeContext>
    </LanguageContext>
  </StrictMode>,
);
