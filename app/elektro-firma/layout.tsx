import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./styles.css";
import Navbar from "@/app/elektro-firma/components/layout/Navbar";
import Footer from "@/app/elektro-firma/components/layout/Footer";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "EL-KRAFT | Din lokale elektriker",
  description:
    "Vi leverer fremtidens elektriske løsninger for både private og bedrifter. Fra smarte hjem til industrielle installasjoner.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${manrope.variable} ${inter.variable} bg-background text-on-background font-body antialiased selection:bg-secondary/30 demo-elektro-firma`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
  );
}
