import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ContactForm() {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration in milliseconds
      once: true, // Only animate once when in view
      offset: 200, // Offset from the top of the viewport
    });
  }, []);

  return (
    <div
      data-aos="fade-up"
      className=" px-[75px] flex flex-col gap-10 lg:pt-[175px] xl:px-0 pt-[150px] xl:pt-0 xl:mt-[10rem] w-full"
    >
      <h2 className="text-white text-2xl font-semibold text-center">Kontakt</h2>
      <form
        action=""
        className="glass-box p-5 flex flex-col gap-5 lg:w-[58rem] self-center min-w-[300px] w-full"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="first-name" className="text-white">
            Jméno
          </label>
          <input
            type="text"
            id="first-name"
            className="px-2 py-1 rounded-md bg-[rgba(0,0,0,0.15)] border-[1px] border-[#444444]"
            placeholder="Vaše jméno"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="last-name" className="text-white">
            Příjmení
          </label>
          <input
            type="text"
            id="last-name"
            className="px-2 py-1 rounded-md bg-[rgba(0,0,0,0.25)] border-[1px] border-[#444444]"
            placeholder="Vaše příjmení"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-white">
            Email
          </label>
          <input
            type="text"
            id="email"
            className="px-2 py-1 rounded-md bg-[rgba(0,0,0,0.25)] border-[1px] border-[#444444]"
            placeholder="Váš email"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-white">
            Zpráva
          </label>
          <textarea
            type="textarea"
            id="message"
            rows="5"
            className="px-2 py-1 rounded-md bg-[rgba(0,0,0,0.25)] border-[1px] border-[#444444] resize-y w-auto"
            placeholder="Vaše zpráva"
          />
        </div>
        <button className="bg-white mt-3 border border-1 border-white text-black text-sm rounded-md py-2 w-full hover:bg-transparent transition-all duration-200 hover:text-white">
          Odeslat
        </button>
      </form>
    </div>
  );
}
