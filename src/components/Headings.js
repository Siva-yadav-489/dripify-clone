import React from "react";

const Headings = ({ text }) => {
  return (
    <div className="text-5xl font-thicboi-semibold mt-28 mb-10 text-center">
      {text[0]}
      <br />
      {text[1]}
    </div>
  );
};

export default Headings;
