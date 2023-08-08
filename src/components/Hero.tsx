import Image from "next/image";
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
      <article>
        <h3 className="hero-section__title">My tech stack:</h3>
        <Image
          src="/images/tech-stack/html5.svg"
          alt="Html5 icon"
          width="70"
          height="70"
        />
        <Image
          src="/images/tech-stack/css3.svg"
          alt="Css3 icon"
          width="70"
          height="70"
        />
        <Image
          src="/images/tech-stack/js.svg"
          alt="Javascript icon"
          width="70"
          height="70"
        />
        <Image
          src="/images/tech-stack/typescript.svg"
          alt="Typescript icon"
          width="70"
          height="70"
        />
        <Image
          src="/images/tech-stack/nextjs.svg"
          alt="Next.js icon"
          width="70"
          height="70"
        />
        <Image
          src="/images/tech-stack/reactjs.svg"
          alt="React icon"
          width="70"
          height="70"
        />
        <Image
          src="/images/tech-stack/redux.svg"
          alt="Redux icon"
          width="70"
          height="70"
        />
        <Image
          src="/images/tech-stack/nodejs.svg"
          alt="Node.js icon"
          width="70"
          height="70"
        />
        <Image
          src="/images/tech-stack/mongodb.svg"
          alt="MongoDB icon"
          width="70"
          height="70"
        />
        <Image
          src="/images/tech-stack/postman.svg"
          alt="Postman icon"
          width="70"
          height="70"
        />
        <Image
          src="/images/tech-stack/jest.svg"
          alt="Jest icon"
          width="70"
          height="70"
        />
        <Image
          src="/images/tech-stack/git.svg"
          alt="Git icon"
          width="70"
          height="70"
        />
        <Image
          src="/images/tech-stack/github.svg"
          alt="Github icon"
          width="70"
          height="70"
        />
        <Image
          src="/images/tech-stack/sass.svg"
          alt="Sass icon"
          width="70"
          height="70"
        />
        <Image
          src="/images/tech-stack/bootstrap5.svg"
          alt="Bootstrap icon"
          width="70"
          height="70"
        />
        <Image
          src="/images/tech-stack/figma.svg"
          alt="Figma icon"
          width="70"
          height="70"
        />
        <Image
          src="/images/tech-stack/ps.svg"
          alt="Photoshop icon"
          width="70"
          height="70"
        />
        <Image
          src="/images/tech-stack/ai.svg"
          alt="Illustrator icon"
          width="70"
          height="70"
        />
        <Image
          src="/images/tech-stack/id.svg"
          alt="InDesign icon"
          width="70"
          height="70"
        />
        <Image
          src="/images/tech-stack/ae.svg"
          alt="After Effects icon"
          width="70"
          height="70"
        />
      </article>
    </section>
  );
};

export default Hero;
