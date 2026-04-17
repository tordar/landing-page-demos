import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import "./styles.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Grafisk Trykk AS — Fra idé til ferdig trykk",
  description:
    "Oslos ledende trykkeri siden 2001. Offset, digital, storformat, emballasje og mer. Be om tilbud i dag.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${spaceGrotesk.variable} ${dmSans.variable} h-full antialiased min-h-full flex flex-col demo-trykk-demo`}>{children}</div>
  );
}
