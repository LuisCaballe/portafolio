import Image from "next/image";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luis Caballé - Weedom",
  description: "A sample of graphic design work for Weedom by Luis Caballé",
};

const WeedomPage = (): React.ReactElement => {
  return (
    <>
      <main>
        <section className="design-project">
          <h2 className="design-project__title">Weedom</h2>
          <p>
            {`Creation of the brand identity for Weedom, a smokers' association
        located in Barcelona. The graphic design tasks involved: logo, business cards, envelopes,
        official A4 sheets, website, newsletter and decorative graphics.
        `}
          </p>
          <p className="design-project__text-copyright">
            © Grupo Much More - Work done at Grupo Much More, a communication
            agency in Barcelona.
          </p>
          <div className="design-project__image-container">
            <Image
              src="/images/design-projects/weedom/stationery_weedom.jpg"
              alt="Weedom's stationery design"
              width="940"
              height="627"
            />
            <Image
              src="/images/design-projects/weedom/business-card_weedom.jpg"
              alt="Weedom's business card design"
              width="940"
              height="564"
            />
            <Image
              src="/images/design-projects/weedom/web_weedom.jpg"
              alt="Weedom's web design"
              width="940"
              height="627"
            />
            <Image
              src="/images/design-projects/weedom/poster_weedom_03.jpg"
              alt="Weedom's poster design"
              width="940"
              height="627"
            />
            <Image
              src="/images/design-projects/weedom/poster_weedom_01.jpg"
              alt="Weedom's poster design"
              width="940"
              height="627"
            />
            <Image
              src="/images/design-projects/weedom/poster_weedom_02.jpg"
              alt="Weedom's poster design"
              width="940"
              height="627"
            />
          </div>
        </section>
      </main>
    </>
  );
};

export default WeedomPage;
