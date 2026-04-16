import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/JsonLd";
import { siteData } from "@/data/site";

export const metadata: Metadata = {
  title: {
    default: siteData.seo.defaultTitle,
    template: siteData.seo.titleTemplate,
  },
  description: siteData.seo.defaultDescription,
  openGraph: {
    title: siteData.seo.defaultTitle,
    description: siteData.seo.defaultDescription,
    locale: "nb_NO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nb">
      <body className="pt-16">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <JsonLd />
      </body>
    </html>
  );
}
