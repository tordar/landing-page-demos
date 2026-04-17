import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./styles.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Berge VVS AS – Rørlegger i Oslo og omegn",
  description:
    "Vi er en allsidig rørleggerbedrift i Oslo. Baderomsrenovering, varme, røropplegg og akuttoppdrag. Ring oss i dag for gratis pristilbud.",
};

export default function VvsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${poppins.variable} font-sans antialiased demo-vvs`}>
      {children}
    </div>
  );
}
