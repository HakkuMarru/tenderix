import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Price() {
  useEffect(() => {}, []);

  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration in milliseconds
      once: true, // Only animate once when in view
      offset: 200, // Offset from the top of the viewport
    });
  }, []);

  return (
    <div className="h-[95vh] flex gap-5 items-center justify-center flex-col px-[275px] pt-[100px]">
      <h2 className="text-white text-2xl font-semibold">
        Ceník rozšířené verze aplikace
      </h2>
      <div className="flex gap-5 self-end">
        <div className="glass-box-subscription text-white font-light rounded-md px-2 py-1 cursor-pointer">
          Měsíčně
        </div>
        <div className="glass-box-subscription-active text-white font-light  rounded-md px-2 py-1 cursor-pointer">
          Ročně
        </div>
      </div>
      <div className="flex items-center justify-between w-full">
        <div className="glass-box flex flex-col items-start justify-center gap-5 p-8 w-[280px]">
          <div className="text-[#C6BFFF] text-xl text-center font-semibold w-full">
            Začátečník
          </div>
          <div className="flex items-end justify-center gap-2 w-full">
            <div className="text-[#FFF] text-4xl font-semibold">350</div>
            <div className="text-[#FFF] text-lg font-semibold">Kč</div>
            <div className="text-[#FFF] text-xs pb-1">/ měsíc</div>
          </div>
          <ul className="flex flex-col gap-2">
            <li className="text-[#d1d1d1] text-sm">
              &bull; Až 50 dotazů / měsíc
            </li>
            <li className="text-[#d1d1d1] text-sm">&bull; 1 uživatel</li>
            <li className="text-[#d1d1d1] text-sm">&bull; Emailová podpora</li>
            <li className="text-[#d1d1d1] text-sm">&bull; List item</li>
            <li className="text-[#d1d1d1] text-sm">&bull; List item</li>
          </ul>
          <button className="bg-white border border-1 border-white text-black text-sm rounded-md py-2 w-full hover:bg-transparent transition-all duration-200 hover:text-white">
            Koupit
          </button>
        </div>
        <div className="glass-box flex flex-col items-start justify-center gap-5 p-8 w-[280px]">
          <div className="text-[#C6BFFF] text-xl text-center font-semibold w-full">
            Začátečník
          </div>
          <div className="flex items-end justify-center gap-2 w-full">
            <div className="text-[#FFF] text-4xl font-semibold">350</div>
            <div className="text-[#FFF] text-lg font-semibold">Kč</div>
            <div className="text-[#FFF] text-xs pb-1">/ měsíc</div>
          </div>
          <ul className="flex flex-col gap-2">
            <li className="text-[#d1d1d1] text-sm">
              &bull; Až 50 dotazů / měsíc
            </li>
            <li className="text-[#d1d1d1] text-sm">&bull; 1 uživatel</li>
            <li className="text-[#d1d1d1] text-sm">&bull; Emailová podpora</li>
            <li className="text-[#d1d1d1] text-sm">&bull; List item</li>
            <li className="text-[#d1d1d1] text-sm">&bull; List item</li>
          </ul>
          <button className="bg-white border border-1 border-white text-black text-sm rounded-md py-2 w-full hover:bg-transparent transition-all duration-200 hover:text-white">
            Koupit
          </button>
        </div>
        <div className="glass-box flex flex-col items-start justify-center gap-5 p-8 w-[280px]">
          <div className="text-[#C6BFFF] text-xl text-center font-semibold w-full">
            Začátečník
          </div>
          <div className="flex items-end justify-center gap-2 w-full">
            <div className="text-[#FFF] text-4xl font-semibold">350</div>
            <div className="text-[#FFF] text-lg font-semibold">Kč</div>
            <div className="text-[#FFF] text-xs pb-1">/ měsíc</div>
          </div>
          <ul className="flex flex-col gap-2">
            <li className="text-[#d1d1d1] text-sm">
              &bull; Až 50 dotazů / měsíc
            </li>
            <li className="text-[#d1d1d1] text-sm">&bull; 1 uživatel</li>
            <li className="text-[#d1d1d1] text-sm">&bull; Emailová podpora</li>
            <li className="text-[#d1d1d1] text-sm">&bull; List item</li>
            <li className="text-[#d1d1d1] text-sm">&bull; List item</li>
          </ul>
          <button className="bg-white border border-1 border-white text-black text-sm rounded-md py-2 w-full hover:bg-transparent transition-all duration-200 hover:text-white">
            Koupit
          </button>
        </div>
      </div>
    </div>
  );
}
