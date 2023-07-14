import Header from "../components/Header";
import Hero from "../components/Hero";
import WorksWeb from "../components/WorksWeb";
import "../sass/styles.scss";

export default function Home() {
  return (
    <>
      <Header />
      <span className="separator"></span>
      <Hero />
      <h3 className="title-line">My Work on web</h3>
      <WorksWeb />
    </>
  );
}
