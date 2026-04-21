"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-[#F6F9FE] px-6 md:px-12 py-16">
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full max-w-6xl">
        {/* FOTO */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative flex justify-end md:justify-start md:w-1/2 pr-0 md:-ml-12 lg:-ml-20"
        >
          <div className="relative w-[300px] sm:w-[380px] md:w-[460px] lg:w-[520px]">
            <Image
              src="/graduation.png"
              alt="Graduation Photo"
              width={520}
              height={520}
              className="object-contain drop-shadow-lg w-full h-auto"
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
          className="md:w-1/2 text-center md:text-left"
        >

          <h2 className="text-3xl sm:text-4xl font-bold text-[#225EA8] mb-14 text-center"
        style={{ fontFamily: "SF Pro Rounded, sans-serif" }}>
            About Me
          </h2>

          <p className="max-w-[34rem] text-[#444444] text-sm sm:text-base leading-relaxed text-justify mb-5">
            Saya lulusan <strong>S1 Teknik Informatika</strong> dengan pengalaman di bidang <strong>HR</strong> dan{" "}
            <strong>Desain Grafis</strong>. Di samping itu, saya juga memiliki minat yang kuat dalam{" "}
            <strong>Data Analytics</strong> dan <strong>AI</strong>. Saya senang mengeksplorasi desain dan teknologi
            terkini untuk terus berkembang di bidang-bidang tersebut.
          </p>

          <div className="space-y-3">
            <InfoCard
              title="Universitas Islam Riau"
              subtitle="Teknik Informatika"
              value="3.89 / 4.00"
              stroke="#00732E"
              bg="#E3EEEE"
              icon="/uir.png"
              fullWidth
            />

            <p
              className="text-[0.95rem] mt-3 text-[#747474]"
              style={{ fontFamily: "'DKCrayonCrumble', cursive" }}
            >
              Pertukaran Mahasiswa
            </p>

            <div className="-mt-1">
              <InfoCard
                title="UPN Veteran Yogyakarta"
                subtitle="Informatika"
                stroke="#9DA822"
                bg="#F2F6F2"
                icon="/upn.png"
                compact
              />
            </div>

            {/* Organisasi / Club */}
            <p
              className="text-[0.95rem] mt-3 text-[#747474]"
              style={{ fontFamily: "'DKCrayonCrumble', cursive" }}
            >
              Organisasi / Club
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
    </section>
  );
}

/* ===========================================================
   KOMPONEN KOTAK INFO
=========================================================== */
function InfoCard({
  title,
  subtitle,
  value,
  icon,
  stroke,
  bg,
  fullWidth,
  compact,
}: {
  title: string;
  subtitle: string;
  value?: string;
  icon?: string;
  stroke: string;
  bg: string;
  fullWidth?: boolean;
  compact?: boolean;
}) {
  const cardStyle = compact
    ? "max-w-[380px]"
    : fullWidth
    ? "w-full"
    : "max-w-[480px]";

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className={`flex items-center justify-between rounded-lg px-5 py-2.5 shadow-sm ${cardStyle}`}
      style={{
        backgroundColor: bg,
        border: `2px solid ${stroke}`,
      }}
    >
      <div className="flex items-center gap-3">
        {icon && (
          <Image
            src={icon}
            alt={title}
            width={30}
            height={30}
            className="rounded-full"
          />
        )}
        <div className="flex items-center gap-2">
          <p className="font-semibold text-[#444444] text-sm sm:text-base">
            {title}
          </p>
          <span className="text-[#747474] text-sm">|</span>
          <p className="text-[#747474] text-sm">{subtitle}</p>
        </div>
      </div>

      {value && (
        <span className="font-semibold text-[#444444] text-xs sm:text-sm">
          {value}
        </span>
      )}
    </motion.div>
  );
}
