import { useEffect, useState } from "react";

import rectangle from "../../../assets/placeholders/rectangle.png";

export default function Links() {
  return (
    <div
      data-aos="fade-up"
      className="flex flex-col items-center justify-center px-[75px] xl:px-[200px] gap-10"
    >
      <h2 className="font-inter text-white font-semibold text-2xl align-center">
        Užitečné odkazy
      </h2>
      <div className="w-full flex flex-col gap-10 xl:gap-20">
        <div className="flex xl:flex-row flex-col gap-10 xl:gap-0 w-full items-center justify-between">
          <img src={rectangle} alt="" className="rounded-md" />
          <img src={rectangle} alt="" className="rounded-md" />
          <img src={rectangle} alt="" className="rounded-md" />
        </div>

        <div className="flex xl:flex-row flex-col gap-10 xl:gap-0 w-full items-center justify-between">
          <img src={rectangle} alt="" className="rounded-md" />
          <img src={rectangle} alt="" className="rounded-md" />
          <img src={rectangle} alt="" className="rounded-md" />
        </div>
      </div>
    </div>
  );
}
