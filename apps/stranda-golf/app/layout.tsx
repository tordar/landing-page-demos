import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const outfit = Outfit({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Stranda Golfklubb – Golf i hjertet av Sunnmøre",
  description:
    "Bli med i Stranda Golfklubb. 9-hulls bane ved Overvoll, moderne Trackman-simulatorer, og en aktiv golfklubb med over 1 450 medlemmer siden 1991.",
  openGraph: {
    title: "Stranda Golfklubb",
    description: "Golf i hjertet av Sunnmøre siden 1991",
    locale: "nb_NO",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nb">
      <body className={`${inter.variable} ${outfit.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
