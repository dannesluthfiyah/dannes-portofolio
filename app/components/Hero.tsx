"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { siteContent } from "../data/siteContent";
import { useLanguage } from "./LanguageProvider";

export default function Hero() {
  const { language } = useLanguage();
  const content = siteContent[language].hero;

  return (
    <section className="flex flex-col items-center justify-center text-center min-h-[80vh] bg-[#f7faff] px-4">
      <div className="scale-[0.85] sm:scale-90 md:scale-100 flex flex-col items-center">
        <motion.div
          className="mb-6 w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] md:w-[200px] md:h-[200px] rounded-full overflow-hidden flex items-center justify-center"
          animate={{
            boxShadow: [
              "0 0 20px rgba(56, 189, 248, 0.6)",
              "0 0 35px rgba(56, 189, 248, 0.8)",
              "0 0 20px rgba(56, 189, 248, 0.3)",
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src="/profile.png"
            alt="Profile"
            width={200}
            height={200}
            style={{ borderRadius: "50%" }}
            className="object-cover"
          />
        </motion.div>

        {/* Nama */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-2">
          Dannes Luthfiyah Salmaa
        </h1>

        <div className="max-w-2xl text-gray-600">
          <p className="text-xs leading-snug whitespace-nowrap sm:text-sm md:text-base lg:text-lg">
            {content.introTop}
          </p>
          {content.introBottom ? (
            <p className="text-xs leading-snug sm:text-sm md:text-base lg:text-lg">
              {content.introBottom}
            </p>
          ) : null}
          <p className="mt-1 text-xs leading-snug sm:text-sm md:text-base lg:text-lg">
            <AnimatedWord text={content.interests[0]} />,{" "}
            <AnimatedWord text={content.interests[1]} />, {content.conjunction}{" "}
            <AnimatedWord text={content.interests[2]} />.
          </p>
        </div>
      </div>
    </section>
  );
}

function AnimatedWord({ text }: { text: string }) {
  return (
    <motion.span
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="relative inline-block font-semibold text-sky-600 cursor-pointer align-middle"
      style={{ display: "inline-flex", marginRight: "2px" }}
    >
      {text}
      <motion.span
        className="absolute left-0 bottom-0 w-full h-[2px] bg-sky-500 rounded-full"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
    </motion.span>
  );
}
