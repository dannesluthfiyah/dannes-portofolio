"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Admin Operational",
    company: "PT. Mahir Trans Bersaudara",
    type: "Full Time",
    period: "May 2025 - Present",
    duration: "1 year",
    location: "Riau, Indonesia",
    setup: "On Site / WFO",
    accent: "#C5A600",
    points: [
      "Mengelola administrasi BPJS Kesehatan dan Ketenagakerjaan, termasuk pendaftaran karyawan, pembaruan data, dan monitoring.",
      "Menyiapkan invoice, purchase order, serta dokumen operasional lainnya.",
      "Mengurus administrasi perpajakan perusahaan melalui coretax (PPH21, PPN, PPH23).",
    ],
  },
  {
    role: "Human Resources Intern",
    company: "PT Asrindo Citraseni Satria",
    type: "Internship",
    period: "Jul 2024 - Aug 2024",
    duration: "2 months",
    location: "Riau, Indonesia",
    setup: "On Site",
    accent: "#D83A34",
    points: [
      "Membuat prototype sistem monitoring dokumen Medical Check-Up berbasis web untuk meningkatkan efisiensi dokumentasi HR.",
      "Mengelola dan memperbarui database karyawan agar data tetap akurat dan terstruktur melalui Excel dan Spreadsheet.",
      "Mengoptimalkan sistem absensi digital menggunakan AppSheet untuk meningkatkan ketepatan presensi.",
      "Mendukung aktivitas administrasi HR sehari-hari.",
    ],
  },
  {
    role: 'Student Exchange at UPN "Veteran" Yogyakarta',
    company: "Kampus Merdeka",
    type: "Full Time",
    period: "Aug 2022 - Jan 2023",
    duration: "6 months",
    location: "Yogyakarta, Indonesia",
    setup: "On Site",
    accent: "#7F9E1B",
    points: [
      "Mengikuti program Pertukaran Mahasiswa Merdeka Batch 2 di UPN Veteran Yogyakarta.",
      "Berpartisipasi dalam kegiatan sosial dan budaya melalui Modul Nusantara untuk memperkuat kerja sama tim dan kemampuan beradaptasi.",
      "Terlibat dalam program berbasis masyarakat seperti bersih pantai, kunjungan ke panti asuhan, workshop batik, dan kunjungan museum.",
    ],
  },
  {
    role: "Admin",
    company: "Kopi Chuseyo",
    type: "Full Time",
    period: "May 2021 - Nov 2021",
    duration: "7 months",
    location: "Jakarta, Indonesia",
    setup: "Remote",
    accent: "#5C5F6B",
    points: [
      "Mencatat data penjualan dan menyusun laporan keuangan harian.",
      "Mengelola administrasi transaksi online dalam sistem kerja remote.",
      "Mendukung kegiatan operasional Chuseyo K-Pop Store.",
    ],
  },
  {
    role: "Graphic Designer",
    company: "CASEIZONE",
    type: "Part Time",
    period: "Aug 2020 - Jul 2021",
    duration: "1 year",
    location: "Jakarta, Indonesia",
    setup: "Remote",
    accent: "#C45A93",
    points: [
      "Menangani visual brand dan operasional toko online untuk merchandise K-Pop custom.",
      "Mendesain semua kebutuhan branding dan promosi.",
      "Membantu menjaga konsistensi identitas brand dan engagement audiens.",
      "Mendukung pengelolaan transaksi online dan manajemen pesanan.",
    ],
  },
];

