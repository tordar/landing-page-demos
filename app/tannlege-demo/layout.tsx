import type { Metadata } from "next";
import { Inter_Tight, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./styles.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fjordtann Tannklinikk — Trygg tannbehandling i Bergen",
  description:
    "Fjordtann Tannklinikk tilbyr moderne tannbehandling i trygge omgivelser. Tannbleking, implantater, kjeveortopedi og mer. Bestill time i dag.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`${interTight.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} antialiased min-h-dvh demo-tannlege-demo`}
    >
      {children}
    </div>
  );
}
