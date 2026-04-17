import type { Metadata } from "next";
import { DM_Serif_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./styles.css";

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
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
    <div className={`${dmSerif.variable} ${plusJakarta.variable} antialiased min-h-dvh demo-tannlege-demo`}>{children}</div>
  );
}
