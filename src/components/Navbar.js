import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="flex justify-between 2xl:mx-64 xl:mx-40 max-xl:mx-5 2xl:py-8 sm:py-4 py-8 mb-10">
      <div className="flex items-center">
        <a href="https://dripify.io/">
          <img
            width="120"
            height="32"
            alt="Dripify"
            src="https://dripify.io/wp-content/uploads/2023/11/logo.svg"
            className="brightness-0 invert-[1] mr-10"
          />
        </a>
        <ul className="flex text-white font-thicboi-semibold text-base  max-md:hidden">
          <li className="flex items-center mr-10">
            Software
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-3 text-white ml-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </li>
          <li className="flex items-center mr-10">
            Resources
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-3 text-white ml-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </li>
          <li className="mr-10">Pricing</li>
          <li>Partners</li>
        </ul>
      </div>
      <div className="flex items-center  max-md:hidden">
        <p className="text-white font-thicboi-bold text-base mr-10 ">
          Book demo
        </p>
        <p className="text-white font-thicboi-bold text-base mr-10 ">Login</p>
        <Button text={"Start for free"} colors={"text-black bg-white"} />
      </div>
      <div className=" items-center md:hidden ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
          />
        </svg>
      </div>
    </div>
  );
};

export default Navbar;
