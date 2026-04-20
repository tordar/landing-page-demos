import type { Metadata } from "next";
import { Fraunces, Inter_Tight, JetBrains_Mono } from "next/font/google";
import "./styles.css";

const fraunces = Fraunces({
  variable: "--ff-display",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["SOFT", "opsz"],
  display: "swap",
});

const interTight = Inter_Tight({
  variable: "--ff-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--ff-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Holm Advokatkontor — juridisk bistand der det virkelig betyr noe",
  description:
    "Privatpersoner i saker mot forsikringsselskaper, arbeidsgivere og NAV. Samme advokat fra første samtale til saken er avsluttet. Gratis førstesamtale.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${fraunces.variable} ${interTight.variable} ${jetbrainsMono.variable} demo-advokatfirma-demo`}
    >
      {children}
    </div>
  );
}
