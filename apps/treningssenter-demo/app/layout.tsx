import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Puls Treningssenter — Din styrke starter her",
  description:
    "Fredrikstads mest motiverende treningssenter. Moderne utstyr, gruppetimer, personlig trener og 24/7 tilgang. Bli medlem i dag.",
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
