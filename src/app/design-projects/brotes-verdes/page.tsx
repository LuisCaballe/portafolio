import Image from "next/image";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luis Caballé - Brotes Verdes",
  description:
    "A sample of graphic design work for Brotes Verdes by Luis Caballé",
};

const BrotesVerdesPage = (): React.ReactElement => {
  return (
    <>
      <main>
        <section className="design-project">
          <h2 className="design-project__title">
            <i>Brotes Verdes</i>
          </h2>
          <p>
            Design of different logo proposals and creation of the graphics and
            posters for each episode of <i>Brotes Verdes</i>, an audiovisual
            production company specialized in the field of cannabis.
          </p>
          <p className="design-project__text-copyright">
            © Grupo Much More - Work done at Grupo Much More, a communication
            agency in Barcelona.
          </p>
          <div className="design-project__image-container">
            <Image
              src="/images/design-projects/brotes-verdes/logo.jpg"
              alt="Brotes Verdes' logo"
              width="940"
              height="300"
            />
            <Image
              src="/images/design-projects/brotes-verdes/logo-proposals.jpg"
              alt="Brotes Verdes' logo proposals"
              width="940"
              height="284"
            />
            <Image
              src="/images/design-projects/brotes-verdes/poster-sketch-01.jpg"
              alt="Poster sketch"
              width="940"
              height="464"
            />
            <Image
              src="/images/design-projects/brotes-verdes/poster-01.jpg"
              alt="Brotes Verdes poster"
              width="940"
              height="664"
            />
            <Image
              src="/images/design-projects/brotes-verdes/poster-sketch-02.jpg"
              alt="Poster sketch"
              width="940"
              height="534"
            />
            <Image
              src="/images/design-projects/brotes-verdes/poster-02.jpg"
              alt="Brotes Verdes poster"
              width="940"
              height="665"
            />
            <iframe
              width="940"
              height="529"
              src="https://www.youtube.com/embed/9SUvR4LJwfE?rel=0&amp;controls=0&amp;hd=1&amp;start=37&amp;end=45&amp;loop=1&amp;iv_load_policy=3&amp;showinfo=0"
            ></iframe>
            <iframe
              width="940"
              height="529"
              src="https://www.youtube.com/embed/5CXBWdHI5EU?rel=0&amp;controls=0&amp;hd=1&amp;start=24&amp;end=40&amp;loop=1&amp;iv_load_policy=3&amp;showinfo=0"
            ></iframe>
          </div>
        </section>
      </main>
    </>
  );
};

export default BrotesVerdesPage;
