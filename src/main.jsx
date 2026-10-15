import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import ThemeContext from "./context/Theme/ThemeContext.jsx";
import "./i18n";
import LanguageContext from "./context/Language/LanguageContext.jsx";
import AuthContext from "./context/Auth/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <AuthContext>
    <LanguageContext>
      <ThemeContext>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeContext>
    </LanguageContext>
  </AuthContext>,
);
