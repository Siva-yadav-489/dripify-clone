import React from "react";
import Navbar from "./Navbar";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="rounded-3xl bg-[#6349f8] pb-40 mb-48">
      <Navbar />
      <div className="flex justify-center mb-10">
        <img
          width="309"
          height="32"
          alt="1000+ reviews"
          src="https://dripify.io/wp-content/uploads/2023/11/reviews.svg"
        />
      </div>
      <p className="text-center text-[5rem] leading-none font-thicboi-extrabold text-white my-8">
        You Only Need a Single <br /> Tool to Crush Sales
      </p>
      <p className="text-white text-lg font-thicboi-medium my-10 text-center">
        Reach hundreds of prospects per day on LinkedIn & through <br /> Email
        and close more deals on complete autopilot
      </p>
      <div className="flex max-md:flex-wrap max-md:w-[90%]  p-2 bg-white rounded-xl w-[30%] items-center justify-between justify-self-center">
        <input
          type="email"
          placeholder="Enter your work email"
          className="text-stone-900 font-thicboi-regular p-3"
        />
        <Button text={"Start now"} colors={"text-white bg-black"} />
      </div>
      <div className="flex w-[30%] max-md:w-[90%] items-center justify-between justify-self-center pb-10">
        <p className="flex items-center text-white font-thicboi-medium text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4 mr-2 my-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 12.75 6 6 9-13.5"
            />
          </svg>
          One Minute Setup
        </p>
        <p className="flex items-center text-white font-thicboi-medium text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4 mr-2 my-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 12.75 6 6 9-13.5"
            />
          </svg>
          7-Day Free Trial
        </p>
        <p className="flex items-center text-white font-thicboi-medium text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4 mr-2 my-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 12.75 6 6 9-13.5"
            />
          </svg>
          No Credit Card Required
        </p>
      </div>
      <video
        autoPlay
        loop
        muted
        src="https://dripify.io/wp-content/uploads/2023/12/Automate-LinkedIn-compreessed.mp4"
        playsInline
        preload="metadata"
        loading="lazy"
        className="w-[60%] rounded-xl justify-self-center mt-5  -mb-80 shadow-xl"
      ></video>
    </div>
  );
};

export default Hero;
