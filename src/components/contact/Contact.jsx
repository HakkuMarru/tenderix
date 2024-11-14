import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import ContactForm from "./components/ContactForm";
import Background from "../background/Background";

export default function NewsSection() {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration in milliseconds
      once: true, // Only animate once when in view
      offset: 200, // Offset from the top of the viewport
    });
  }, []);

  return (
    <main className="bg-[rgba(0,0,0,0.4)] flex items-center justify-center flex-col pb-10 xl:pb-20 ">
      <ContactForm />
      <Background />
    </main>
  );
}
