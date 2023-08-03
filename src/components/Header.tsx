import React from "react";
import Logo from "../app/icon.svg";
import Image from "next/image";
import "../sass/styles.scss";
import Link from "next/link";

export const Header = (): React.ReactElement => {
  return (
    <header className="header">
      <div className="header__logo">
        <Link href="/">
          <Image
            src={Logo}
            alt="Luis' logo"
            priority={true}
            width="75"
            height="70"
          />
        </Link>
        <h1>
          Luis Caballé <br />
          <span className="text--secondary-color">Portfolio</span>
        </h1>
      </div>
      <nav className="navbar">
        <div className="navbar__link-container">
          <Link href="/#web" className="navbar__link">
            Web
          </Link>
        </div>
        <div className="navbar__link-container">
          <Link href="/#design" className="navbar__link">
            Design
          </Link>
        </div>
        <Link href="#contact" className="link">
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