export default function Experience() {
  return (
    <section className="min-h-screen bg-[#F6F9FE] px-6 py-16 sm:px-12 sm:py-20">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-12 text-center text-3xl font-bold text-[#225EA8] sm:mb-16 sm:text-4xl"
        style={{ fontFamily: "SF Pro Rounded, sans-serif" }}
      >
        Work Experience
      </motion.h1>

      <div className="mx-auto w-full max-w-5xl">
        {experiences.map((experience, index) => (
          <ExperienceItem
            key={`${experience.company}-${index}`}
            experience={experience}
            index={index}
            isLast={index === experiences.length - 1}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="mx-auto mt-10 flex w-full max-w-5xl flex-col items-center justify-center border-t border-[#D9E2F1] pt-8 sm:mt-14"
      >
        <p className="mb-4 text-center text-sm font-medium uppercase tracking-[0.08em] text-[#667085]">
          Download Curriculum Vitae
        </p>

        <div className="flex w-full flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
          <a
            href="/eng.pdf"
            download
            className="group inline-flex w-full items-center justify-center gap-3 rounded-[20px] border border-[#D9E2F1] bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FBFF_100%)] px-5 py-4 text-sm font-semibold text-[#2F3340] shadow-[0_10px_25px_rgba(34,94,168,0.08)] transition hover:-translate-y-0.5 hover:border-[#BDD2EC] hover:shadow-[0_16px_32px_rgba(34,94,168,0.12)] sm:w-auto sm:min-w-[220px]"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EAF2FC] text-[#225EA8] transition group-hover:bg-[#DDEAFB]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v10m0 0 4-4m-4 4-4-4m-3 8h14"
                />
              </svg>
            </span>
            <span className="flex flex-col items-start text-left">
              <span>CV English</span>
              <span className="text-xs font-medium text-[#667085]">
                PDF download
              </span>
            </span>
          </a>

          <a
            href="/ind.pdf"
            download
            className="group inline-flex w-full items-center justify-center gap-3 rounded-[20px] border border-[#D9E2F1] bg-[linear-gradient(180deg,#FFFFFF_0%,#FFF9FB_100%)] px-5 py-4 text-sm font-semibold text-[#2F3340] shadow-[0_10px_25px_rgba(196,90,147,0.08)] transition hover:-translate-y-0.5 hover:border-[#E7C0D4] hover:shadow-[0_16px_32px_rgba(196,90,147,0.12)] sm:w-auto sm:min-w-[220px]"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F8E9F1] text-[#C45A93] transition group-hover:bg-[#F3D7E7]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v10m0 0 4-4m-4 4-4-4m-3 8h14"
                />
              </svg>
            </span>
            <span className="flex flex-col items-start text-left">
              <span>CV Indonesia</span>
              <span className="text-xs font-medium text-[#667085]">
                PDF download
              </span>
            </span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}

function ExperienceItem({
  experience,
  index,
  isLast,
}: {
  experience: (typeof experiences)[number];
  index: number;
  isLast: boolean;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.05 }}
      className="relative grid grid-cols-[40px_minmax(0,1fr)] gap-4 pb-8 sm:grid-cols-[56px_minmax(0,1fr)] sm:gap-6 sm:pb-10"
    >
      <div className="relative flex justify-center">
        {!isLast && (
          <div className="absolute top-5 h-[calc(100%+24px)] w-px border-l-2 border-dashed border-[#D7E0EE]" />
        )}

        <div
          className="relative z-10 mt-1 flex h-5 w-5 items-center justify-center rounded-full border-[3px] bg-white shadow-[0_6px_16px_rgba(15,23,42,0.08)]"
          style={{ borderColor: experience.accent }}
        >
          <span
            className="h-2 w-2 rounded-full"
            style={{ backgroundColor: experience.accent }}
          />
        </div>
      </div>

      <div className="rounded-[28px] border border-[#E2E8F3] bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(248,250,255,0.9))] px-5 py-5 shadow-[0_12px_40px_rgba(15,23,42,0.05)] sm:px-7 sm:py-6">
        <div className="flex flex-wrap items-center gap-3">
          <span
            className="rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em]"
            style={{
              color: experience.accent,
              backgroundColor: `${experience.accent}14`,
            }}
          >
            {index === 0 ? "Current" : "Past"}
          </span>
          <p
            className="text-sm font-semibold sm:text-base"
            style={{ color: experience.accent }}
          >
            {experience.period}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-2.5">
          <span
            className="rounded-full border px-4 py-1.5 text-sm font-semibold sm:text-base"
            style={{ borderColor: experience.accent, color: experience.accent }}
          >
            {experience.company}
          </span>
          <h2 className="text-xl font-semibold text-[#2F3340] sm:text-[1.65rem]">
            {experience.role}
          </h2>
        </div>

        <div className="mt-5 grid gap-4 text-[#2F3340] sm:grid-cols-[150px_minmax(0,1fr)] sm:gap-6">
          <div className="rounded-2xl bg-[#F8FAFD] px-4 py-3 text-sm leading-relaxed text-[#526071]">
            <p>{experience.type}</p>
            <p>{experience.location}</p>
            <p>{experience.setup}</p>
            <p>{experience.duration}</p>
          </div>

          <ul className="space-y-2 text-sm leading-relaxed text-[#2F3340] sm:text-[15px]">
            {experience.points.map((point) => (
              <li key={point} className="flex gap-3">
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                  style={{ backgroundColor: experience.accent }}
                />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.article>
  );
}
