import type { Metadata } from "next";
import { Noto_Serif, Inter } from "next/font/google";
import "./styles.css";
import Header from "@/app/os-gravferdsbyraa/components/Header";
import Footer from "@/app/os-gravferdsbyraa/components/Footer";
import DutyCard from "@/app/os-gravferdsbyraa/components/DutyCard";

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Os Gravferdsbyrå AS",
  description:
    "Det lille byrået med det store hjertet. Vi bistår deg med verdighet, omtanke og profesjonalitet.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${notoSerif.variable} ${inter.variable} font-body antialiased min-h-screen flex flex-col demo-os-gravferdsbyraa`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <DutyCard />
      </div>
  );
}
