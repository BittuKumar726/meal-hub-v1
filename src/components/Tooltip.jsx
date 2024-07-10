import React from "react";

const Tooltip = ({ text, position }) => {
  return (
    <div
      className={`absolute z-50 p-2 text-sm text-white bg-black rounded-md shadow-lg ${position}`}
    >
      {text}
    </div>
  );
};

export default Tooltip;
