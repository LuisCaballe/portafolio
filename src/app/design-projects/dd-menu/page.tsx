import Image from "next/image";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luis Caballé - Delideluxe menu",
  description: "A sample of graphic design work for Delideluxe by Luis Caballé",
};

const DeliDeluxeMenu = (): React.ReactElement => {
  return (
    <>
      <main>
        <section className="design-project">
          <h2 className="design-project__title">Delideluxe menu</h2>
          <p>
            {`Design of the food and beverage menus for Delideluxe, a premium
            catering and events company in Barcelona, which supplies to its
            affiliated establishments. Work developed in a vertical card format
            on both sides. A graphic proposal was also created for the
            personalization of the brand's own glasses.`}
          </p>
          <p className="design-project__text-copyright">
            © Grupo Much More - Work done at Grupo Much More, a communication
            agency in Barcelona.
          </p>
          <div className="design-project__image-container">
            <Image
              src="/images/design-projects/dd-menu/menu-01.jpg"
              alt="Delideluxe menu"
              width="940"
              height="626"
            />
            <Image
              src="/images/design-projects/dd-menu/menu-02.jpg"
              alt="Delideluxe menu"
              width="940"
              height="1249"
            />
            <Image
              src="/images/design-projects/dd-menu/glasses.jpg"
              alt="Delideluxe glasses"
              width="940"
              height="463"
            />
          </div>
        </section>
      </main>
    </>
  );
};

export default DeliDeluxeMenu;
