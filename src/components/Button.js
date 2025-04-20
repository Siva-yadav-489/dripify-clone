import React from "react";

const Button = ({ text, colors }) => {
  return (
    <div>
      <button
        className={`text-md font-thicboi-semibold ${colors} py-3 px-8 rounded-lg`}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
