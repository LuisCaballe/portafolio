import Image from "next/image";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luis Caballé - Airam",
  description: "A sample of graphic design work for Airam by Luis Caballé",
};

const AiramPage = (): React.ReactElement => {
  return (
    <>
      <main>
        <section className="design-project">
          <h2 className="design-project__title">Airam</h2>
          <p>
            Graphic design of the regulations of AIRAM, a cannabis association
            in Barcelona, for subsequent printing on vinyl. Graphics were also
            created to announce events, whether concerts, workshops or actions
            that took place in the smoking club.
          </p>
          <p className="design-project__text-copyright">
            © Grupo Much More - Work done at Grupo Much More, a communication
            agency in Barcelona.
          </p>
          <div className="design-project__image-container">
            <Image
              src="/images/design-projects/airam/regulations.jpg"
              alt="Airam's regulations"
              width="940"
              height="705"
            />
            <Image
              src="/images/design-projects/airam/flyer-01.jpg"
              alt="Airam flyers"
              width="940"
              height="705"
            />
            <Image
              src="/images/design-projects/airam/flyer-02.jpg"
              alt="Airam flyers"
              width="940"
              height="705"
            />
            <Image
              src="/images/design-projects/airam/flyer-03.jpg"
              alt="Airam flyers"
              width="940"
              height="705"
            />
            <Image
              src="/images/design-projects/airam/flyer-04.jpg"
              alt="Airam flyers"
              width="940"
              height="705"
            />
          </div>
        </section>
      </main>
    </>
  );
};

export default AiramPage;
