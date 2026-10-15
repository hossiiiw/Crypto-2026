import { createContext, useEffect, useState } from "react";
import { Users } from "../../data/AuthData";
import { Navigate } from "react-router-dom";

export const AppAuthContext = createContext(null);

function AuthContext({ children }) {
  const [login, setLogin] = useState(localStorage.getItem("login") === "true");
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null,
  );

  const getUserInfo = (email, password) => {
    const user = Users.find((user) => {
      return user.email === email && user.password === password;
    });

    if (user) {
      setLogin(true);
      setCurrentUser(user);
      return { success: true, user };
    }

    return {
      sucess: false,
      message: "ایمیل یا رمز عبور اشتباه است",
    };
  };

  const logoutHandler = () => {
    localStorage.setItem("login", false);
    setLogin(false);
    setCurrentUser(null);
    Navigate("/");
  };

  useEffect(() => {
    localStorage.setItem("login", login);
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [login, currentUser]);

  return (
    <AppAuthContext.Provider
      value={{ login, currentUser, getUserInfo, logoutHandler }}
    >
      {children}
    </AppAuthContext.Provider>
  );
}

export default AuthContext;
