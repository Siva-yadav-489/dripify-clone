import React from "react";

const ToolIcons = ({ link, alignment }) => {
  return (
    <div
      className={`p-4 bg-white rounded-2xl ${alignment} absolute max-sm:static max-sm:inline-block shadow-lg size-[4.5rem]`}
    >
      <img src={link} alt="icon" />
    </div>
  );
};

export default ToolIcons;
