import React from "react";
import styles from "./Hero.module.css";
import "../sass/styles.scss";

const Hero = (): React.ReactElement => {
  return (
    <section className="hero-section">
      <p>Hi, nice to meet you! My name is:</p>
      <h2>
        Luis Caballé.
        <br />
        I&apos;m a{" "}
        <span className="text--secondary-color">Graphic Designer</span>
        <br />
        and a{" "}
        <span className="text--secondary-color">Full Stack Developer</span>.
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
