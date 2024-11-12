import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Hero from "./components/Hero";
import Steps from "./components/Steps";
import Resources from "./components/Resources";
import Technologies from "./components/Technologies";
import About from "./components/About";
import Links from "./components/Links";
import Warning from "./components/Warning";

import Background from "../background/Background";

export default function Home() {
  useEffect(() => {
    // Create an IntersectionObserver instance
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    });

    // Select all elements with the class "hidden-el"
    const hiddenElements = document.querySelectorAll(".hidden-el");

    // Observe each hidden element
    hiddenElements.forEach((el) => observer.observe(el));

    // Cleanup function to unobserve elements on component unmount
    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []); // Empty dependency array ensures this runs only once on mount


  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration in milliseconds
      once: true, // Only animate once when in view
      offset: 200, // Offset from the top of the viewport
    });
  }, []);

  return (
    <main className="bg-[rgba(0,0,0,0.4)] flex flex-col gap-28 xl:gap-32 pb-[75px] xl:pb-20">
      <Hero />
      <Steps />
      <Resources />
      <Technologies />
      <Background />
      <About />
      <Links />
      <Warning />
    </main>
  );
}
