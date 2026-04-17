import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./styles.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Holm Advokatkontor – Erstatning, arbeidsrett og familierett",
  description:
    "Spesialist innen erstatningsrett, arbeidsrett og familierett. 18 års erfaring. Første konsultasjon er gratis og uforpliktende. Oslo sentrum.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${cormorant.variable} ${dmSans.variable} demo-advokatfirma-demo`}>{children}</div>
  );
}
