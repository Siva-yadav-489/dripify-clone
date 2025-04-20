import React from "react";
import Headings from "./Headings";
import Button from "./Button";

const Campaigns = () => {
  return (
    <div className="2xl:mx-64 xl:mx-40 max-xl:mx-5">
      <Headings
        text={[
          "Run cold outreach campaigns on LinkedIn",
          "and through Email. Hassle-free",
        ]}
      />
      <div className="flex max-md:flex-col max-md:items-start items-center justify-start my-5">
        <a
          href="##"
          className="flex items-center font-thicboi-semibold text-2xl w-1/4"
        >
          <img
            decoding="async"
            src="https://dripify.io/wp-content/uploads/2025/02/dc1.svg"
            width="24"
            height="24"
            alt="Drip campaigns"
            className="mr-4 brightness-0 inset-96"
          />
          Drip campaigns
        </a>
        <a
          href="##"
          className="flex items-center font-thicboi-semibold text-2xl text-stone-400 w-1/4"
        >
          <img
            data-od-added-fetchpriority=""
            fetchpriority="low"
            decoding="async"
            src="https://dripify.io/wp-content/uploads/2025/02/e1.svg"
            width="24"
            height="24"
            class="me-3"
            className="mr-4"
            alt="Find emails"
          />
          Find emails
        </a>
        <a
          href="##"
          className="flex items-center font-thicboi-semibold text-2xl text-stone-400 w-1/4"
        >
          <img
            decoding="async"
            src="https://dripify.io/wp-content/uploads/2025/02/Business-Chart.svg"
            width="24"
            height="24"
            alt="Business chart"
            className="mr-4"
          />
          Analytics
        </a>
        <a
          href="##"
          className="flex items-center font-thicboi-semibold text-2xl text-stone-400 w-1/4"
        >
          <img
            decoding="async"
            src="https://dripify.io/wp-content/uploads/2025/02/Group.svg"
            width="24"
            height="24"
            alt="group"
            className="mr-4"
          />
          Inbox
        </a>
      </div>
      <div className="flex">
        <p className="my-2 h-0.5 w-full bg-[#6349f8]">&nbsp;</p>
        <p className="my-2 h-0.5 w-full bg-stone-300">&nbsp;</p>
        <p className="my-2 h-0.5 w-full bg-stone-300">&nbsp;</p>
        <p className="my-2 h-0.5 w-full bg-stone-300">&nbsp;</p>
      </div>
      <div className="flex max-md:flex-wrap items-center justify-between bg-[#f2f0ff] pl-14 rounded-3xl mt-8 mb-16">
        <div>
          <p className="text-[2rem] leading-tight font-thicboi-bold mb-7">
            Automate sales on <br /> LinkedIn & email
          </p>
          <p className="text-md font-thicboi-regular text-stone-600 mb-7 leading-relaxed">
            Contact thousands of prospects per month <br /> on LinkedIn and via
            Email through fully <br />
            automated & hyper-personalized sequence <br />
            campaigns
          </p>
          <Button
            text={"Learn more"}
            colors={"text-black my-5 bg-white border border-black"}
          />
        </div>
        <img
          loading="lazy"
          decoding="async"
          src="https://dripify.io/wp-content/uploads/2025/02/drip-camp-img.webp"
          width="70%"
          height="70%"
          alt="Automate sales on LinkedIn &amp; email"
        ></img>
      </div>
    </div>
  );
};

export default Campaigns;
