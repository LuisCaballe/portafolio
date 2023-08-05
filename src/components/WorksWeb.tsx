import React from "react";
import Image from "next/image";
import Link from "next/link";

const WorksWeb = (): React.ReactElement => {
  return (
    <>
      <section id="web">
        <h3 className="title-line" data-aos="fade-right">
          Web development projects
        </h3>
        <div className="card-container">
          <article className="card" data-aos="fade-up">
            <div className="card__image-container">
              <Image
                quality={100}
                className="card__image"
                src="/images/web-projects/work-web-gc.webp"
                fill
                alt={`Grandma's Cookbook's desktop screenshot`}
                sizes="(max-width: 850px) 75vw, (max-width: 1200px) 30vw"
              />
            </div>
            <div className="card__content">
              <h4 className="card__title">{`Grandma's Cookbook`}</h4>
              <p>
                Grandma&apos;s Cookbook is an application that allows users to
                create and manage a private collection of favourite recipes,
                preserving their culinary heritage.
              </p>
              <div className="card__links">
                <Link
                  className="link"
                  href="https://github.com/LuisCaballe/grandma-cookbook-front"
                  target="_blank"
                >
                  GitHub
                </Link>
                <Link
                  className="link"
                  href="https://grandmas-cookbook.netlify.app"
                  target="_blank"
                >
                  Demo
                </Link>
              </div>
            </div>
          </article>

          <article className="card" data-aos="fade-up">
            <div className="card__image-container">
              <Image
                quality={100}
                className="card__image"
                src="/images/web-projects/work-web-pp.webp"
                fill
                alt={`Pasapalabra Game's desktop screenshot`}
                sizes="(max-width: 850px) 75vw, (max-width: 1200px) 30vw"
              />
            </div>
            <div className="card__content">
              <h4 className="card__title">Pasapalabra Game</h4>
              <p>
                This project was created during the pre-course of the ISDI
                Coders Bootcamp. The goal of the project was to recreate the
                popular Spanish TV show.
              </p>
              <div className="card__links">
                <Link
                  className="link"
                  href="https://github.com/LuisCaballe/project-pasapalabra-HTML-CSS-JS"
                  target="_blank"
                >
                  GitHub
                </Link>
                <Link
                  className="link"
                  href="https://luiscaballe.github.io/project-pasapalabra-HTML-CSS-JS/"
                  target="_blank"
                >
                  Demo
                </Link>
              </div>
            </div>
          </article>

          <article className="card" data-aos="fade-up">
            <div className="card__image-container">
              <Image
                quality={100}
                className="card__image"
                src="/images/web-projects/work-web-c4.webp"
                fill
                alt={`Connect 4's desktop screenshot`}
                sizes="(max-width: 850px) 75vw, (max-width: 1200px) 30vw"
              />
            </div>
            <div className="card__content">
              <h4 className="card__title">Connect 4</h4>
              <p>
                This was an optional extra project for the pre-course of the
                ISDI Coders Bootcamp. The aim of the project was to create the
                classic connect 4 game, allowing two players or one player
                against the machine.
              </p>
              <div className="card__links">
                <Link
                  className="link"
                  href="https://github.com/LuisCaballe/conecta-4.git"
                  target="_blank"
                >
                  GitHub
                </Link>
                <Link
                  className="link"
                  href="https://luiscaballe.github.io/conecta-4/"
                  target="_blank"
                >
                  Demo
                </Link>
              </div>
            </div>
          </article>

          <article className="card" data-aos="fade-up">
            <div className="card__image-container">
              <Image
                quality={100}
                className="card__image"
                src="/images/web-projects/work-web-ca.webp"
                fill
                alt={`Calculator's desktop screenshot`}
                sizes="(max-width: 850px) 75vw, (max-width: 1200px) 30vw"
              />
            </div>
            <div className="card__content">
              <h4 className="card__title">Calculator</h4>
              <p>
                This project was the first of the pre-course of the ISDI Coders
                Bootcamp and I integrated HTML, CSS and JavaScript for the first
                time. The goal was to create a calculator with full
                functionality. I also added full keyboard functionality.
              </p>
              <div className="card__links">
                <Link
                  className="link"
                  href="https://github.com/LuisCaballe/project-calculator-HTML-CSS-JS"
                  target="_blank"
                >
                  GitHub
                </Link>
                <Link
                  className="link"
                  href="https://luiscaballe.github.io/project-calculator-HTML-CSS-JS/"
                  target="_blank"
                >
                  Demo
                </Link>
              </div>
            </div>
          </article>

          <article className="card" data-aos="fade-up">
            <div className="card__image-container">
              <Image
                quality={100}
                className="card__image"
                src="/images/web-projects/work-web-pf.webp"
                fill
                alt="Luis Caballe's portfolio screenshot"
                sizes="(max-width: 850px) 75vw, (max-width: 1200px) 30vw"
              />
            </div>
            <div className="card__content">
              <h4 className="card__title">Portfolio</h4>
              <p>
                Have you ever seen the meme of Spiderman pointing at another
                Spiderman and vice versa? Well, here it is. The aim of this
                project was to show some of the projects I have done so far in a
                clear and simple way.
              </p>
              <div className="card__links">
                <Link
                  className="link"
                  href="https://github.com/LuisCaballe/portafolio"
                  target="_blank"
                >
                  GitHub
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
};

export default WorksWeb;
