import Image from "next/image";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luis Caballé - Salva a caga",
  description:
    "A sample of graphic design work for Grupo Much More by Luis Caballé",
};

const SalvaACagaPage = (): React.ReactElement => {
  return (
    <>
      <main>
        <section className="design-project">
          <h2 className="design-project__title">
            <i>Salva a caga</i>
          </h2>
          <p>
            Design of logo, microsite and newsletter for <i>Salva a caga</i>,
            Christmas greeting of Grupo Much More.
          </p>
          <p className="design-project__text-copyright">
            © Grupo Much More - Work done at Grupo Much More, a communication
            agency in Barcelona.
          </p>
          <div className="design-project__image-container">
            <Image
              src="/images/design-projects/salva/logo.jpg"
              alt="Salva a caga's logo"
              width="940"
              height="772"
            />
            <Image
              src="/images/design-projects/salva/sketch.jpg"
              alt="Salva a caga's logo sketch"
              width="940"
              height="339"
            />
            <Image
              src="/images/design-projects/salva/newsletter.jpg"
              alt="Salva a caga's microsite"
              width="940"
              height="627"
            />
          </div>
        </section>
      </main>
    </>
  );
};

export default SalvaACagaPage;
