import Image from "next/image";
import React from "react";

const Rodrigo50Page = (): React.ReactElement => {
  return (
    <>
      <main>
        <section className="design-project">
          <h2 className="design-project__title">Rodrigo 50</h2>
          <p>
            Creation of the brand identity for Rodrigo 50, a smoking club in
            Barcelona. The graphic design tasks involved: presentation of
            different logo proposals, business cards and graphics to announce
            the events that took place in the venue.
          </p>
          <p className="design-project__text-copyright">
            © Grupo Much More - Work done at Grupo Much More, a communication
            agency in Barcelona.
          </p>
          <div className="design-project__image-container">
            <Image
              src="/images/design-projects/rodrigo-50/logo-r50.jpg"
              alt="Rodrigo 50's logo"
              width="940"
              height="398"
            />
            <Image
              src="/images/design-projects/rodrigo-50/logo-900c.jpg"
              alt="900ºC's logo"
              width="940"
              height="398"
            />
            <Image
              src="/images/design-projects/rodrigo-50/logo-proposals.jpg"
              alt="Rodrigo 50's logo proposals"
              width="940"
              height="953"
            />
            <Image
              src="/images/design-projects/rodrigo-50/business-card.jpg"
              alt="Rodrigo 50 business card"
              width="940"
              height="653"
            />
            <Image
              src="/images/design-projects/rodrigo-50/vinil-r50.jpg"
              alt="Rodrigo 50 vinil on the wall"
              width="940"
              height="461"
            />
            <Image
              src="/images/design-projects/rodrigo-50/flyers-r50.jpg"
              alt="Rodrigo 50 flyers"
              width="940"
              height="658"
            />
          </div>
        </section>
      </main>
    </>
  );
};

export default Rodrigo50Page;
