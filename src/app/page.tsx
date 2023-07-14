import { Header } from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import WorksWeb from "../components/WorksWeb/WorksWeb";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Header />
      <span className={styles.separator}></span>
      <Hero />
      <h3 className={styles.title__line}>My Work on web</h3>
      <WorksWeb />
    </>
  );
}
