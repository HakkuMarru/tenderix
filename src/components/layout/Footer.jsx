import { useEffect, useState } from "react";
import logo from "../../assets/logo/logo-full.png";
import instagram from "../../assets/social/instagram.png";
import youtube from "../../assets/social/youtube.png";
import linkedin from "../../assets/social/linkedin.png";

export default function Footer() {
  return (
    <footer className="bg-[#1E1E1E] border-t-2 border-[#444444] flex flex-col gap-10 lg:grid lg:grid-cols-7 lg:gap-2 p-10 lg:p-[40px] lg:px-[50px] lg:pb-[100px]">
      <div className="flex flex-col gap-10 col-span-2">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="w-[50px] h-[50px]" />
          <div className="font-inter text-white text-xl font-bold">
            TENDERIX
          </div>
        </div>
        <div className="flex items-center gap-5">
          <a href="https://www.instagram.com/verejnezakazky24/">
            <img
              src={instagram}
              alt="Instagram"
              className="h-[30px] cursor-pointer"
            />
          </a>
          <a href="https://www.youtube.com/@verejnezakazky24">
            <img
              src={youtube}
              alt="YouTube"
              className="h-[30px] cursor-pointer"
            />
          </a>
          <a href="https://www.linkedin.com/company/tenderix-vz/">
            <img
              src={linkedin}
              alt="LinkedIn"
              className="h-[30px] cursor-pointer"
            />
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-10 xl:gap-0 lg:flex-row items-start lg:items-center justify-around col-span-5">
        <div className="text-white flex flex-col lg:grid lg:grid-rows-7 gap-2 pt-3">
          <div className="font-bold text-lg lg:text-medium mb-2">Ostatní</div>
          <div className="hidden lg:block"></div>
          <div className="cursor-pointer hover:underline">Nápověda</div>
          <div className="cursor-pointer hover:underline">
            Podmínky užití aplikace
          </div>
          <div className="cursor-pointer hover:underline">
            Zasílání obchodních sdělení
          </div>
          <div className="cursor-pointer hover:underline">
            Obchodní podmínky
          </div>
          <div>Zásady ochrany osobních údajů</div>
        </div>
        <div className="text-white flex flex-col lg:grid lg:grid-rows-7 gap-2 pt-3">
          <div className="font-bold text-lg lg:text-medium mb-2">Partneři</div>
          <div className="hidden lg:block"></div>
          <div className="cursor-pointer hover:underline">
            Veřejné zakázky 24
          </div>
          <div className="cursor-pointer hover:underline">.....</div>
          <div className="cursor-pointer hover:underline">.....</div>
          <div className="cursor-pointer hover:underline">.....</div>
          <div className="cursor-pointer hover:underline">.....</div>
        </div>
        <div className="text-white flex flex-col lg:grid lg:grid-rows-7 gap-2 pt-3">
          <div className="font-bold text-lg lg:text-medium mb-2">O nás</div>
          <div className="hidden lg:block"></div>
          <div className="cursor-pointer hover:underline">
            Ing. Dominik Žlebek, LL.M.
          </div>
          <div className="cursor-pointer hover:underline">
            Hlavní 62, Stehelčeves 273 42, Česká republika
          </div>
          <div className="cursor-pointer hover:underline">IČO 14244896</div>
          <div className="cursor-pointer hover:underline">info@tenderix.cz</div>
          <div className="cursor-pointer hover:underline">
            (+420) 730 645 924
          </div>
        </div>
      </div>
    </footer>
  );
}
