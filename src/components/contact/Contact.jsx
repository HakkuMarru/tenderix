import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import info from "../../../assets/info.png";

export default function NewsSection() {
  useEffect(() => {}, []); // Empty dependency array ensures this runs only once on mount

  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration in milliseconds
      once: true, // Only animate once when in view
      offset: 200, // Offset from the top of the viewport
    });
  }, []);

  return (
    <div data-aos="fade-up" className=" px-[75px] flex flex-col gap-10 lg:pt-[175px] xl:px-0 pt-[150px] xl:pt-0 xl:mt-[10rem]">
      <h2 className="text-white text-2xl font-semibold text-center">
        Kontakt
      </h2>
        <form action="">
            <div>
                <label htmlFor=""></label>
                <input type="text" />
            </div>
        </form>
    </div>
  );
}

// <div className="glass-box flex gap-5 p-5">
//   <div className="">

//   <div className="flex items-start justify-center">
//     <img src={info} alt="" />
//   </div>
//   <h3 className="font-inter text-white text-2xl lg:text-xl font-semibold">
//     Title
//   </h3>
//   </div>
//   <div></div>
//   <div className="text-[#CBCBCB] text-md lg:text-medium text-justify">
//     Body text for whatever you’d like to say. Add main takeaway points,
//     quotes, anecdotes, or even a very very short story.{" "}
//   </div>
// </div>
