import React from "react";
import Image from "next/image";
import Link from "next/link";

export const Header = (): React.ReactElement => {
  return (
    <header className="header">
      <div className="header__logo">
        <Link href="/">
          <Image
            className="header__logo-imago"
            src="/images/logo-animated.webp"
            alt="Luis Caballé's logo"
            priority={true}
            width="94"
            height="70"
          />
        </Link>
        <h1 className="header__logo-title">
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
