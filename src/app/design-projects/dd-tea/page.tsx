import Image from "next/image";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luis Caballé - Delideluxe tea menu",
  description: "A sample of graphic design work for Delideluxe by Luis Caballé",
};

const DeliDeluxeTeaPage = (): React.ReactElement => {
  return (
    <>
      <main>
        <section className="design-project">
          <h2 className="design-project__title">Delideluxe tea menu</h2>
          <p>
            Tea menu and labels design for Delideluxe, a premium catering and
            events company in Barcelona, specialised in THC-free cannabis
            gastronomy.
          </p>
          <p className="design-project__text-copyright">
            © Grupo Much More - Work done at Grupo Much More, a communication
            agency in Barcelona.
          </p>
          <div className="design-project__image-container">
            <Image
              src="/images/design-projects/dd-tea/tea-menu.jpg"
              alt="Delideluxe tea menu"
              width="940"
              height="627"
            />
            <Image
              src="/images/design-projects/dd-tea/label-tea.jpg"
              alt="Delideluxe tea labels"
              width="940"
              height="627"
            />
            <Image
              src="/images/design-projects/dd-tea/tea.jpg"
              alt="Delideluxe tea"
              width="940"
              height="627"
            />
          </div>
        </section>
      </main>
    </>
  );
};

export default DeliDeluxeTeaPage;
