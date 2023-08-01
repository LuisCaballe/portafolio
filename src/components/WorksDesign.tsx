import Image from "next/image";
import Link from "next/link";

const WorksDesign = (): React.ReactElement => {
  return (
    <>
      <h3 className="title-line">Graphic design projects</h3>
      <section className="card-container">
        <article className="card">
          <Link href="/design-projects/weedom">
            <div className="card__image-container card__image-container--design">
              <Image
                className="card__image"
                src="/images/design-projects/home-page/weedom.jpg"
                fill
                alt="Weedom"
                sizes="(max-width: 850px) 75vw, (max-width: 1200px) 30vw"
              />
              <div className="card__info">
                <h3>Weedom</h3>
                <span className="card__info-separator"></span>
                <p>Brand identity</p>
              </div>
            </div>
          </Link>
        </article>
      </section>
    </>
  );
};

export default WorksDesign;
