import type { Metadata } from "next";
import "./styles.css";
import Navbar from "@/app/camping-demo/components/layout/Navbar";
import Footer from "@/app/camping-demo/components/layout/Footer";
import JsonLd from "@/app/camping-demo/components/JsonLd";
import { siteData } from "@/app/camping-demo/data/site";

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
    <div className={`pt-16 demo-camping-demo`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <JsonLd />
      </div>
  );
}
