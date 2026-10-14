import React, { useContext } from "react";
import { Atom } from "react-loading-indicators";
import { AppThemeContext } from "../../context/Theme/ThemeContext";

function Loading() {
  const { theme } = useContext(AppThemeContext);
  console.log(theme);
  return (
    <div className="w-full h-[80vh] flex items-center justify-center">
      {theme ? (
        <Atom color="#5a03d5" size="medium" text="" textColor="#502573" />
      ) : (
        <Atom color="#4b267c" size="medium" text="" textColor="#502573" />
      )}
    </div>
  );
}

export default Loading;
