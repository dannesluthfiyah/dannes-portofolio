"use client";

import { siteContent } from "../data/siteContent";
import { useLanguage } from "./LanguageProvider";

export default function Footer() {
  const { language } = useLanguage();
  const content = siteContent[language].footer;

  return (
    <footer className="border-t border-[#D9E2F1] bg-[#F6F9FE] px-6 py-6 sm:px-12">
      <div className="mx-auto flex w-full max-w-5xl justify-center text-center">
        <p className="text-xs text-[#667085]">{content.rights}</p>
      </div>
    </footer>
  );
}
