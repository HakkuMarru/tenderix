import { useEffect, useState } from "react";
import registration from "../../../assets/steps/registration.png";
import activation from "../../../assets/steps/activation.png";
import question from "../../../assets/steps/question.png";
import answer from "../../../assets/steps/answer.png";

export default function Steps() {
  return (
    <div
      data-aos="fade-up"
      className="flex items-center justify-center px-[60px] md:px-[100px] xl:px-[250px]"
    >
      <div className="grid grid-rows-4 gap-5">
        <div className="glass-box py-6 px-6 md:py-2 md:px-6 lg:py-6 lg:px-8 xl:py-5 xl:px-7 flex flex-col md:flex-row gap-5 items-center justify-start">
          <div className="flex items-center justify-center xl:flex-auto">
            <img
              src={registration}
              alt=""
              className="w-[120px] h-[120px] md:object-contain xl:w-[90px] xl:h-[90px]"
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
        <div className="glass-box py-6 px-6 md:py-2 md:px-6 lg:py-6 lg:px-8 xl:py-5 xl:px-7 flex flex-col md:flex-row gap-5 items-center justify-start">
          <div className="flex items-center justify-center xl:flex-auto">
            <img
              src={activation}
              alt=""
              className="w-[120px] h-[120px] md:object-contain xl:w-[90px] xl:h-[90px]"
            />
          </div>
          <div className="flex flex-col justify-center gap-2">
            <h3 className="text-[#C6BFFF] text-center md:text-left text-xl md:text-xl lg:text-xl xl:text-xl font-semibold">
              Aktivujte si účet!
            </h3>
            <div className="text-[#CBCBCB] text-md text-justify md:text-left xl:text-md">
              Po registraci je nezbytné prostřednictvím emailu aktivovat svůj
              účet.
            </div>
          </div>
        </div>
        <div className="glass-box py-6 px-6 md:py-2 md:px-6 lg:py-6 lg:px-8 xl:py-5 xl:px-7 flex flex-col md:flex-row gap-5 items-center justify-start">
          <div className="flex items-center justify-center xl:flex-auto">
            <img
              src={question}
              alt=""
              className="w-[120px] h-[120px] md:object-contain xl:w-[90px] xl:h-[90px]"
            />
          </div>
          <div className="flex flex-col justify-center gap-2">
            <h3 className="text-[#C6BFFF] text-center md:text-left text-xl md:text-xl lg:text-xl xl:text-xl font-semibold">
              Zeptej se!
            </h3>
            <div className="text-[#CBCBCB] text-md text-justify md:text-left xl:text-md">
              Pro získání potřebné odpovědi je nezbytné správně formulovat svůj
              dotaz / problém z oblasti veřejných zakázek.
            </div>
          </div>
        </div>
        <div className="glass-box py-6 px-6 md:py-2 md:px-6 lg:py-6 lg:px-8 xl:py-5 xl:px-7 flex flex-col md:flex-row gap-5 items-center justify-start">
          <div className="flex items-center justify-center xl:flex-auto">
            <img
              src={answer}
              alt=""
              className="w-[120px] h-[120px] md:object-contain xl:w-[90px] xl:h-[90px]"
            />
          </div>
          <div className="flex flex-col justify-center gap-2">
            <h3 className="text-[#C6BFFF] text-center md:text-left text-xl md:text-xl lg:text-xl xl:text-xl font-semibold">
              Získejte zdroje a odpověď!
            </h3>
            <div className="text-[#CBCBCB] text-md text-justify md:text-left xl:text-md">
              Jestliže byl dotaz správně formulován, je pravděpodobné, že
              Tenderix odpověděl správně!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
