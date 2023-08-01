import Image from "next/image";
import React from "react";

const WeedomPage = (): React.ReactElement => {
  return (
    <>
      <main>
        <section className="design-project">
          <h2 className="design-project__title">Weedom</h2>
          <p>
            {`Creation of the corporate identity for Weedom, a smokers' association
        located in Barcelona. The graphic design tasks were: logo, cards, envelopes,
        official A4 sheets, website, newsletter and decorative graphics.
        `}
          </p>
          <p className="design-project__text-copyright">
            © grupomuchmore - Work done at grupomuchmore, a communication
            agency in Barcelona.
          </p>
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
        </section>
      </main>
    </>
  );
};

export default WeedomPage;
