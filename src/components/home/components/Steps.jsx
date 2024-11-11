import { useEffect, useState } from "react";
import registration from "../../../assets/steps/registration.png";
import activation from "../../../assets/steps/activation.png";
import question from "../../../assets/steps/question.png";
import answer from "../../../assets/steps/answer.png";

export default function Steps() {
  return (
    <div data-aos="fade-up" className="xl:h-[100vh] mb-40 xl:mb-0 xl:py-0 flex items-center justify-center mx-14 lg:mx-[100px] xl:mx-[350px]">
      <div className="grid grid-rows-4 gap-7 lg:gap-5">
        <div className="glass-box py-6 px-6 md:py-4 md:px-2 lg:py-6 lg:px-8 xl:py-5 xl:px-5 flex flex-col md:flex-row gap-5 items-center justify-start">
          <div className="md:flex-[2] lg:flex-[1] flex items-center justify-center xl:flex-auto">
            <img
              src={registration}
              alt=""
              className="md:object-cover w-[130px] h-[130px] md:w-[120px] md:h-[120px] lg:w-[120px] lg:h-[120px] xl:w-[90px] xl:h-[90px]"
            />
          </div>
          <div className="flex flex-col justify-center gap-2 md:flex-[5] lg:flex-[5]">
            <h3 className="text-[#C6BFFF] text-center md:text-left text-xl md:text-xl lg:text-xl xl:text-lg font-semibold">
              Registrujte se!
            </h3>
            <div className="text-[#CBCBCB] text-lg text-center md:text-left xl:text-lg">
              Aby bylo možné využívat služeb Tenderixe, je nezbytné provést
              jednoduchou registraci.
            </div>
          </div>
        </div>
        <div className="glass-box py-6 px-6 md:py-4 md:px-2 lg:py-6 lg:px-8 xl:py-3 xl:px-5 flex flex-col md:flex-row gap-5 items-center justify-start">
          <div className="md:flex-[2] lg:flex-[1] flex items-center justify-center xl:flex-auto">
            <img
              src={activation}
              alt=""
              className="md:object-cover w-[130px] h-[130px] md:w-[120px] md:h-[120px] lg:w-[120px] lg:h-[120px] xl:w-[90px] xl:h-[90px]"
            />
          </div>
          <div className="flex flex-col justify-center gap-2 md:flex-[5] lg:flex-[5]">
            <h3 className="text-[#C6BFFF] text-center md:text-left text-xl md:text-xl lg:text-xl font-semibold">
            Aktivujte si účet!
            </h3>
            <div className="text-[#CBCBCB] text-lg text-center md:text-left">
            Po registraci je nezbytné prostřednictvím emailu aktivovat svůj účet.
            </div>
          </div>
        </div>
        <div className="glass-box py-6 px-6 md:py-4 md:px-2 lg:py-6 lg:px-8 xl:py-3 xl:px-5 flex flex-col md:flex-row gap-5 items-center justify-start">
          <div className="md:flex-[2] lg:flex-[1] flex items-center justify-center xl:flex-auto">
            <img
              src={question}
              alt=""
              className="md:object-cover w-[130px] h-[130px] md:w-[120px] md:h-[120px] lg:w-[120px] lg:h-[120px] xl:w-[90px] xl:h-[90px]"
            />
          </div>
          <div className="flex flex-col justify-center gap-2 md:flex-[5] lg:flex-[5]">
            <h3 className="text-[#C6BFFF] text-center md:text-left text-xl md:text-xl lg:text-xl font-semibold">
            Zeptej se!
            </h3>
            <div className="text-[#CBCBCB] text-lg text-center md:text-left">
            Pro získání potřebné odpovědi je nezbytné správně formulovat svůj dotaz / problém z oblasti veřejných zakázek.
            </div>
          </div>
        </div>
        <div className="glass-box py-6 px-6 md:py-4 md:px-2 lg:py-6 lg:px-8 xl:py-3 xl:px-5 flex flex-col md:flex-row gap-5 items-center justify-start">
          <div className="md:flex-[2] lg:flex-[1] flex items-center justify-center xl:flex-auto">
            <img
              src={answer}
              alt=""
              className="md:object-cover w-[130px] h-[130px] md:w-[120px] md:h-[120px] lg:w-[120px] lg:h-[120px] xl:w-[90px] xl:h-[90px]"
            />
          </div>
          <div className="flex flex-col justify-center gap-2 md:flex-[5] lg:flex-[5]">
            <h3 className="text-[#C6BFFF] text-center md:text-left text-xl md:text-xl lg:text-xl font-semibold">
            Získejte zdroje a odpověď!
            </h3>
            <div className="text-[#CBCBCB] text-lg text-center md:text-left">
            Jestliže byl dotaz správně formulován, je pravděpodobné, že Tenderix odpověděl správně!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
