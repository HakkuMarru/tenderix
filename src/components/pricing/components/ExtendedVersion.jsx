import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ExtendedVersion() {
  useEffect(() => {}, []);

  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration in milliseconds
      once: true, // Only animate once when in view
      offset: 200, // Offset from the top of the viewport
    });
  }, []);

  return (
    <div data-aos="fade-up" className="h-full px-[75px] xl:px-[275px] xl:pt-[0px] xl:pb-[60px]">
      <div className="glass-box p-8 flex flex-col gap-5">
        <h3 className="text-[#C6BFFF] text-xl text-center font-semibold w-full">Rozšířená verze pro organizaci</h3>
        <div className="text-white text-sm text-center xl:px-[100px]">
          Máte zájem o rozšířenou verzi pro Vaši organizaci s více uživateli a
          individuálními podmínkami, nebo Vám jen nevyhovuje žádný z výše
          uvedených tarifl? <br /><br />
          Neváhejte nám napsat.
        </div>
        <button className="bg-white border border-1 border-white text-black text-sm rounded-md py-2 w-full hover:bg-transparent transition-all duration-200 hover:text-white">
          Kontaktovat
        </button>
      </div>
    </div>
  );
}
