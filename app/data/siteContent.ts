import type { Language } from "../components/LanguageProvider";

export const siteContent = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      skills: "Skills",
      experience: "Experience",
      contact: "Contact",
      language: "Language",
      mobileMenu: "Open menu",
    },
    hero: {
      introTop:
        "An Informatics Engineering graduate with a strong interest in",
      introBottom: "",
      interests: ["HR", "Design", "AI"],
      conjunction: "and",
    },
    about: {
      title: "About Me",
      body:
        "I am a Bachelor's graduate in Informatics Engineering with experience in HR and Graphic Design. In addition, I have a strong interest in Data Analytics and AI. I enjoy exploring design and emerging technologies to keep growing in those fields.",
      scholarshipNote:
        "Recipient of the 2021 Riau Provincial Achievement Scholarship",
      exchangeLabel: "Student Exchange",
      organizationLabel: "Organization / Club",
      major: "Informatics Engineering",
    },
    skills: {
      title: "Technical Skills",
    },
    experience: {
      title: "Work Experience",
      current: "Current",
      past: "Past",
      download: "Download Curriculum Vitae",
      cvEnglish: "CV English",
      cvIndonesian: "CV Indonesian",
      pdf: "PDF download",
    },
    projects: {
      title: "Projects",
      close: "Close",
      previous: "Previous",
      next: "Next",
      tools: "Tools",
      viewGallery: "View Gallery",
      openProject: "Open Project",
      liveDemo: "Live Demo",
      code: "Code",
    },
    contact: {
      title: "Let's Connect!",
    },
    footer: {
      rights: "(c) 2026 Dannes Luthfiyah Salmaa. All rights reserved.",
    },
  },
  id: {
    nav: {
      home: "Beranda",
      about: "Tentang",
      projects: "Proyek",
      skills: "Keahlian",
      experience: "Pengalaman",
      contact: "Kontak",
      language: "Bahasa",
      mobileMenu: "Buka menu",
    },
    hero: {
      introTop: "Lulusan Teknik Informatika dengan minat yang kuat pada",
      introBottom: "",
      interests: ["HR", "Desain", "AI"],
      conjunction: "dan",
    },
    about: {
      title: "Tentang Saya",
      body:
        "Saya lulusan S1 Teknik Informatika dengan pengalaman di bidang HR dan Desain Grafis. Di samping itu, saya juga memiliki minat yang kuat dalam Data Analytics dan AI. Saya senang mengeksplorasi desain dan teknologi terkini untuk terus berkembang di bidang-bidang tersebut.",
      scholarshipNote: "Penerima Beasiswa Prestasi Pemprov Riau 2021",
      exchangeLabel: "Pertukaran Mahasiswa",
      organizationLabel: "Organisasi / Klub",
      major: "Teknik Informatika",
    },
    skills: {
      title: "Keahlian Teknis",
    },
    experience: {
      title: "Pengalaman Kerja",
      current: "Saat Ini",
      past: "Sebelumnya",
      download: "Unduh Curriculum Vitae",
      cvEnglish: "CV Inggris",
      cvIndonesian: "CV Indonesia",
      pdf: "Unduh PDF",
    },
    projects: {
      title: "Proyek",
      close: "Tutup",
      previous: "Sebelumnya",
      next: "Berikutnya",
      tools: "Tools",
      viewGallery: "Lihat Galeri",
      openProject: "Buka Proyek",
      liveDemo: "Demo Langsung",
      code: "Kode",
    },
    contact: {
      title: "Mari Terhubung!",
    },
    footer: {
      rights: "(c) 2026 Dannes Luthfiyah Salmaa. Hak cipta dilindungi.",
    },
  },
} satisfies Record<Language, unknown>;
