import Image from "next/image";
import Link from "next/link";

const WorksDesign = (): React.ReactElement => {
  return (
    <section>
      <h3 className="title-line">Graphic design projects</h3>
      <div className="card-container card-container--design">
        <article className="card">
          <Link href="/design-projects/weedom">
            <div className="card__image-container card__image-container--design">
              <Image
                className="card__image"
                src="/images/design-projects/thumbs/thumb-weedom.jpg"
                fill
                alt="Weedom"
                sizes="(max-width: 510px) 65vw, (max-width: 800px) 40vw, 26vw "
              />
              <div className="card__info">
                <h3>Weedom</h3>
                <span className="card__info-separator"></span>
                <p>brand identity</p>
              </div>
            </div>
          </Link>
        </article>

        <article className="card">
          <Link href="/design-projects/dd-tea">
            <div className="card__image-container card__image-container--design">
              <Image
                className="card__image"
                src="/images/design-projects/thumbs/thumb-dd-tea.jpg"
                fill
                alt="Delideluxe tea menu"
                sizes="(max-width: 510px) 65vw, (max-width: 800px) 40vw, 26vw "
              />
              <div className="card__info">
                <h3>Delideluxe</h3>
                <span className="card__info-separator"></span>
                <p>tea menu design</p>
              </div>
            </div>
          </Link>
        </article>

        <article className="card">
          <Link href="/design-projects/mqp">
            <div className="card__image-container card__image-container--design">
              <Image
                className="card__image"
                src="/images/design-projects/thumbs/thumb-mqp.jpg"
                fill
                alt="Més que paraules"
                sizes="(max-width: 510px) 65vw, (max-width: 800px) 40vw, 26vw "
              />
              <div className="card__info">
                <h3>Més Que Paraules</h3>
                <span className="card__info-separator"></span>
                <p>brand identity</p>
              </div>
            </div>
          </Link>
        </article>

        <article className="card">
          <Link href="/design-projects/sentits-bcn">
            <div className="card__image-container card__image-container--design">
              <Image
                className="card__image"
                src="/images/design-projects/thumbs/thumb-sentits-bcn.jpg"
                fill
                alt="Sentits Bcn"
                sizes="(max-width: 510px) 65vw, (max-width: 800px) 40vw, 26vw "
              />
              <div className="card__info">
                <h3>Sentits Bcn</h3>
                <span className="card__info-separator"></span>
                <p>brand identity</p>
              </div>
            </div>
          </Link>
        </article>

        <article className="card">
          <Link href="/design-projects/logos">
            <div className="card__image-container card__image-container--design">
              <Image
                className="card__image"
                src="/images/design-projects/thumbs/thumb-logos.jpg"
                fill
                alt="Logos"
                sizes="(max-width: 510px) 65vw, (max-width: 800px) 40vw, 26vw "
              />
              <div className="card__info">
                <h3>Logos</h3>
                <span className="card__info-separator"></span>
                <p>logo design</p>
              </div>
            </div>
          </Link>
        </article>

        <article className="card">
          <Link href="/design-projects/rodrigo-50">
            <div className="card__image-container card__image-container--design">
              <Image
                className="card__image"
                src="/images/design-projects/thumbs/thumb-rodrigo-50.jpg"
                fill
                alt="Rodrigo 50"
                sizes="(max-width: 510px) 65vw, (max-width: 800px) 40vw, 26vw "
              />
              <div className="card__info">
                <h3>Rodrigo 50</h3>
                <span className="card__info-separator"></span>
                <p>brand identity</p>
              </div>
            </div>
          </Link>
        </article>

        <article className="card">
          <Link href="/design-projects/airam">
            <div className="card__image-container card__image-container--design">
              <Image
                className="card__image"
                src="/images/design-projects/thumbs/thumb-airam.jpg"
                fill
                alt="Airam"
                sizes="(max-width: 510px) 65vw, (max-width: 800px) 40vw, 26vw "
              />
              <div className="card__info">
                <h3>Airam</h3>
                <span className="card__info-separator"></span>
                <p>brand identity</p>
              </div>
            </div>
          </Link>
        </article>

        <article className="card">
          <Link href="/design-projects/dd-menu">
            <div className="card__image-container card__image-container--design">
              <Image
                className="card__image"
                src="/images/design-projects/thumbs/thumb-dd-menu.jpg"
                fill
                alt="Delideluxe'menu"
                sizes="(max-width: 510px) 65vw, (max-width: 800px) 40vw, 26vw "
              />
              <div className="card__info">
                <h3>Delideluxe</h3>
                <span className="card__info-separator"></span>
                <p>menu design</p>
              </div>
            </div>
          </Link>
        </article>

        <article className="card">
          <Link href="/design-projects/brotes-verdes">
            <div className="card__image-container card__image-container--design">
              <Image
                className="card__image"
                src="/images/design-projects/thumbs/thumb-brotes-verdes.jpg"
                fill
                alt="Brotes Verdes"
                sizes="(max-width: 510px) 65vw, (max-width: 800px) 40vw, 26vw "
              />
              <div className="card__info">
                <h3>Brotes Verdes</h3>
                <span className="card__info-separator"></span>
                <p>brand identity</p>
              </div>
            </div>
          </Link>
        </article>

        <article className="card">
          <Link href="/design-projects/salva">
            <div className="card__image-container card__image-container--design">
              <Image
                className="card__image"
                src="/images/design-projects/thumbs/thumb-salva.jpg"
                fill
                alt="Salva a caga"
                sizes="(max-width: 510px) 65vw, (max-width: 800px) 40vw, 26vw "
              />
              <div className="card__info">
                <h3>Salva a caga</h3>
                <span className="card__info-separator"></span>
                <p>brand identity</p>
              </div>
            </div>
          </Link>
        </article>

        <article className="card">
          <Link href="/design-projects/gmm">
            <div className="card__image-container card__image-container--design">
              <Image
                className="card__image"
                src="/images/design-projects/thumbs/thumb-gmm.jpg"
                fill
                alt="Grupo Much More"
                sizes="(max-width: 510px) 65vw, (max-width: 800px) 40vw, 26vw "
              />
              <div className="card__info">
                <h3>Grupo Much More</h3>
                <span className="card__info-separator"></span>
                <p>brand identity</p>
              </div>
            </div>
          </Link>
        </article>
      </div>
    </section>
  );
};

export default WorksDesign;
