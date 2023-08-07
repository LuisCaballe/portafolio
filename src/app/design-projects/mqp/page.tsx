import Image from "next/image";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luis Caballé - Més Que Paraules",
  description:
    "A sample of graphic design work for Més Que Paraules by Luis Caballé",
};

const MesQueParaulesPage = (): React.ReactElement => {
  return (
    <>
      <main>
        <section className="design-project">
          <h2 className="design-project__title">
            <i>Més Que Paraules</i>
          </h2>
          <p>
            <i>Celler Més Que Paraules</i> is a wine cellar with a designation
            of origin from the Pla de Bages. The graphic design tasks involved:
            creation of the logo, the image and their respective proposals,
            adaptation of the design for the labels and capsules of the wine
            bottles, business cards, roll-up and flyer.
          </p>
          <p className="design-project__text-copyright">
            © Guindit - Work done at Guindit, a communication agency Brand
            Helping Online.
          </p>
          <div className="design-project__image-container">
            <Image
              src="/images/design-projects/mqp/logos.jpg"
              alt="Més Que Paraules logos"
              width="940"
              height="617"
            />
            <Image
              src="/images/design-projects/mqp/business-card.jpg"
              alt="Més Que Paraules business card"
              width="940"
              height="491"
            />
            <Image
              src="/images/design-projects/mqp/bottles.jpg"
              alt="Més Que Paraules bottles"
              width="940"
              height="437"
            />
            <Image
              src="/images/design-projects/mqp/flyer.jpg"
              alt="Més Que Paraules flyer"
              width="940"
              height="491"
            />
            <Image
              src="/images/design-projects/mqp/roll-up.jpg"
              alt="Més Que Paraules flyer"
              width="940"
              height="437"
            />
          </div>
        </section>
      </main>
    </>
  );
};

export default MesQueParaulesPage;
