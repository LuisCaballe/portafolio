import Image from "next/image";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luis Caballé - Logos",
  description:
    "A sample of graphic design work of several logos by Luis Caballé",
};

const LogosPage = (): React.ReactElement => {
  return (
    <>
      <main>
        <section className="design-project">
          <h2 className="design-project__title">Logos</h2>
          <p>
            Creation of different logos and their respective proposals for the
            following clients: Law & Tech | EOI Esplugues | Guindit | Rodrigo 50
            | Grow School | Weedom | Airam Tv | Tuz! | FEDCAC | The Green Corner
            | Unreal Productions.
          </p>
          <p className="design-project__text-copyright">
            © Grupo Much More - Work done at Grupo Much More, a communication
            agency in Barcelona. <br />© Guindit - Work done at Guindit, a
            communication agency Brand Helping Online.
          </p>
          <div className="design-project__image-container">
            <Image
              src="/images/design-projects/logos/01-logos.jpg"
              alt="Some logos that I designed myself"
              width="940"
              height="974"
            />
            <Image
              src="/images/design-projects/logos/02-logos.jpg"
              alt="Some logos that I designed myself"
              width="940"
              height="996"
            />
            <Image
              src="/images/design-projects/logos/03-logos.jpg"
              alt="Some logos that I designed myself"
              width="940"
              height="952"
            />
          </div>
        </section>
      </main>
    </>
  );
};

export default LogosPage;
