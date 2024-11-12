import { useState } from "react";
import { Link, useLocation  } from "react-router-dom";
import logo from "../../assets/logo/logo.png";
import menu from "../../assets/menu.png";
import close from "../../assets/close.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to check if a route is active
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed glass-box-nav bg-black h-[90px] lg:h-[120px] xl:h-[90px] lg:px-[40px] p-[20px] flex justify-between xl:grid xl:grid-cols-3">
      {/* Logo */}
      <div className="flex gap-2 justify-start items-center z-50">
        <Link to="/">
          <img src={logo} alt="Logo" className="w-[50px] h-[50px]" />
        </Link>
        <div>
          <Link to="/" className="text-white font-bold">
            TENDERIX
          </Link>
          <div className="text-white hidden xl:block">
            aktuální zakázková praxe
          </div>
        </div>
      </div>

      {/* Desktop Navigation Links */}
      <div className="xl:flex gap-4 justify-center items-center hidden">
        {/* O nás Link */}
        <Link
          to="/home"
          className={`text-white text-lg px-3 py-1 rounded-lg cursor-pointer ${
            isActive("/home") ? "bg-[rgb(112,64,126)]" : ""
          }`}
        >
          O nás
        </Link>

        {/* Ceník Link */}
        <Link
          to="/price"
          className={`text-white text-lg px-3 py-1 rounded-lg cursor-pointer ${
            isActive("/price") ? "bg-[rgb(112,64,126)]" : "hover:bg-white hover:text-black"
          }`}
        >
          Ceník
        </Link>

        {/* Other Links (not yet implemented) */}
        <div className="text-white text-lg cursor-pointer hover:bg-white hover:text-black px-3 py-1 rounded-lg transition-all duration-300">
          Aktuálně
        </div>
        <div className="text-white text-lg cursor-pointer hover:bg-white hover:text-black px-3 py-1 rounded-lg transition-all duration-300">
          Kontakt
        </div>
      </div>

      <div className="flex gap-4 justify-end items-center z-50">
        <div className="hidden lg:block text-white bg-[#303030] px-3 py-1 rounded-lg text-lg border-2 border-[#949494] transition-all duration-300 cursor-pointer">
          Přihlásit
        </div>
        <div className="text-black bg-[#ffffff] px-3 py-1 rounded-lg text-md xl:text-lg border-2 transition-all duration-300 cursor-pointer">
          Vyzkoušet zdarma
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div
        className="xl:hidden absolute right-[20px] -bottom-[75px] rounded-full glass-box-menu-icon p-4 z-50 cursor-pointer"
        onClick={toggleMenu}
      >
        <img src={isOpen ? close : menu} alt="Menu" className="w-[25px] h-[25px] invert" />
      </div>

      {/* Mobile Menu */}
      <div
        className={`glass-box-menu-opened flex items-center justify-center h-screen w-screen absolute top-0 left-0 transform duration-300 z-40 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-center flex-col gap-8">
          <Link to="/home" className="text-white font-poppins text-2xl font-semibold" onClick={toggleMenu}>
            O nás
          </Link>
          <Link to="/price" className="text-white font-poppins text-2xl font-semibold" onClick={toggleMenu}>
            Ceník
          </Link>
          <div className="text-white font-poppins text-2xl font-semibold">
            Aktuálně
          </div>
          <div className="text-white font-poppins text-2xl font-semibold">
            Kontakt
          </div>
        </div>
      </div>
    </nav>
  );
}
