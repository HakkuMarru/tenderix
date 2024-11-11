import { useEffect, useState } from "react";
import purpleShade from "../../../assets/shade/purple-shade.png";

export default function Hero() {
  return (
    <div className="relative h-screen flex items-center justify-center pt-[40px] xl:pt-[90px]">
      <div className="flex items-center justify-center flex-col gap-2 xl:gap-5 z-10">
        <h1 data-aos="fade-up" className="hidden-el font-poppins text-white font-bold leading-snug text-center text-4xl xl:text-6xl">
          První umělá inteligence <br /> ve veřejných zakázkách
        </h1>
        <div data-aos="fade-up" className="text-[#C6BFFF] px-[110px] text-md xl:text-xl text-center font-semibold">
          Zvyšte svou efektivitu a produktivitu s využitím umělé inteligence{" "}
          <br /> ve veřejných zakázkách.
        </div>
      </div>
    </div>
  );
}
