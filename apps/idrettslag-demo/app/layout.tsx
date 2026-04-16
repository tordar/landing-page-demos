import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nordvik Idrettslag — Idrettsglede for hele bygda",
  description:
    "Nordvik IL er Trondheims mest inkluderende idrettslag. Bli med på fotball, håndball, friidrett, ski og mer. Stiftet 1947.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nb" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
