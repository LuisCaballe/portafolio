import React from "react";
import styles from "./Hero.module.css";
import pageStyles from "../../app/page.module.css";

const Hero = () => {
  return (
    <section className={styles.hero_section}>
      <p>Hi, nice to meet you! My name is:</p>
      <h2>
        Luis Caballé.
        <br />
        I&apos;m a{" "}
        <span className={pageStyles.secondary_text}>Graphic Designer</span>
        <br />
        and a{" "}
        <span className={pageStyles.secondary_text}>Full Stack Developer</span>.
      </h2>
      <p>
        With over ten years of experience in various design disciplines,
        I&apos;ve decided to introduce myself to the passionate world of web
        development. Always eager to learn and with a smile on my face {`:)`}
      </p>
    </section>
  );
};

export default Hero;
