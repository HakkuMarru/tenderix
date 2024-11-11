import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Background from "../background/Background";
import Price from "./components/Price";
import ExtendedVersion from "./components/ExtendedVersion";

export default function Pricing() {
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
    <main className="bg-[rgba(0,0,0,0.4)]  flex flex-col gap-10 pb-[75px] xl:pb-10">
      <Background />
      <Price />
      <ExtendedVersion />
    </main>
  );
}
