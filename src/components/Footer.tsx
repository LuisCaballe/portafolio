import Image from "next/image";
import Link from "next/link";

const Footer = (): React.ReactElement => {
  return (
    <footer id="contact">
      <div className="footer">
        <div className="footer__container">
          <h3 className="title-line title-line--contact">Contact</h3>
          <div className="footer__content">
            <p className="footer__text">
              If you have any questions about me or you just want to say hello,
              please do not hesitate to contact me via email
            </p>
            <span className="footer__text footer__text--email">
              hola@luiscaballe.com
            </span>
            <p className="footer__text">or LinkedIn.</p>
            <Link
              href="https://www.linkedin.com/in/luiscaballe"
              target="_blank"
            >
              <Image
                className="footer__link"
                src="/images/linkedin.svg"
                alt="Linkedin icon"
                width="40"
                height="40"
              ></Image>
            </Link>
          </div>
        </div>
      </div>
      <div className="footer footer--copyright">
        <span>Designed and built by Luis Caballé</span>
      </div>
    </footer>
  );
};

export default Footer;
