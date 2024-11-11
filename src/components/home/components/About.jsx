import { useEffect, useState } from "react";

import answer from "../../../assets/steps/answer.png";
import dominikZlebek from "../../../assets/photos/dominik-zlebek.png";
import janMusil from "../../../assets/photos/jan-musil.png";
import plus from "../../../assets/plus.png";
import arrowDown from "../../../assets/arrow-down.png";

export default function About() {
  const [selected, setSelected] = useState(null);
  const [bothOpen, setBothOpen] = useState(false);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  // Toggle both accordions at the same time
  const toggleBoth = () => {
    setBothOpen(!bothOpen);
    if (bothOpen) {
      setSelected(null);
    } else {
      setSelected("both");
    }
  };

  return (
    <div
      data-aos="fade-up"
      className="flex flex-col items-center justify-center px-[75px] xl:px-[200px] gap-10"
    >
      <h2 className="font-inter text-white font-semibold text-2xl align-center">
        O nás
      </h2>
      <div className="grid lg:grid-cols-2 xl:grid-rows-2 xl:grid-cols-1 gap-5 xl:gap-10">
        <div
          className={`glass-box p-5 flex flex-col xl:flex-row gap-5 ${
            selected === 1 || bothOpen ? "pb-5" : "pb-0"
          }`}
        >
          {/* Image Section */}
          <img
            src={dominikZlebek}
            alt="Dominik Zlebek"
            className="rounded-md w-[300px] lg:w-full object-cover"
          />

          {/* Accordion Section */}
          <div className="flex flex-col gap-5">
            {/* Accordion Header */}
            <div className="flex flex-col gap-1 cursor-pointer">
              <h3 className="text-[#C6BFFF] text-xl lg:text-xl text-center">
                Ing. Dominik Žlebek, LL.M.
              </h3>
              <div className="text-white text-md text-center">
                specialista veřejných zakázek
              </div>
              <div
                className="lg:hidden flex items-center justify-center gap-2"
                onClick={() => toggle(1)}
              >
                <div className="text-white text-lg lg:text-lg text-center pt-2">
                  More info{" "}
                </div>
                <img
                  src={arrowDown}
                  alt=""
                  className={`invert mt-2 h-[16px] w-[16px] transition-all duration-100 ${
                    selected === 1 ? "rotate-180" : "rotate-0"
                  }`}
                />
              </div>
            </div>

            {/* Accordion Content */}
            <div
              className={`xl:hidden text-justify text-white text-lg lg:text-xl transition-all duration-300 overflow-hidden ${
                selected === 1 || bothOpen
                  ? "max-h-[999px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              Dominik Žlebek je absolventem Provozně ekonomické fakulty na České
              zemědělské univerzitě v Praze, kde vystudoval obor Podnikání a
              administrativa a získal akademický titul Ing. Již během studia se
              zaměřil na oblast veřejných zakázek v Technologické agentuře České
              republiky, kde profesně působil jako projektový manažer veřejných
              zakázek ve Výzkumu, vývoji a inovacích. Po škole se začal plně
              věnovat zadávání veřejných zakázek v městské společnosti
              Technologie hlavního města Prahy, a. s. a v současnosti působí v
              Praze jako konzultant veřejných zakázek. Nadto se věnuje
              vzdělávání a šíření dobrého povědomí o oblasti veřejných zakázek v
              rámci platformy „Veřejné zakázky 24“ a aplikace Tenderix - první
              umělé inteligence ve veřejných zakázkách.
            </div>

            <div className="hidden xl:block text-white text-md text-justify">
              Dominik Žlebek je absolventem Provozně ekonomické fakulty na České
              zemědělské univerzitě v Praze, kde vystudoval obor Podnikání a
              administrativa a získal akademický titul Ing. Již během studia se
              zaměřil na oblast veřejných zakázek v Technologické agentuře České
              republiky, kde profesně působil jako projektový manažer veřejných
              zakázek ve Výzkumu, vývoji a inovacích. Po škole se začal plně
              věnovat zadávání veřejných zakázek v městské společnosti
              Technologie hlavního města Prahy, a. s. a v současnosti působí v
              Praze jako konzultant veřejných zakázek. Nadto se věnuje
              vzdělávání a šíření dobrého povědomí o oblasti veřejných zakázek v
              rámci platformy „Veřejné zakázky 24“ a aplikace Tenderix - první
              umělé inteligence ve veřejných zakázkách.
            </div>
          </div>
        </div>
        <div
          className={`glass-box p-5 flex flex-col xl:flex-row gap-5 ${
            selected === 1 || bothOpen ? "pb-5" : "pb-0"
          }`}
        >
          {/* Image Section */}
          <img
            src={dominikZlebek}
            alt="Dominik Zlebek"
            className="rounded-md w-[300px] lg:w-full object-cover"
          />

          {/* Accordion Section */}
          <div className="flex flex-col gap-5">
            {/* Accordion Header */}
            <div className="flex flex-col gap-1 cursor-pointer">
              <h3 className="text-[#C6BFFF] text-xl lg:text-xl text-center">
                Ing. Dominik Žlebek, LL.M.
              </h3>
              <div className="text-white text-md text-center">
                specialista veřejných zakázek
              </div>
              <div
                className="lg:hidden flex items-center justify-center gap-2"
                onClick={() => toggle(1)}
              >
                <div className="text-white text-lg lg:text-lg text-center pt-2">
                  More info{" "}
                </div>
                <img
                  src={arrowDown}
                  alt=""
                  className={`invert mt-2 h-[16px] w-[16px] transition-all duration-100 ${
                    selected === 1 ? "rotate-180" : "rotate-0"
                  }`}
                />
              </div>
            </div>

            {/* Accordion Content */}
            <div
              className={`xl:hidden text-justify text-white text-lg lg:text-xl transition-all duration-300 overflow-hidden ${
                selected === 1 || bothOpen
                  ? "max-h-[999px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              Dominik Žlebek je absolventem Provozně ekonomické fakulty na České
              zemědělské univerzitě v Praze, kde vystudoval obor Podnikání a
              administrativa a získal akademický titul Ing. Již během studia se
              zaměřil na oblast veřejných zakázek v Technologické agentuře České
              republiky, kde profesně působil jako projektový manažer veřejných
              zakázek ve Výzkumu, vývoji a inovacích. Po škole se začal plně
              věnovat zadávání veřejných zakázek v městské společnosti
              Technologie hlavního města Prahy, a. s. a v současnosti působí v
              Praze jako konzultant veřejných zakázek. Nadto se věnuje
              vzdělávání a šíření dobrého povědomí o oblasti veřejných zakázek v
              rámci platformy „Veřejné zakázky 24“ a aplikace Tenderix - první
              umělé inteligence ve veřejných zakázkách.
            </div>

            <div className="hidden xl:block text-white text-md text-justify">
              Dominik Žlebek je absolventem Provozně ekonomické fakulty na České
              zemědělské univerzitě v Praze, kde vystudoval obor Podnikání a
              administrativa a získal akademický titul Ing. Již během studia se
              zaměřil na oblast veřejných zakázek v Technologické agentuře České
              republiky, kde profesně působil jako projektový manažer veřejných
              zakázek ve Výzkumu, vývoji a inovacích. Po škole se začal plně
              věnovat zadávání veřejných zakázek v městské společnosti
              Technologie hlavního města Prahy, a. s. a v současnosti působí v
              Praze jako konzultant veřejných zakázek. Nadto se věnuje
              vzdělávání a šíření dobrého povědomí o oblasti veřejných zakázek v
              rámci platformy „Veřejné zakázky 24“ a aplikace Tenderix - první
              umělé inteligence ve veřejných zakázkách.
            </div>
          </div>
        </div>
      </div>
      <div
        className="hidden glass-box w-full lg:flex xl:hidden items-center justify-center"
        onClick={toggleBoth}
      >
        <img
          src={arrowDown}
          alt=""
          className={`invert w-[50px] p-3 transition-all ease-in-out duration-100 ${
            bothOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>
    </div>
  );
}
