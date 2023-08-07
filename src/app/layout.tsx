"use client";

import { useEffect, useState } from "react";
import Aos from "aos";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "aos/dist/aos.css";
import "../sass/styles.scss";

import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isScrollDown, setIsScrollDown] = useState(false);

  const toggleBackToTop = () => {
    const scrollTop = document.documentElement.scrollTop;
    scrollTop > 200 ? setIsScrollDown(true) : setIsScrollDown(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleBackToTop);
    Aos.init({ duration: 800, once: true });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <html lang="en" className={plusJakartaSans.className}>
      <body>
        <div>
          <div className="main-container">
            <Header />
            {children}
          </div>
          <Footer />
        </div>
        <button
          className={`top-link${isScrollDown ? " top-link--visible" : ""}`}
          onClick={scrollToTop}
        ></button>
      </body>
    </html>
  );
}
