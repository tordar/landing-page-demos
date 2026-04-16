import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "HGN Elektro AS - Elektrotjenester av kvalitet",
    template: "%s | HGN Elektro AS"
  },
  description: "Vår visjon er å levere elektrotjenester av kvalitet gjennom stolthet til vårt arbeid. Vi tilbyr tjenester til næring, offentlig sektor og private kunder.",
  keywords: ["elektro", "elektriker", "elektrotjenester", "Oslo", "næring", "privat", "smarthus", "elbil-lading"],
  authors: [{ name: "HGN Elektro AS" }],
  creator: "HGN Elektro AS",
  publisher: "HGN Elektro AS",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://hgnelektro.no"),
  openGraph: {
    type: "website",
    locale: "nb_NO",
    url: "https://hgnelektro.no",
    title: "HGN Elektro AS - Elektrotjenester av kvalitet",
    description: "Vår visjon er å levere elektrotjenester av kvalitet gjennom stolthet til vårt arbeid.",
    siteName: "HGN Elektro AS",
  },
  twitter: {
    card: "summary_large_image",
    title: "HGN Elektro AS - Elektrotjenester av kvalitet",
    description: "Vår visjon er å levere elektrotjenester av kvalitet gjennom stolthet til vårt arbeid.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
