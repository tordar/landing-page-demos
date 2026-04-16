import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fjellbekk Dyreklinikk — Lillehammer",
  description:
    "Omsorgsfull behandling for ditt kjæledyr. Veterinærklinikk i Lillehammer med akuttberedskap, kirurgi, tannpleie og forebyggende helsesjekk.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nb" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
