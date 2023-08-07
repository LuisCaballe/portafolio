import Hero from "../components/Hero";
import WorksWeb from "../components/WorksWeb";
import WorksDesign from "../components/WorksDesign";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luis Caballé",
  description:
    "Luis Caballé's online portfolio. A sample of graphic design and web development work I have done to date",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <WorksWeb />
      <WorksDesign />
    </main>
  );
}
