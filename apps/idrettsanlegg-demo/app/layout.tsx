import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Storfjord Arena — Regionens møteplass for idrett og kultur",
  description:
    "Storfjord Arena i Molde tilbyr flerbrukshall, svømmebasseng, klatrevegg, friidrettsbane og styrkerom. Book anlegg i dag.",
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
