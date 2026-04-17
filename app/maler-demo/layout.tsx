import type { Metadata } from "next";
import { DM_Sans, Barlow_Condensed } from "next/font/google";
import "./styles.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-barlow",
});

export const metadata: Metadata = {
  title: "Strand Malermestre — Kvalitetshåndverk som varer",
  description:
    "Profesjonelt malerarbeid i Stavanger-regionen siden 2003. Innvendig og utvendig maling, tapetsering, sparkling, glassarbeid og fasadearbeid.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${dmSans.variable} ${barlow.variable} antialiased min-h-screen flex flex-col demo-maler-demo`}>{children}</div>
  );
}
