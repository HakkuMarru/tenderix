import { useEffect, useState } from "react";

import rectangle from "../../../assets/placeholders/rectangle.png";

export default function Links() {
  return (
    <div className="flex flex-col items-center justify-center mx-14 mb-40 xl:mb-0 lg:mx-0 xl:py-[100px] lg:px-[200px] gap-12">
      <h2 className="hidden-el font-inter text-white font-semibold text-3xl align-center">
        Užitečné odkazy
      </h2>
      <div className="grid grid-rows-6 md:grid-rows-3 md:grid-cols-2 lg:grid-rows-2 lg:grid-cols-3 gap-x-40 lg:gap-x-20 xl:gap-x-40 gap-y-20">
        <img src={rectangle} alt="" className="hidden-el rounded-md" />
        <img src={rectangle} alt="" className="hidden-el rounded-md" />
        <img src={rectangle} alt="" className="hidden-el rounded-md" />
        <img src={rectangle} alt="" className="hidden-el rounded-md" />
        <img src={rectangle} alt="" className="hidden-el rounded-md" />
        <img src={rectangle} alt="" className="hidden-el rounded-md" />
      </div>
    </div>
  );
}
