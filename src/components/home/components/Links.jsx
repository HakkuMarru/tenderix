import { useEffect, useState } from "react";

import rectangle from "../../../assets/placeholders/rectangle.png";

export default function Links() {
  return (
    <div
      data-aos="fade-up"
      className="flex flex-col items-center justify-center px-[60px] md:px-[100px] xl:px-[250px] gap-10"
    >
      <h2 className="font-inter text-white font-semibold text-2xl align-center text-center">
        Užitečné odkazy
      </h2>
      <div className="w-full justify-center xl:justify-between flex flex-wrap gap-10 xl:gap-20">
          <img src={rectangle} alt="" className="rounded-md h-[150px] w-[150px] xl:h-[220px] xl:w-[220px]" />
          <img src={rectangle} alt="" className="rounded-md h-[150px] w-[150px] xl:h-[220px] xl:w-[220px]" />
          <img src={rectangle} alt="" className="rounded-md h-[150px] w-[150px] xl:h-[220px] xl:w-[220px]" />
          <img src={rectangle} alt="" className="rounded-md h-[150px] w-[150px] xl:h-[220px] xl:w-[220px]" />
          <img src={rectangle} alt="" className="rounded-md h-[150px] w-[150px] xl:h-[220px] xl:w-[220px]" />
          <img src={rectangle} alt="" className="rounded-md h-[150px] w-[150px] xl:h-[220px] xl:w-[220px]" />
      </div>
    </div>
  );
}
