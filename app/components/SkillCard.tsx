"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import localFont from "next/font/local";

const sfProRounded = localFont({
  src: "../../public/fonts/sf-pro-rounded.ttf",
  variable: "--font-sf-pro-rounded",
});


export default function SkillCard({
  name,
  img,
}: {
  name: string;
  img: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 250, damping: 18 }}
      className="flex flex-col items-center justify-center text-center bg-white border border-[#225EA8] rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-all"
    >
      <div className="relative w-[72px] sm:w-[82px] md:w-[88px] h-[72px] sm:h-[82px] md:h-[88px] mb-3 sm:mb-4">
        <Image
          src={img}
          alt={name}
          fill
          className="object-contain"
          sizes="(max-width: 640px) 72px, (max-width: 768px) 82px, 88px"
        />
      </div>
      <p
        className={`${sfProRounded.variable} text-sm sm:text-base font-medium text-[#444444]`}
        style={{ fontFamily: "var(--font-sf-pro-rounded)" }}
      >
        {name}
      </p>
    </motion.div>
  );
}
