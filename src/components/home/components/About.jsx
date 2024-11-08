import { useEffect, useState } from "react";
import Accordion from "react-bootstrap/Accordion";

import answer from "../../../assets/steps/answer.png";
import dominikZlebek from "../../../assets/photos/dominik-zlebek.png";
import janMusil from "../../../assets/photos/jan-musil.png";
import plus from "../../../assets/plus.png";

export default function About() {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <div className="flex flex-col items-center justify-center lg:mx-[100px] xl:py-[100px] xl:px-[200px] mx-14 gap-12 mb-40 xl:mb-0">
      <h2 className="font-inter text-white font-semibold text-3xl align-center">
        O nás
      </h2>
      <div className="grid lg:grid-cols-2 xl:grid-rows-2 gap-10">
        <div className="glass-box p-5 flex flex-col xl:flex-row gap-5">
          <img
            src={dominikZlebek}
            alt="Dominik Zlebek"
            className="rounded-md w-[300px] lg:w-full object-cover"
          />
          <div className="flex flex-col gap-5">
            <div className="flex flex-col items-center justify-between gap-10">
              <div className="flex flex-col gap-1">
                <div className="text-[#C6BFFF] text-xl lg:text-2xl">
                  Ing. Dominik Žlebek, LL.M.
                </div>
                <div className="text-white text-lg lg:text-lg">
                  specialista veřejných zakázek
                </div>
              </div>
              <div>
                <img
                  src={plus}
                  alt=""
                  className="w-[30px] h-[30px] invert"
                  onClick={() => toggle(0)}
                />
              </div>
            </div>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>More info</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <div
              className={`description text-white lg:text-lg ${
                selected === 0 ? "show" : ""
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
          </div>
        </div>
        <div className="glass-box p-5 flex flex-col xl:flex-row gap-5">
          <img
            src={dominikZlebek}
            alt="Dominik Zlebek"
            className="rounded-md w-[300px] lg:w-full object-cover"
          />
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-1" onClick={() => toggle(1)}>
              <div className="text-[#C6BFFF] text-xl lg:text-2xl">
                Ing. Dominik Žlebek, LL.M.
              </div>
              <div className="text-white text-lg lg:text-lg">
                specialista veřejných zakázek
              </div>
            </div>
            <div
              className={`text-white lg:text-lg ${
                selected === 1 ? "show" : ""
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
          </div>
        </div>
      </div>
    </div>
  );
}
