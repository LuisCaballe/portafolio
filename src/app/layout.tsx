import type { Metadata } from "next";
import "../sass/styles.scss";

export const metadata: Metadata = {
  title: "Luis' portfolio",
  description:
    "Luis Caballé's online portfolio. A sample of graphic design and web development work I have done to date.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="main-container">{children}</div>
      </body>
    </html>
  );
}
