import { useEffect, useState } from "react";
import purpleShade from "../../../assets/shade/purple-shade.png";

export default function Hero() {
  return (
    <div className="relative h-screen flex items-center justify-center xl:pt-[90px] mx-14 xl:mx-0">
      <div className="flex items-center justify-center flex-col gap-4 lg:gap-8 z-10">
        <h1 data-aos="fade-up" className="hidden-el font-poppins text-white font-bold leading-tight text-center text-[40px] md:text-5xl lg:text-6xl xl:text-6xl">
          První umělá inteligence <br /> ve veřejných zakázkách
        </h1>
        <div data-aos="fade-up" className="text-[#C6BFFF] text-lg lg:text-xl text-center font-semibold">
          Zvyšte svou efektivitu a produktivitu s využitím umělé inteligence{" "}
          <br /> ve veřejných zakázkách.
        </div>
      </div>
    </div>
  );
}
