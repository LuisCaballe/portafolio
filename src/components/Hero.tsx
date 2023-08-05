import React from "react";

const Hero = (): React.ReactElement => {
  return (
    <section className="hero-section">
      <h2>
        I&apos;m Luis Caballé.
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
