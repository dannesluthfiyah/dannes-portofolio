"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { siteContent } from "../data/siteContent";
import { useLanguage } from "./LanguageProvider";

export default function About() {
  const { language } = useLanguage();
  const content = siteContent[language].about;

  return (
    <section className="min-h-screen overflow-x-hidden bg-[#F6F9FE] px-4 py-14 sm:px-6 sm:py-16 md:px-10 lg:px-12">
      <div className="mx-auto flex w-full max-w-6xl justify-center">
        <div className="flex w-full flex-col items-center gap-8 md:flex-row md:items-center md:justify-center md:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative flex w-full justify-center md:w-1/2 md:justify-end md:pr-0 md:-ml-12 lg:-ml-20"
          >
            <div className="relative w-full max-w-[280px] sm:max-w-[340px] md:w-[460px] md:max-w-none lg:w-[520px]">
              <Image
                src="/graduation.png"
                alt="Graduation Photo"
                width={520}
                height={520}
                className="h-auto w-full object-contain drop-shadow-lg"
                priority
              />
            </div>
          </motion.div>

          {/* TEKS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full max-w-[34rem] text-center md:w-1/2 md:max-w-none md:text-left"
          >
            <h2
              className="mb-8 text-center text-3xl font-bold text-[#225EA8] sm:text-4xl md:mb-14"
              style={{ fontFamily: "SF Pro Rounded, sans-serif" }}
            >
              {content.title}
            </h2>

            <p className="mb-5 max-w-[34rem] text-left text-sm leading-relaxed text-[#444444] sm:text-base md:text-justify">
              {content.body}
            </p>

            <div className="space-y-3">
              <InfoCard
                title="Universitas Islam Riau"
                subtitle={content.major}
                value="3.89 / 4.00"
                stroke="#00732E"
                bg="#E3EEEE"
                icon="/uir.png"
                note={content.scholarshipNote}
                fullWidth
              />

              <p
                className="mt-3 text-left text-[0.95rem] text-[#747474]"
                style={{ fontFamily: "'DKCrayonCrumble', cursive" }}
              >
                {content.exchangeLabel}
              </p>

              <div className="-mt-1">
                <InfoCard
                  title="UPN Veteran Yogyakarta"
                  subtitle={content.major}
                  stroke="#9DA822"
                  bg="#F2F6F2"
                  icon="/upn.png"
                  compact
                  keepInline
                />
              </div>

              <p
                className="mt-3 text-left text-[0.95rem] text-[#747474]"
                style={{ fontFamily: "'DKCrayonCrumble', cursive" }}
              >
                {content.organizationLabel}
              </p>

              <div className="-mt-1">
                <InfoCard
                  title="GROOT Robotic UIR"
                  subtitle="MedInfo"
                  stroke="#225EA8"
                  bg="#ECF6FC"
                  icon="/groot.png"
                  compact
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({
  title,
  subtitle,
  value,
  icon,
  note,
  stroke,
  bg,
  fullWidth,
  compact,
  keepInline,
}: {
  title: string;
  subtitle: string;
  value?: string;
  icon?: string;
  note?: string;
  stroke: string;
  bg: string;
  fullWidth?: boolean;
  compact?: boolean;
  keepInline?: boolean;
}) {
  const cardStyle = compact
    ? keepInline
      ? "w-full max-w-[460px]"
      : "w-full max-w-[380px]"
    : fullWidth
    ? "w-full"
    : "w-full max-w-[480px]";

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className={`flex items-center justify-between rounded-lg px-4 py-3 shadow-sm sm:px-5 sm:py-2.5 ${cardStyle}`}
      style={{
        backgroundColor: bg,
        border: `2px solid ${stroke}`,
      }}
    >
      <div className="w-full">
        <div
          className={`flex gap-3 ${
            value
              ? "items-start justify-between"
              : "items-start justify-start"
          }`}
        >
          <div className="flex min-w-0 items-center gap-3">
            {icon && (
              <Image
                src={icon}
                alt={title}
                width={30}
                height={30}
                className="rounded-full"
              />
            )}
            <div
              className={`min-w-0 items-center gap-2 ${
                keepInline ? "flex flex-wrap md:flex-nowrap" : "flex flex-wrap"
              }`}
            >
              <p className="font-semibold text-[#444444] text-sm sm:text-base">
                {title}
              </p>
              <span className="text-sm text-[#747474]">|</span>
              <p
                className={`text-[#747474] text-sm ${
                  keepInline ? "md:whitespace-nowrap" : ""
                }`}
              >
                {subtitle}
              </p>
            </div>
          </div>

          {value && (
            <span className="text-xs font-semibold text-[#444444] sm:text-sm">
              {value}
            </span>
          )}
        </div>

        {note && (
          <p
            className="mt-3 border-t pt-3 text-xs leading-relaxed text-[#747474] sm:text-sm"
            style={{ borderColor: stroke }}
          >
            {note}
          </p>
        )}
      </div>
    </motion.div>
  );
}
