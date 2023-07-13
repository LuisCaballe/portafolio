import React from "react";
import pageStyles from "../../page.module.css";

const Hero = () => {
  return (
    <section className={pageStyles.hero_section}>
      <p className={pageStyles.content_text}>Hi there! My name is</p>
      <h2>Luis Caballé.</h2>
      <h2>
        {`I'm a Graphic Designer`}
        <br />
        and a Full Stack Developer
      </h2>
      <p className={pageStyles.content_text}>
        With over ten years of experience in various design disciplines, I’m
        your one-stop shop for your design needs.
      </p>
    </section>
  );
};

export default Hero;
