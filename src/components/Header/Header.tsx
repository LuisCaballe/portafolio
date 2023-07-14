import React from "react";
import Logo from "../../app/icon.svg";
import Image from "next/image";
import styles from "./Header.module.css";
import pageStyles from "../../app/page.module.css";

export const Header = (): React.ReactElement => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image src={Logo} alt="Luis' logo" priority={true} />
        <h1>
          Luis Caballé <br />
          <span className={pageStyles.secondary_text}>Portfolio</span>
        </h1>
      </div>
      <a className={pageStyles.button}>Contact me!</a>
    </header>
  );
};
