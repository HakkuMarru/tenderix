import { useEffect, useState } from "react";

export default function Price() {
  const [period, setPeriod] = useState("monthly");
  const [animate, setAnimate] = useState(false);

  // Function to handle period change with animation
  const handlePeriodChange = (newPeriod) => {
    if (newPeriod !== period) {
      setAnimate(false);
      setTimeout(() => {
        setPeriod(newPeriod);
        setAnimate(true);
      }, 50); // Small delay to trigger re-animation
    }
  };

  const monthlyPlans = [
    {
      id: 1,
      name: "Začátečník",
      price: 350,
      period: "měsíc",
      features: ["Až 50 dotazů / měsíc", "1 uživatel", "Emailová podpora", "List item", "List item"],
    },
    {
      id: 2,
      name: "Pokročilý",
      price: 700,
      period: "měsíc",
      features: ["Až 100 dotazů / měsíc", "1 uživatel", "Emailová podpora", "List item", "List item"],
    },
    {
      id: 3,
      name: "Expert",
      price: 1400,
      period: "měsíc",
      features: ["Až 200 dotazů / měsíc", "1 uživatel", "Emailová podpora", "List item", "List item"],
    },
  ];

  const annualPlans = [
    {
      id: 1,
      name: "Začátečník",
      price: 300,
      period: "měsíc",
      features: ["Až 50 dotazů / měsíc", "1 uživatel", "Emailová podpora", "List item", "List item"],
    },
    {
      id: 2,
      name: "Pokročilý",
      price: 600,
      period: "měsíc",
      features: ["Až 100 dotazů / měsíc", "1 uživatel", "Emailová podpora", "List item", "List item"],
    },
    {
      id: 3,
      name: "Expert",
      price: 1200,
      period: "měsíc",
      features: ["Až 200 dotazů / měsíc", "1 uživatel", "Emailová podpora", "List item", "List item"],
    },
  ];

  useEffect(() => {
    setAnimate(true); // Trigger animation on initial load
  }, []);
  return (
      //   xl:px-[275px]
    <div className="xl:w-[58rem] self-center h-full flex gap-10 xl:gap-5 items-center justify-start flex-col px-[75px] xl:px-0 pt-[150px] lg:pt-[175px] xl:mt-[10rem] xl:pt-0">
      <h2 className="text-white text-2xl font-semibold text-center">
        Ceník rozšířené verze aplikace
      </h2>

      {/* Toggle Buttons for Monthly/Annual Period */}
      <div className="flex gap-5 justify-between w-full xl:w-auto xl:justify-end self-center xl:self-end">
        <div
          className={`glass-box-subscription text-white text-center w-full xl:w-auto font-light rounded-md px-2 py-1 cursor-pointer ${
            period === "monthly" ? "" : "glass-box-subscription-active"
          }`}
          onClick={() => handlePeriodChange("monthly")}
        >
          Měsíčně
        </div>
        <div
          className={`glass-box-subscription text-white text-center w-full xl:w-auto font-light rounded-md px-2 py-1 cursor-pointer ${
            period === "annual" ? "" : "glass-box-subscription-active"
          }`}
          onClick={() => handlePeriodChange("annual")}
        >
          Ročně
        </div>
      </div>

      {/* Conditional Rendering Based on Selected Period */}
      {period === "monthly" ? (
        <div className={`flex flex-col gap-5 lg:flex-row items-center justify-between w-full lg:w-[58rem] ${animate ? "fade-in" : ""}`}>
          {monthlyPlans.map((plan) => (
          <div key={plan.id} className="w-full glass-box flex flex-col items-start justify-center gap-5 p-8 lg:w-[280px]">
            <div className="text-[#C6BFFF] text-xl text-center font-semibold w-full">{plan.name}</div>
            <div className="flex items-end justify-center gap-2 w-full">
              <div className="text-white text-4xl font-semibold">{plan.price}</div>
              <div className="text-white text-lg font-semibold">Kč</div>
              <div className="text-white text-xs pb-1">/ {plan.period}</div>
            </div>
            <ul className="flex flex-col gap-2">
              {plan.features.map((feature, index) => (
                <li key={index} className="text-[#d1d1d1] text-sm">
                  &bull; {feature}
                </li>
              ))}
            </ul>
            <button className="bg-white border border-1 border-white text-black text-sm rounded-md py-2 w-full hover:bg-transparent transition-all duration-200 hover:text-white">
              Koupit
            </button>
          </div>
        ))}

        </div>
      ) : (
        <div className={`flex flex-col gap-5 lg:flex-row items-center justify-between w-full lg:w-[58rem] ${animate ? "fade-in" : ""}`}>
          {annualPlans.map((plan) => (
          <div key={plan.id} className="w-full glass-box flex flex-col items-start justify-center gap-5 p-8 lg:w-[280px]">
            <div className="text-[#C6BFFF] text-xl text-center font-semibold w-full">{plan.name}</div>
            <div className="flex items-end justify-center gap-2 w-full">
              <div className="text-white text-4xl font-semibold">{plan.price}</div>
              <div className="text-white text-lg font-semibold">Kč</div>
              <div className="text-white text-xs pb-1">/ {plan.period}</div>
            </div>
            <ul className="flex flex-col gap-2">
              {plan.features.map((feature, index) => (
                <li key={index} className="text-[#d1d1d1] text-sm">
                  &bull; {feature}
                </li>
              ))}
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
