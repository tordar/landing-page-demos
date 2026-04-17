import type { Metadata } from "next";
import "./styles.css";

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
    <div className={`h-full antialiased min-h-full flex flex-col demo-idrettsanlegg-demo`}>{children}</div>
  );
}
