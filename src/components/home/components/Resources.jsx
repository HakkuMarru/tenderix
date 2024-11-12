import { useEffect, useState } from "react";

export default function Resources() {
  return (
    <div
      data-aos="fade-up"
      className="flex flex-col justify-center items-center gap-10 h-full px-[60px] md:px-[100px] xl:px-[200px]"
    >
      <h2 className=" text-white font-semibold text-2xl text-center lg:text-left">
        Rozsáhlé odborné zdroje z oblasti veřejných zakázek
      </h2>
      <div className="grid grid-rows-6 md:grid-rows-3 md:grid-cols-2 xl:grid-cols-3 xl:grid-rows-2 gap-5 xl:gap-10">
        <div className="glass-box bg-[#282828] p-5 rounded-md flex flex-col gap-2">
          <h3 className="font-inter text-white text-2xl lg:text-xl font-semibold relative before:content-[''] before:block before:h-[140%] before:w-0.5 before:bg-purple-500 before:absolute before:left-[-10px] lg:before:left-[-7.5px]">
            Rozhodovací praxe
          </h3>
          <div className="text-[#CBCBCB] text-md lg:text-medium text-justify">
            Prvostupňová i druhostupňová rozhodnutí Úřadu pro ochranu
            hospodářské soutěže od roku 2016.
          </div>
        </div>
        <div className="glass-box bg-[#282828] p-5 rounded-md flex flex-col gap-2 lg:gap-4 ">
          <h3 className="font-inter text-white text-2xl lg:text-xl font-semibold relative before:content-[''] before:block before:h-[140%] before:w-0.5 before:bg-purple-500 before:absolute before:left-[-10px] lg:before:left-[-7.5px]">
            Judikatura
          </h3>
          <div className="text-[#CBCBCB] text-md lg:text-medium text-justify">
            Judikáty Městského soudu v Praze, Krajského soudu v Brně a
            Nejvyššího správního soudu a judikáty Soudního dvora Evropské unie.
          </div>
        </div>
        <div className="glass-box bg-[#282828] p-5 rounded-md flex flex-col gap-2 lg:gap-4 ">
          <h3 className="font-inter text-white text-2xl lg:text-xl font-semibold relative before:content-[''] before:block before:h-[140%] before:w-0.5 before:bg-purple-500 before:absolute before:left-[-10px] lg:before:left-[-7.5px]">
            Přednášky a články
          </h3>
          <div className="text-[#CBCBCB] text-md lg:text-medium text-justify">
            Odborné (veřejně dostupné) prezentace MMR, ÚOHS, AVZ, SOVZ a dalších
            institucí a odborné články.
          </div>
        </div>
        <div className="glass-box bg-[#282828] p-5 rounded-md flex flex-col gap-2 lg:gap-4 ">
          <h3 className="font-inter text-white text-2xl lg:text-xl font-semibold relative before:content-[''] before:block before:h-[140%] before:w-0.5 before:bg-purple-500 before:absolute before:left-[-10px] lg:before:left-[-7.5px]">
            Metodiky
          </h3>
          <div className="text-[#CBCBCB] text-md lg:text-medium text-justify">
            Metodická stanoviska MMR, ÚOHS, TA ČR, CRR, AVZ, SFDI, ČKAIT a
            dalších institucí.
          </div>
        </div>
        <div className="glass-box bg-[#282828] p-5 rounded-md flex flex-col gap-2 lg:gap-4 ">
          <h3 className="font-inter text-white text-2xl lg:text-xl font-semibold relative before:content-[''] before:block before:h-[140%] before:w-0.5 before:bg-purple-500 before:absolute before:left-[-10px] lg:before:left-[-7.5px]">
            Výkladová stanoviska
          </h3>
          <div className="text-[#CBCBCB] text-md lg:text-medium text-justify">
            Výkladová stanoviska MMR, ÚOHS, AVZ a dalších institucí.
          </div>
        </div>
        <div className="glass-box bg-[#282828] p-5 rounded-md flex flex-col gap-2 lg:gap-4 ">
          <h3 className="font-inter text-white text-2xl lg:text-xl font-semibold relative before:content-[''] before:block before:h-[140%] before:w-0.5 before:bg-purple-500 before:absolute before:left-[-10px] lg:before:left-[-7.5px]">
            Legislativa
          </h3>
          <div className="text-[#CBCBCB] text-md lg:text-medium text-justify">
            Relevantní právní úprava ve smyslu Evropských zadávacích směrnic,
            ZZVZ, prováděcích vyhlášek, zákona o registru smluv apod.
          </div>
        </div>
      </div>
    </div>
  );
}
