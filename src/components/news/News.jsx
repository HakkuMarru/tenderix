import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Background from "../background/Background";
import NewsSection from "./components/NewsSection";
// import Article from "./components/Article";

export default function News() {
  useEffect(() => {
  }, []); // Empty dependency array ensures this runs only once on mount

  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration in milliseconds
      once: true, // Only animate once when in view
      offset: 200, // Offset from the top of the viewport
    });
  }, []);

  return (
    <div className="relative bg-[rgba(0,0,0,0.4)] pb-10 md:pb-20 lg:pb-20">
      <div className="flex items-center justify-center">

      <NewsSection />
      </div>
      <Background />
    </div>
  );
}
