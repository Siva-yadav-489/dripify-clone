import React from "react";
import Button from "./Button";
import ToolIcons from "./ToolIcons";

const IntegrateTools = () => {
  return (
    <div className="2xl:mx-64 xl:mx-40 max-xl:mx-5 my-20 pt-40 pb-48 relative  bg-[url(https://dripify.io/wp-content/uploads/2023/11/dots.png)]">
      <p className="text-5xl font-thicboi-semibold my-10 text-center">
        Integrate with the <br /> tools you already use
      </p>
      <p className="font-thicboi-medium text-base mb-10 text-center text-stone-500">
        Native integrations and modern webhooks let you easily connect
        <br />
        Dripify with all the software your team already uses
      </p>
      <div className="flex justify-center my-10">
        <Button
          text={"See all integrations"}
          colors={"text-black bg-white border border-stone-800"}
        />
      </div>
      <ToolIcons
        link={"https://dripify.io/wp-content/uploads/2023/11/slack.svg"}
        alignment={"top-1 left-5"}
      />
      <ToolIcons
        link={"https://dripify.io/wp-content/uploads/2023/11/clickup-2.svg"}
        alignment={"top-1 left-[20rem]"}
      />
      <ToolIcons
        link={"https://dripify.io/wp-content/uploads/2023/11/hubspot.svg"}
        alignment={"top-1 right-5"}
      />
      <ToolIcons
        link={
          "https://dripify.io/wp-content/uploads/2023/11/activecampaign.svg"
        }
        alignment={"top-20 right-[12rem]"}
      />
      <ToolIcons
        link={"https://dripify.io/wp-content/uploads/2023/11/monday.svg"}
        alignment={"top-40 left-24"}
      />
      <ToolIcons
        link={"https://dripify.io/wp-content/uploads/2023/11/gradient-logo.svg"}
        alignment={"top-44 -right-10"}
      />
      <ToolIcons
        link={"https://dripify.io/wp-content/uploads/2023/11/salesforce-1.svg"}
        alignment={"top-[22rem] -left-10"}
      />
      <ToolIcons
        link={"https://dripify.io/wp-content/uploads/2023/11/excel.svg"}
        alignment={"top-[23rem] right-5"}
      />
      <ToolIcons
        link={"https://dripify.io/wp-content/uploads/2023/11/zapier.svg"}
        alignment={"top-[28rem] left-[8rem]"}
      />
      <ToolIcons
        link={"https://dripify.io/wp-content/uploads/2023/11/pipedrive.svg"}
        alignment={"top-[28rem] right-[12rem]"}
      />
      <ToolIcons
        link={"https://dripify.io/wp-content/uploads/2023/11/zendesk.svg"}
        alignment={"top-26rem left-[18rem]"}
      />
      <ToolIcons
        link={"https://dripify.io/wp-content/uploads/2023/11/intercom.svg"}
        alignment={"top-26rem right-[3rem]"}
      />
      <ToolIcons
        link={"https://dripify.io/wp-content/uploads/2023/11/zoho.svg"}
        alignment={"bottom-8 left-14"}
      />
      <ToolIcons
        link={
          "https://dripify.io/wp-content/uploads/2023/11/Asana-Symbol-Coral-SVG.svg"
        }
        alignment={"bottom-8 right-[20rem]"}
      />
    </div>
  );
};

export default IntegrateTools;
