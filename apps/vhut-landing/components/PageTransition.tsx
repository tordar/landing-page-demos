"use client";

import { usePathname } from "next/navigation";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <div
      key={pathname}
      className="flex min-h-full min-w-full flex-col justify-center animate-in fade-in duration-300 ease-out fill-mode-both"
    >
      {children}
    </div>
  );
}
