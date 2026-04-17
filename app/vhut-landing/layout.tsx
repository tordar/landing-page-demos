import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import { Nav } from "@/app/vhut-landing/components/Nav";
import { Footer } from "@/app/vhut-landing/components/Footer";
import { PageTransition } from "@/app/vhut-landing/components/PageTransition";
import "./styles.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vestfold Historic Ultra Trail | VHUT",
  description:
    "VHUT – terrengultraløp i nordre Vestfold 6.–7. juni 2026. Krevende men fair.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`h-dvh overflow-hidden ${playfair.variable} ${dmSans.variable} flex h-dvh flex-col overflow-hidden font-sans antialiased demo-vhut-landing`}>
        <Nav />
        <main className="min-h-0 flex-1 overflow-y-auto pt-14">
          <div className="flex min-h-full flex-col">
            <div className="flex flex-1 flex-col justify-center">
              <PageTransition>{children}</PageTransition>
            </div>
            <Footer className="mt-auto shrink-0" />
          </div>
        </main>
      </div>
  );
}
