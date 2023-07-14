import React from "react";
import pageStyle from "../../app/page.module.css";
import Image from "next/image";

const WorksWeb = (): React.ReactElement => {
  return (
    <>
      <section className={pageStyle.card_container}>
        <article className={pageStyle.card}>
          <div className={pageStyle["image-container"]}>
            <Image
              className={pageStyle.image}
              src="/gc-mobile.webp"
              fill
              alt={`Grandma's Cookbook's screenshot`}
              sizes="(max-width: 850px) 75vw, (max-width: 1200px) 30vw"
            />
          </div>

          <div className={pageStyle.card__content}>
            <h4>{`Grandma's Cookbook`}</h4>
            <p>
              Grandma&apos;s Cookbook is an application that allows users to
              create and manage a private collection of favourite recipes,
              preserving their culinary heritage.
            </p>
            <div className={pageStyle.card__links}>
              <a className={pageStyle.button}>GitHub</a>
              <a className={pageStyle.button}>Demo</a>
            </div>
          </div>
        </article>
      </section>
    </>
  );
};

export default WorksWeb;
