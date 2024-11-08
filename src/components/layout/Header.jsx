import { useEffect, useState } from "react";
import logo from "../../assets/logo/logo.png";
import menu from "../../assets/menu.png";
import close from "../../assets/close.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle menu state
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed glass-box-nav bg-black h-[90px] lg:h-[120px] xl:h-[90px] lg:px-[40px] p-[20px] flex justify-between xl:grid xl:grid-cols-3">
      <div className="flex gap-2 justify-start items-center z-50">
        <a href="">
          <img src={logo} alt="Logo" className="w-[50px] h-[50px]" />
        </a>
        <div>
          <a href="" className=" text-white font-bold">TENDERIX</a>
          <div className=" text-white hidden xl:block">
            aktuální zakázková praxe
          </div>
        </div>
      </div>
      <div className="xl:flex gap-4 justify-center items-center hidden">
        <div className="text-white text-lg bg-[rgb(112,64,126)] px-3 py-1 rounded-lg cursor-pointer">
          O nás
        </div>
        <div className="text-white text-lg cursor-pointer hover:text-[#000] hover:bg-[rgba(255,255,255,1)] px-3 py-1 rounded-lg transition-all duration-300">
          Ceník
        </div>
        <div className="text-white text-lg cursor-pointer hover:text-[#000] hover:bg-[rgba(255,255,255,1)] px-3 py-1 rounded-lg transition-all duration-300">
          Aktuálně
        </div>
        <div className="text-white text-lg cursor-pointer hover:text-[#000] hover:bg-[rgba(255,255,255,1)] px-3 py-1 rounded-lg transition-all duration-300">
          Kontakt
        </div>
      </div>
      <div className="flex gap-4 justify-end items-center z-50">
        <div className="hidden lg:block text-white bg-[#303030] px-3 py-1 rounded-lg text-lg border-2 border-[#949494] transition-all duration-300 cursor-pointer">
          Přihlásit
        </div>
        <div className="text-black bg-[#ffffff] px-3 py-1 rounded-lg text-lg border-2 transition-all duration-300 cursor-pointer">
          Vyzkoušet zdarma
        </div>
      </div>

      <div
        className="xl:hidden absolute right-[20px] -bottom-[75px] rounded-full glass-box-menu-icon p-4 z-50 cursor-pointer"
        onClick={toggleMenu}
      >
        <img
          src={isOpen ? close : menu}
          alt={isOpen ? "Menu" : "Plus"}
          className="w-[25px] h-[25px] invert"
        />
      </div>

      <div
        className={`glass-box-menu-opened flex items-center justify-center h-screen w-screen absolute top-0 left-0 transform duration-300 z-40 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-center flex-col gap-8">
          <div className="bg-[#593364] font-poppins text-white text-3xl font-semibold rounded-xl text-center px-5 py-3">
            Přihlásit
          </div>
          <div></div>
          <div className="text-white font-poppins text-3xl font-semibold">
            O nás
          </div>
          <div className="text-white font-poppins text-3xl font-semibold">
            Ceník
          </div>
          <div className="text-white font-poppins text-3xl font-semibold">
            Aktuálně
          </div>
          <div className="text-white font-poppins text-3xl font-semibold">
            Kontakt
          </div>
        </div>
      </div>
    </nav>
  );
}
