"use client";

import { ReactNode, useEffect } from "react";
import Navbar from "./Navbar";
import { LanguageProvider } from "./LanguageProvider";

export default function AppShell({ children }: { children: ReactNode }) {
  useEffect(() => {
    document.body.style.overflow = "";
  }, []);

  return (
    <LanguageProvider>
      <Navbar />
      <main className="pt-16">{children}</main>
    </LanguageProvider>
  );
}
