import WorksDesign from "@/components/WorksDesign";
import Header from "../components/Header";
import Hero from "../components/Hero";
import WorksWeb from "../components/WorksWeb";
import "../sass/styles.scss";

export default function Home() {
  return (
    <main>
      <Hero />
      <WorksWeb />
      <WorksDesign />
    </main>
  );
}
