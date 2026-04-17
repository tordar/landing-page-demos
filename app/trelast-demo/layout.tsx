import type { Metadata } from "next";
import "./styles.css";

export const metadata: Metadata = {
  title: "Kysttre Byggevarer — Alt i trelast og byggevarer | Ålesund",
  description:
    "Engroshandel med tømmer, trelast, byggevarer og sanitærutstyr i Ålesund. Kysttre Byggevarer — din leverandør siden 1988.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`h-full antialiased min-h-full flex flex-col demo-trelast-demo`}>{children}</div>
  );
}
