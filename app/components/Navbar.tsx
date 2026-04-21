"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
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
          aria-label="Toggle navigation"
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D9E2F1] bg-white text-[#225EA8] shadow-sm sm:hidden"
        >
          <span className="sr-only">Open menu</span>
          <div className="flex flex-col gap-1.5">
            <span className="h-0.5 w-4 rounded-full bg-current" />
            <span className="h-0.5 w-4 rounded-full bg-current" />
            <span className="h-0.5 w-4 rounded-full bg-current" />
          </div>
        </button>

        <ul className="hidden items-center gap-4 text-sm sm:flex sm:gap-6 sm:text-base">
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

      {isMobileMenuOpen && (
        <div className="border-t border-[#D9E2F1] bg-[#F6F9FE]/95 px-4 pb-4 pt-3 shadow-sm sm:hidden">
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
