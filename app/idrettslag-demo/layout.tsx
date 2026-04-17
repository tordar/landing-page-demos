import type { Metadata } from "next";
import "./styles.css";

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
    <div className={`h-full antialiased min-h-full flex flex-col demo-idrettslag-demo`}>{children}</div>
  );
}
