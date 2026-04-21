"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Contact() {
  const contacts = [
    {
      name: "Gmail",
      border: "#D16A5F",
      bg: "#F6D8D2",
      textColor: "#9B4338",
      text: "dannesluthfiyah02@gmail.com",
      circle: "#FBE9E6",
      circleBorder: "#D16A5F",
      icon: "/icons/gmail.png",
      link: "mailto:dannesluthfiyah02@gmail.com",
    },
    {
      name: "LinkedIn",
      border: "#3A7CA5",
      bg: "#D6E8F2",
      textColor: "#23506B",
      text: "Dannes Luthfiyah Salmaa",
      circle: "#E8F2F8",
      circleBorder: "#3A7CA5",
      icon: "/icons/linkedin.png",
      link: "https://www.linkedin.com/in/dannes-luthfiyah-salmaa-a18140388/",
    },
    {
      name: "GitHub",
      border: "#5C5F6B",
      bg: "#E4E6EB",
      textColor: "#2F3340",
      text: "dannesluthfiyah",
      circle: "#F1F3F6",
      circleBorder: "#5C5F6B",
      icon: "/icons/github.png",
      link: "https://github.com/dannesluthfiyah",
    },
    {
      name: "Instagram",
      border: "#C45A93",
      bg: "#F4D7E7",
      textColor: "#94396E",
      text: "@salxxade",
      circle: "#F9E7F1",
      circleBorder: "#C45A93",
      icon: "/icons/ig.png",
      link: "https://www.instagram.com/salxxade/",
    },
    {
      name: "Behance",
      border: "#1769FF",
      bg: "#CFE0FF",
      textColor: "#0F4FCC",
      text: "salxxade",
      circle: "#E4EEFF",
      circleBorder: "#1769FF",
      icon: "/icons/behance.png",
      link: "https://www.behance.net/salxxade",
    },
    {
      name: "Dribbble",
      border: "#EA4C89",
      bg: "#F8D0E0",
      textColor: "#C7356D",
      text: "dannes-luthfiyah-salmaa",
      circle: "#FCE3EC",
      circleBorder: "#EA4C89",
      icon: "/icons/dribbble.png",
      link: "https://dribbble.com/dannes-luthfiyah-salmaa",
    },
  ];

  return (
    <section className="min-h-screen bg-[#F6F9FE] flex flex-col items-center justify-center px-6 py-20">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl sm:text-4xl font-bold text-[#225EA8] mb-14 text-center"
        style={{ fontFamily: "SF Pro Rounded, sans-serif" }}
      >
        Let&apos;s Connect!
      </motion.h1>

      <div className="flex w-full max-w-md flex-col gap-5 sm:gap-7">
        {contacts.map((item, index) => (
          <motion.a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-4 rounded-xl px-4 py-4 shadow-md sm:gap-5 sm:px-6 sm:py-5"
            style={{
              border: `2px solid ${item.border}`,
              backgroundColor: item.bg,
              color: item.textColor,
              fontFamily: "SF Pro Rounded, sans-serif",
            }}
          >
            <div
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full shadow-sm"
              style={{
                backgroundColor: item.circle,
                border: `2px solid ${item.circleBorder}`,
              }}
            >
              <Image
                src={item.icon}
                alt={item.name}
                width={28}
                height={28}
                className="h-7 w-7 shrink-0 object-contain"
              />
            </div>

            <span className="min-w-0 break-words text-base font-semibold tracking-tight sm:text-lg">
              {item.text}
            </span>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
