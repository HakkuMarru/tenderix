import { useEffect, useState } from "react";

export default function Technologies() {
  return (
    <div
      data-aos="fade-up"
      className="h-full flex flex-col gap-10 justify-center items-center px-[60px] xl:px-[200px]"
    >
      <h2 className="font-inter text-white font-semibold text-2xl align-center text-center">
        Moderní technologie
      </h2>
      <div className="flex gap-5 xl:gap-10 flex-col lg:flex-row">
        <div className="flex-1 glass-box flex flex-col gap-2 font-inter bg-[#282828] rounded-md text-white p-5">
          <h3 className=" text-xl font-semibold relative before:content-[''] before:block before:h-[125%] before:w-[2px] before:bg-purple-500 before:absolute before:left-[-12px]">
            LLM model
          </h3>
          <div className="text-md text-justify">
            Tenderix využívá technologii{" "}
            <span className="font-bold">LLM modelu</span>
            , který kombinuje umělou inteligenci a strojové učení. <br /> Tento
            model odpovídá a poskytuje zdroje na základě sémantické shody mezi
            zadáním uživatele a rozsáhlou vektorovou znalostní bází.
          </div>
        </div>
        <div className="flex-1 glass-box flex flex-col gap-2 font-inter bg-[#282828] rounded-md text-white p-5">
          <h3 className=" text-xl font-semibold relative before:content-[''] before:block before:h-[125%] before:w-[2px] before:bg-purple-500 before:absolute before:left-[-12px]">
            LLM model
          </h3>
          <div className="text-md text-justify">
            Tenderix využívá technologii{" "}
            <span className="font-bold">LLM modelu</span>
            , který kombinuje umělou inteligenci a strojové učení. <br /> Tento
            model odpovídá a poskytuje zdroje na základě sémantické shody mezi
            zadáním uživatele a rozsáhlou vektorovou znalostní bází.
          </div>
        </div>
      </div>
    </div>
  );
}
