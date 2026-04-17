import type { Metadata } from "next";
import "./styles.css";

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
    <div className={`h-full antialiased min-h-full flex flex-col demo-treningssenter-demo`}>{children}</div>
  );
}
