import React from "react";

function InputUi({ value, name, func }) {
  return (
    <input
      onChange={ func}
      className="mt-2 w-full rounded-xl border border-app-text/10 bg-app-input p-3 text-app-text-muted outline-none focus:border-app-primary capitalize"
      value={value}
      name={name}
    />
  );
}

export default InputUi;
