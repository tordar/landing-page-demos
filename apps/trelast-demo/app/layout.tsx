import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="no" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
