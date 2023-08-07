import Image from "next/image";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luis Caballé - Grupo Much More",
  description:
    "A sample of graphic design work for Grupo Much More by Luis Caballé",
};

const GrupoMuchMorePage = (): React.ReactElement => {
  return (
    <>
      <main>
        <section className="design-project">
          <h2 className="design-project__title">Grupo Much More</h2>
          <p>
            For Grupo Much More, we created all kinds of graphic material:
            variations of the logo, graphics to announce changes in schedule and
            creation of microsites for special dates.
          </p>
          <p className="design-project__text-copyright">
            © Grupo Much More - Work done at Grupo Much More, a communication
            agency in Barcelona.
          </p>
          <div className="design-project__image-container">
            <Image
              src="/images/design-projects/gmm/logos-vintage.png"
              alt="Grupo Much More vintage logos"
              width="940"
              height="290"
            />
            <Image
              src="/images/design-projects/gmm/announcement.jpg"
              alt="Grupo Much More announcement"
              width="940"
              height="384"
            />
            <Image
              src="/images/design-projects/gmm/announcement-02.jpg"
              alt="Grupo Much More announcement"
              width="940"
              height="355"
            />
            <Image
              src="/images/design-projects/gmm/microsite.jpg"
              alt="Grupo Much More microsite"
              width="940"
              height="653"
            />
          </div>
        </section>
      </main>
    </>
  );
};

export default GrupoMuchMorePage;
