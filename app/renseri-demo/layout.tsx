import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./styles.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Sentrum Renseri — Profesjonell tekstilpleie i Drammen",
  description:
    "Drammens mest pålitelige renseri siden 1995. Rens, vask, skinnbehandling, bunadpleie og mer. Gratis henting og levering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${plusJakarta.variable} ${inter.variable} h-full antialiased min-h-full flex flex-col demo-renseri-demo`}>{children}</div>
  );
}
