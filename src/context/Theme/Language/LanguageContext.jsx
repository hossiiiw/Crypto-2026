import React, { createContext } from "react";
import { useTranslation } from "react-i18next";

export const AppLanguageContext = createContext(null);

function LanguageContext({ children }) {
  const { i18n } = useTranslation();
  const languageHandler = (value) => {
    i18n.changeLanguage(value);
  };

  return (
    <>
      <AppLanguageContext.Provider value={{ languageHandler }}>
        {children}
      </AppLanguageContext.Provider>
    </>
  );
}

export default LanguageContext;
