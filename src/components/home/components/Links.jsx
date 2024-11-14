import { useEffect, useState } from "react";

import rectangle from "../../../assets/placeholders/rectangle.png";

import logo1 from "../../../assets/link-logos/1.png";
import logo2 from "../../../assets/link-logos/2.png";
import logo3 from "../../../assets/link-logos/3.png";
import logo4 from "../../../assets/link-logos/4.png";
import logo5 from "../../../assets/link-logos/5.png";
import logo6 from "../../../assets/link-logos/6.png";


export default function Links() {
  return (
    <div
      data-aos="fade-up"
      className="flex flex-col items-center justify-center px-[60px] md:px-[100px] xl:px-[250px] gap-10"
    >
      <h2 className="font-inter text-white font-semibold text-2xl align-center text-center">
        Užitečné odkazy
      </h2>
      <div className="w-full justify-center flex flex-wrap gap-20 lg:hidden">
          <img src={logo1} alt="" className="rounded-md object-contain h-[150px] w-[150px] xl:h-[200px] xl:w-[200px]" />
          <img src={logo2} alt="" className="rounded-md object-contain h-[150px] w-[150px] xl:h-[200px] xl:w-[200px]" />
          <img src={logo3} alt="" className="rounded-md object-contain h-[150px] w-[150px] xl:h-[200px] xl:w-[200px]" />
          <img src={logo4} alt="" className="rounded-md object-contain h-[150px] w-[150px] xl:h-[200px] xl:w-[200px]" />
          <img src={logo5} alt="" className="rounded-md object-contain h-[150px] w-[150px] xl:h-[200px] xl:w-[200px]" />
          <img src={logo6} alt="" className="rounded-md object-contain h-[150px] w-[150px] xl:h-[200px] xl:w-[200px]" />
      </div>
      <div className="hidden w-full flex-col justify-center items-center lg:flex gap-20">
          <div className="flex w-full justify-around">

          <img src={logo1} alt="" className="rounded-md object-contain h-[150px] w-[150px] xl:h-[200px] xl:w-[200px]" />
          <img src={logo2} alt="" className="rounded-md object-contain h-[150px] w-[150px] xl:h-[200px] xl:w-[200px]" />
          <img src={logo3} alt="" className="rounded-md object-contain h-[150px] w-[150px] xl:h-[200px] xl:w-[200px]" />
          </div>
          <div className="flex w-full justify-around">

          <img src={logo4} alt="" className="rounded-md object-contain h-[150px] w-[150px] xl:h-[200px] xl:w-[200px]" />
          <img src={logo5} alt="" className="rounded-md object-contain h-[150px] w-[150px] xl:h-[200px] xl:w-[200px]" />
          <img src={logo6} alt="" className="rounded-md object-contain h-[150px] w-[150px] xl:h-[200px] xl:w-[200px]" />
          </div>
      </div>
    </div>
  );
}
