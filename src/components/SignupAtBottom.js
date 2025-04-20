import React from "react";
import Button from "./Button";

const SignupAtBottom = () => {
  return (
    <div className="flex max-sm:flex-col justify-around items-center 2xl:px-64 xl:px-40 max-xl:px-5 my-6 py-10 rounded-3xl  bg-[#6349f8]">
      <img
        // width="640"
        // height="493"
        alt="Skyrocket your sales results with our game-changing prospecting software"
        src="https://dripify.io/wp-content/uploads/2023/11/cta-rocket.svg"
        className="w-2/4 h-fit"
      ></img>
      <div className="flex flex-col items-start">
        <p className="text-5xl font-thicboi-bold text-white mb-10">
          Try out a smarter way <br />
          to crush sales - all
          <br />
          automated
        </p>
        <p className="text-base font-thicboi-medium text-white mb-10">
          Kickstart your sales outreach campaign today and see <br />
          your first results in less than 48 hours, while enjoying your
          <br />
          free trial
        </p>
        <div className="flex  p-2 bg-white rounded-xl items-center justify-between ">
          <input
            type="email"
            placeholder="Enter your work email"
            className="text-stone-900 font-thicboi-regular p-3"
          />
          <Button text={"Start free trail"} colors={"text-white bg-black"} />
        </div>
      </div>
    </div>
  );
};

export default SignupAtBottom;
