import Image from "next/image";
import React from "react";

const SentitsBcnPage = (): React.ReactElement => {
  return (
    <>
      <main>
        <section className="design-project">
          <h2 className="design-project__title">
            <i>Sentits Bcn</i>
          </h2>
          <p>
            Design of several creative pieces such as catalog, Christmas
            promotion flyer and newsletter for <i>Sentits Bcn</i>, a wine
            distributor located in Barcelona.
          </p>
          <p className="design-project__text-copyright">
            © Guindit - Work done at Guindit, a communication agency Brand
            Helping Online.
          </p>
          <div className="design-project__image-container">
            <Image
              src="/images/design-projects/sentits-bcn/wine-flyer.jpg"
              alt="Sentits Bcn wine flyer"
              width="940"
              height="630"
            />
            <Image
              src="/images/design-projects/sentits-bcn/christmas-flyer.jpg"
              alt="Sentits Bcn Christmas flyer"
              width="940"
              height="630"
            />
            <Image
              src="/images/design-projects/sentits-bcn/newsletter.jpg"
              alt="Sentits Bcn newsletter"
              width="940"
              height="855"
            />
          </div>
        </section>
      </main>
    </>
  );
};

export default SentitsBcnPage;
