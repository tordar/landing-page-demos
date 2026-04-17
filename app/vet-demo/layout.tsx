import type { Metadata } from "next";
import "./styles.css";

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
    <div className={`h-full antialiased min-h-full flex flex-col demo-vet-demo`}>{children}</div>
  );
}
