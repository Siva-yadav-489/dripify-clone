import React from "react";
import Headings from "./Headings";
import Button from "./Button";

const WorksBestFor = () => {
  return (
    <div className="2xl:mx-64 xl:mx-40 max-xl:mx-5 my-10">
      <Headings text={["Works best for"]} />
      <div className="grid grid-cols-5 gap-5 ">
        <div className="col-span-3 max-md:col-span-5 flex justify-between bg-[#eefcf0] p-10  rounded-xl">
          <div className="flex flex-col  items-start justify-start">
            <img
              width="40"
              height="40"
              alt=""
              src="https://dripify.io/wp-content/uploads/2024/04/b.svg"
              className="mb-6"
            />
            <p className="text-3xl font-thicboi-semibold mb-8">
              Business owners
            </p>
            <p className="text-base font-thicboi-medium text-stone-500 mb-32">
              Running a business is not that easy these
              <br />
              days! Put your sales prospecting on
              <br />
              complete autopilot, so you could focus on
              <br />
              other important things
            </p>
            <p className="flex items-center">
              <span className="text-base font-thicboi-semibold">
                Learn more
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5 pl-3 box-content"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </p>
          </div>
          <img
            alt=""
            src="https://dripify.io/wp-content/uploads/2025/02/business-owners.png"
            className="w-64 h-fit"
          />
        </div>
        <div className="col-span-2 max-md:col-span-5 flex flex-col  items-start bg-[#ffefeb] p-10 rounded-xl">
          <img
            width="40"
            height="40"
            alt=""
            src="https://dripify.io/wp-content/uploads/2024/04/s1.svg"
            className="mb-6"
          />
          <p className="text-3xl font-thicboi-semibold mb-8">Sales teams</p>
          <p className="text-base font-thicboi-medium text-stone-500 mb-36">
            Run effective lead generation campaigns, onboard your entire sales
            team to Dripify to manage their campaigns and view analytics - all
            from the control panel of your favorite sales automation software
          </p>
          <p className="flex items-center">
            <span className="text-base font-thicboi-semibold">Learn more</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5 pl-3 box-content"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </p>
        </div>
        {/* row-2 */}
        <div className="col-span-2 max-md:col-span-5 flex flex-col  items-start bg-[#ebf5ff] p-10 rounded-xl">
          <img
            width="40"
            height="40"
            alt=""
            src="https://dripify.io/wp-content/uploads/2024/04/m1.svg"
            className="mb-6"
          />
          <p className="text-3xl font-thicboi-semibold mb-8">
            Marketing agencies
          </p>
          <p className="text-base font-thicboi-medium text-stone-500 mb-28">
            Digital marketing agencies love Dripify! Why? You can set
            prospecting campaigns in minutes, use hyper-personalization with 20+
            variables, so your messages do not look automated, switch between
            LinkedIn accounts with just a few clicks, and more!
          </p>
          <p className="flex items-center">
            <span className="text-base font-thicboi-semibold">Learn more</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5 pl-3 box-content"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </p>
        </div>
        <div className="col-span-3 max-md:col-span-5 flex justify-between bg-[#ffebf2] p-10 rounded-xl">
          <div className="flex flex-col  items-start">
            <img
              width="40"
              height="40"
              alt=""
              src="https://dripify.io/wp-content/uploads/2024/04/r.svg"
              className="mb-6"
            />
            <p className="text-3xl font-thicboi-semibold mb-8">
              Business owners
            </p>
            <p className="text-base font-thicboi-medium text-stone-500 mb-32">
              LinkedIn has already become the hottest career <br />
              development site on the globe. With Dripify, you
              <br />
              can reach out to 2000+ potential candidates per <br />
              month and fill your open vacancies easily
            </p>
            <p className="flex items-center">
              <span className="text-base font-thicboi-semibold">
                Learn more
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5 pl-3 box-content"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </p>
          </div>
          <img
            alt=""
            src="https://dripify.io/wp-content/uploads/2025/03/recrutier.png"
            className="w-52 h-fit"
          />
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <Button text={"Start free trail"} colors={"text-white bg-[#7760f9]"} />
      </div>
    </div>
  );
};

export default WorksBestFor;
