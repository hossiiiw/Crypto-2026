import React from "react";

function InputUi({ value }) {
  return (
    <input
      className="mt-2 w-full rounded-xl border border-app-text/10 bg-app-input p-3 text-app-text-muted outline-none focus:border-app-primary"
      value={value}
    />
  );
}

export default InputUi;
