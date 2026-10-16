import { createContext, useEffect, useState } from "react";
import {  Navigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

export const AppAuthContext = createContext(null);

function AuthContext({ children }) {
  const [login, setLogin] = useState(localStorage.getItem("login") === "true");
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null,
  );
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("userData")) || [],
  );

  // -------------------new user-------------------
  const [newUser, setNewUser] = useState(() => {
    try {
      const savedUsers = localStorage.getItem("userData");

      if (!savedUsers || savedUsers === "undefined") {
        return [];
      }

      const parsedUsers = JSON.parse(savedUsers);

      return Array.isArray(parsedUsers) ? parsedUsers : [];
    } catch (error) {
      return [];
    }
  });
  // -------------------new user-------------------
  // ------------------get user info----------------------
  const getUserInfo = (email, password) => {
    const user = userData.find((user) => {
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
  // ------------------get user info----------------------
  // -------------------logout----------------------
  const logoutHandler = () => {
    localStorage.setItem("login", false);
    setLogin(false);
    setCurrentUser(null);
    Navigate("/");
  };
  // -------------------logout----------------------

  //----------------------register handler---------------
  const registerHandler = (data) => {
    const user = {
      id: uuidv4(),
      ...data,
    };
    setNewUser((prevUsers) => [...prevUsers, user]);
    setUserData((prevUser) => [...prevUser, user]);
    return user;
  };

  //----------------------register handler---------------

  useEffect(() => {
    localStorage.setItem("login", login);
    localStorage.setItem("user", JSON.stringify(currentUser));
    localStorage.setItem("userData", JSON.stringify(newUser));
  }, [login, currentUser, newUser]);



  return (
    <AppAuthContext.Provider
      value={{
        login,
        currentUser,
        getUserInfo,
        logoutHandler,
        registerHandler,
      }}
    >
      {children}
    </AppAuthContext.Provider>
  );
}

export default AuthContext;
