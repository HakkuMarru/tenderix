import { useEffect, useState } from "react";
import registration from "../../../assets/steps/registration.png";
import activation from "../../../assets/steps/activation.png";
import question from "../../../assets/steps/question.png";
import answer from "../../../assets/steps/answer.png";

export default function Steps() {
  return (
    <div
      data-aos="fade-up"
      className="flex items-center justify-center px-[75px] xl:px-[250px]"
    >
      <div className="grid grid-rows-4 gap-5">
        <div className="glass-box py-6 px-6 md:py-4 md:px-2 lg:py-6 lg:px-8 xl:py-5 xl:px-7 flex flex-col md:flex-row gap-5 items-center justify-start">
          <div className="flex items-center justify-center xl:flex-auto">
            <img
              src={registration}
              alt=""
              className="w-[120px] h-[120px] xl:w-[90px] xl:h-[90px]"
            />
          </div>
          <div className="flex flex-col justify-center gap-2">
            <h3 className="text-[#C6BFFF] text-center md:text-left text-xl md:text-xl lg:text-xl xl:text-xl font-semibold">
              Registrujte se!
            </h3>
            <div className="text-[#CBCBCB] text-md text-justify md:text-left xl:text-md">
              Aby bylo možné využívat služeb Tenderixe, je nezbytné provést
              jednoduchou registraci.
            </div>
          </div>
        </div>
        <div className="glass-box py-6 px-6 md:py-4 md:px-2 lg:py-6 lg:px-8 xl:py-5 xl:px-7 flex flex-col md:flex-row gap-5 items-center justify-start">
          <div className="flex items-center justify-center xl:flex-auto">
            <img
              src={registration}
              alt=""
              className="w-[120px] h-[120px] xl:w-[90px] xl:h-[90px]"
            />
          </div>
          <div className="flex flex-col justify-center gap-2">
            <h3 className="text-[#C6BFFF] text-center md:text-left text-xl md:text-xl lg:text-xl xl:text-xl font-semibold">
              Registrujte se!
            </h3>
            <div className="text-[#CBCBCB] text-md text-justify md:text-left xl:text-md">
              Aby bylo možné využívat služeb Tenderixe, je nezbytné provést
              jednoduchou registraci.
            </div>
          </div>
        </div>
        <div className="glass-box py-6 px-6 md:py-4 md:px-2 lg:py-6 lg:px-8 xl:py-5 xl:px-7 flex flex-col md:flex-row gap-5 items-center justify-start">
          <div className="flex items-center justify-center xl:flex-auto">
            <img
              src={registration}
              alt=""
              className="w-[120px] h-[120px] xl:w-[90px] xl:h-[90px]"
            />
          </div>
          <div className="flex flex-col justify-center gap-2">
            <h3 className="text-[#C6BFFF] text-center md:text-left text-xl md:text-xl lg:text-xl xl:text-xl font-semibold">
              Registrujte se!
            </h3>
            <div className="text-[#CBCBCB] text-md text-justify md:text-left xl:text-md">
              Aby bylo možné využívat služeb Tenderixe, je nezbytné provést
              jednoduchou registraci.
            </div>
          </div>
        </div>
        <div className="glass-box py-6 px-6 md:py-4 md:px-2 lg:py-6 lg:px-8 xl:py-5 xl:px-7 flex flex-col md:flex-row gap-5 items-center justify-start">
          <div className="flex items-center justify-center xl:flex-auto">
            <img
              src={registration}
              alt=""
              className="w-[120px] h-[120px] xl:w-[90px] xl:h-[90px]"
            />
          </div>
          <div className="flex flex-col justify-center gap-2">
            <h3 className="text-[#C6BFFF] text-center md:text-left text-xl md:text-xl lg:text-xl xl:text-xl font-semibold">
              Registrujte se!
            </h3>
            <div className="text-[#CBCBCB] text-md text-justify md:text-left xl:text-md">
              Aby bylo možné využívat služeb Tenderixe, je nezbytné provést
              jednoduchou registraci.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
