import { useEffect, useState } from "react";
import logo from "../../assets/logo/logo.png";
import menu from "../../assets/menu.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle menu state
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative glass-box-nav bg-black h-[90px] lg:h-[120px] xl:h-[90px] lg:px-[40px] p-[20px] flex justify-between lg:grid lg:grid-cols-3">
      <div className="flex gap-2 justify-start items-center">
        <img src={logo} alt="Logo" className="w-[50px] h-[50px]" />
        <div>
          <div className=" text-white font-bold">TENDERIX</div>
          <div className=" text-white hidden xl:block">
            aktuální zakázková praxe
          </div>
        </div>
      </div>
      <div className="lg:flex gap-4 justify-center items-center hidden">
        <div className="glass-box-menu text-white text-lg bg-[#444444] px-3 py-1 rounded-lg">
          O nás
        </div>
        <div className="text-white text-lg">Ceník</div>
        <div className="text-white text-lg">Aktuálně</div>
        <div className="text-white text-lg">Kontakt</div>
      </div>
      <div className="flex gap-4 justify-end items-center">
        <div className="hidden lg:block glass-box-login text-white bg-[#303030] px-3 py-1 rounded-lg text-lg border-2 border-[#949494]">
          Přihlásit
        </div>
        <div className="glass-box-register text-black bg-[#ffffff] px-3 py-1 rounded-lg text-lg border-2 border-[#767676]">
          Vyzkoušet zdarma
        </div>
      </div>

      <div
        className="absolute right-[20px] -bottom-[75px] rounded-full glass-box-menu-icon p-4 z-50 cursor-pointer"
        onClick={toggleMenu}
      >
        <img src={menu} alt="Menu" className="w-[25px] h-[25px] invert" />
      </div>

      <div
        className={`bg-green-400 h-screen w-screen absolute top-0 left-0 transform duration-300 z-40 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      ></div>
    </nav>
  );
}
