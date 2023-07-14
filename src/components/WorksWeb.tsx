import React from "react";
import Image from "next/image";
import "../sass/styles.scss";

const WorksWeb = (): React.ReactElement => {
  return (
    <>
      <section className="card-container">
        <article className="card">
          <div className="image-container">
            <Image
              className="image"
              src="/gc-mobile.webp"
              fill
              alt={`Grandma's Cookbook's screenshot`}
              sizes="(max-width: 850px) 75vw, (max-width: 1200px) 30vw"
            />
          </div>
          <div className="card__content">
            <h4>{`Grandma's Cookbook`}</h4>
            <p>
              Grandma&apos;s Cookbook is an application that allows users to
              create and manage a private collection of favourite recipes,
              preserving their culinary heritage.
            </p>
            <div className="card__links">
              <a className="link">GitHub</a>
              <a className="link">Demo</a>
            </div>
          </div>
        </article>
      </section>
    </>
  );
};

export default WorksWeb;
