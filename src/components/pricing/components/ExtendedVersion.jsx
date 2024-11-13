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
    <div data-aos="fade-up" className="lg:w-[58rem] lg:self-center h-full px-[75px] lg:px-0 lg:pt-[0px] flex justify-center items-center">
      <div className="extended-version glass-box p-8 flex flex-col gap-5">
        <h3 className="text-[#C6BFFF] text-xl text-center font-semibold w-full">Rozšířená verze pro organizaci</h3>
        <div className="text-white text-sm text-justify lg:text-center lg:px-[100px]">
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
