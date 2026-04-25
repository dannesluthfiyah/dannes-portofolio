"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { siteContent } from "../data/siteContent";
import { useLanguage } from "./LanguageProvider";

export default function Navbar() {
  const { language, setLanguage } = useLanguage();
  const content = siteContent[language].nav;
  const navItems = [
    { name: content.home, href: "#home" },
    { name: content.about, href: "#about" },
    { name: content.projects, href: "#projects" },
    { name: content.skills, href: "#skills" },
    { name: content.experience, href: "#experience" },
    { name: content.contact, href: "#contact" },
  ];
  const [activeSection, setActiveSection] = useState<string>("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight / 3;

      navItems.forEach((item) => {
        const section = document.querySelector(item.href);
        if (section instanceof HTMLElement) {
          const top = section.offsetTop;
          const height = section.offsetHeight;

          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(item.href.substring(1));
          }
        }
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-[#D9E2F1] bg-[#F6F9FE]/90 backdrop-blur-md">
      <div className="flex items-center justify-between px-4 py-3 sm:px-6 md:px-12">
        <a href="#home" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Logo"
            width={160}
            height={40}
            className="h-8 w-auto md:h-10"
            priority
          />
        </a>

        <button
          type="button"
          aria-label={content.mobileMenu}
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D9E2F1] bg-white text-[#225EA8] shadow-sm sm:hidden"
        >
          <span className="sr-only">{content.mobileMenu}</span>
          <div className="flex flex-col gap-1.5">
            <span className="h-0.5 w-4 rounded-full bg-current" />
            <span className="h-0.5 w-4 rounded-full bg-current" />
            <span className="h-0.5 w-4 rounded-full bg-current" />
          </div>
        </button>

        <div className="hidden items-center gap-4 sm:flex">
          <div className="rounded-full border border-[#D9E2F1] bg-white p-1 shadow-sm">
            <button
              type="button"
              onClick={() => setLanguage("en")}
              className={`rounded-full px-3 py-1.5 text-sm font-semibold transition ${
                language === "en"
                  ? "bg-[#225EA8] text-white"
                  : "text-[#667085] hover:text-[#225EA8]"
              }`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLanguage("id")}
              className={`rounded-full px-3 py-1.5 text-sm font-semibold transition ${
                language === "id"
                  ? "bg-[#225EA8] text-white"
                  : "text-[#667085] hover:text-[#225EA8]"
              }`}
            >
              ID
            </button>
          </div>

          <ul className="flex items-center gap-6 text-base">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className={`transition ${
                      isActive
                        ? "font-semibold text-[#225EA8]"
                        : "text-[#667085] hover:text-[#225EA8]"
                    }`}
                  >
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="border-t border-[#D9E2F1] bg-[#F6F9FE]/95 px-4 pb-4 pt-3 shadow-sm sm:hidden">
          <div className="mb-3 flex items-center justify-between rounded-xl border border-[#D9E2F1] bg-white px-4 py-3">
            <span className="text-sm font-semibold text-[#2F3340]">
              {content.language}
            </span>
            <div className="rounded-full border border-[#D9E2F1] bg-[#F6F9FE] p-1">
              <button
                type="button"
                onClick={() => setLanguage("en")}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
                  language === "en"
                    ? "bg-[#225EA8] text-white"
                    : "text-[#667085]"
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLanguage("id")}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
                  language === "id"
                    ? "bg-[#225EA8] text-white"
                    : "text-[#667085]"
                }`}
              >
                ID
              </button>
            </div>
          </div>

          <ul className="flex flex-col gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block rounded-xl px-4 py-3 text-sm transition ${
                      isActive
                        ? "bg-[#E8F1FB] font-semibold text-[#225EA8]"
                        : "text-[#667085] hover:bg-white hover:text-[#225EA8]"
                    }`}
                  >
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
}
