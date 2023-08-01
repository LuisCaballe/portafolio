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
          <Image src={Logo} alt="Luis' logo" priority={true} />
        </Link>
        <h1>
          Luis Caballé <br />
          <span className="text--secondary-color">Portfolio</span>
        </h1>
      </div>
      <a className="link">Contact me!</a>
    </header>
  );
};

export default Header;
