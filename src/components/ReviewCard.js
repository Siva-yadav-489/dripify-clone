import React from "react";

const ReviewCard = () => {
  return (
    <div className="bg-[#f9fafb] p-10 rounded-2xl mx-4">
      <p className="text-sm leading-loose font-thicboi-medium mb-16">
        “Very impressive. I am a big fan of automation and Dripify <br />
        is exactly what I was looking for. I have experience with
        <br />
        other LinkedIn automation software and chrome
        <br />
        extensions, but this one is truly superb.”
      </p>
      <div className="flex justify-between">
        <div className="flex items-center">
          <img
            src="https://dripify.io/wp-content/uploads/2020/04/Andrew-Kozic.jpg"
            alt=""
            className="size-10 rounded-full mr-4"
          />
          <p className="text-base font-thicboi-medium">
            Andrew Kozic
            <br />
            <span className="text-xs font-thicboi-medium text-stone-500">
              CEO and Founder at Perfomante
            </span>
          </p>
        </div>
        <img
          width="52"
          height="50"
          alt=""
          src="https://dripify.io/wp-content/uploads/2024/03/g2.svg"
        />
      </div>
    </div>
  );
};

export default ReviewCard;
