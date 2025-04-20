import React from "react";

const Metrics = ({ text }) => {
  return (
    <div className="bg-slate-50 py-8 flex-1 rounded-xl">
      <p className="text-[4rem] leading-tight font-thicboi-bold text-center">
        {text[0]}
      </p>
      <p className="text-sm font-thicboi-regular text-stone-500 text-center">
        {text[1]}
      </p>
    </div>
  );
};

export default Metrics;
