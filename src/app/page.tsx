"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Hero from "../components/Hero";
import WorksWeb from "../components/WorksWeb";
import WorksDesign from "../components/WorksDesign";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <main>
      <Hero />
      <WorksWeb />
      <WorksDesign />
    </main>
  );
}
