import React from "react";

function ErrorMessage({ message }) {
  return <p className="p-6 text-app-danger text-center">{message} </p>;
}

export default ErrorMessage;
