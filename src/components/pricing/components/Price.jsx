import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Price() {
  const [period, setPeriod] = useState("monthly");

  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration in milliseconds
      once: true, // Only animate once when in view
      offset: 200, // Offset from the top of the viewport
    });
  }, []);

  return (
    <div data-aos="fade-up" className="h-full xl:h-[95vh] flex gap-10 xl:gap-5 items-center justify-center flex-col px-[75px] xl:px-[250px] pt-[150px] xl:pt-[100px]">
      <h2 className="text-white text-2xl font-semibold text-center">
        Ceník rozšířené verze aplikace
      </h2>

      {/* Toggle Buttons for Monthly/Annual Period */}
      <div className="flex gap-5 justify-between w-full xl:w-auto xl:justify-end self-center xl:self-end">
        <div
          className={`glass-box-subscription text-white text-center w-full xl:w-auto font-light rounded-md px-2 py-1 cursor-pointer ${
            period === "monthly" ? "" : "glass-box-subscription-active"
          }`}
          onClick={() => setPeriod("monthly")}
        >
          Měsíčně
        </div>
        <div
          className={`glass-box-subscription text-white text-center w-full xl:w-auto font-light rounded-md px-2 py-1 cursor-pointer ${
            period === "annual" ? "" : "glass-box-subscription-active"
          }`}
          onClick={() => setPeriod("annual")}
        >
          Ročně
        </div>
      </div>

      {/* Conditional Rendering Based on Selected Period */}
      {period === "monthly" ? (
        <div className="flex flex-col xl:flex-row gap-5 items-center justify-between w-full">
          {/* Monthly Plans */}
          {[1, 2, 3].map((plan) => (
            <div key={plan} className="glass-box flex flex-col items-start justify-center gap-5 p-8 w-[280px]">
              <div className="text-[#C6BFFF] text-xl text-center font-semibold w-full">
                Začátečník
              </div>
              <div className="flex items-end justify-center gap-2 w-full">
                <div className="text-[#FFF] text-4xl font-semibold">350</div>
                <div className="text-[#FFF] text-lg font-semibold">Kč</div>
                <div className="text-[#FFF] text-xs pb-1">/ měsíc</div>
              </div>
              <ul className="flex flex-col gap-2">
                <li className="text-[#d1d1d1] text-sm">Až 50 dotazů / měsíc</li>
                <li className="text-[#d1d1d1] text-sm">1 uživatel</li>
                <li className="text-[#d1d1d1] text-sm">Emailová podpora</li>
              </ul>
              <button className="bg-white border border-1 border-white text-black text-sm rounded-md py-2 w-full hover:bg-transparent transition-all duration-200 hover:text-white">
                Koupit
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col xl:flex-row gap-5 items-center justify-between w-full">
          {/* Annual Plans */}
          {[1, 2, 3].map((plan) => (
            <div key={plan} className="glass-box flex flex-col items-start justify-center gap-5 p-8 w-[280px]">
              <div className="text-[#C6BFFF] text-xl text-center font-semibold w-full">
                Začátečník
              </div>
              <div className="flex items-end justify-center gap-2 w-full">
                <div className="text-[#FFF] text-4xl font-semibold">3500</div>
                <div className="text-[#FFF] text-lg font-semibold">Kč</div>
                <div className="text-[#FFF] text-xs pb-1">/ rok</div>
              </div>
              <ul className="flex flex-col gap-2">
                <li className="text-[#d1d1d1] text-sm">Až 600 dotazů / rok</li>
                <li className="text-[#d1d1d1] text-sm">3 uživatelé</li>
                <li className="text-[#d1d1d1] text-sm">Prioritní podpora</li>
              </ul>
              <button className="bg-white border border-1 border-white text-black text-sm rounded-md py-2 w-full hover:bg-transparent transition-all duration-200 hover:text-white">
                Koupit
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
