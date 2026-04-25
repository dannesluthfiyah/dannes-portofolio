import type { Language } from "../components/LanguageProvider";

export type DesignDeckCard = {
  title: string;
  subtitle?: string;
  image?: string;
};

export type ProjectItem = {
  title: string;
  description: string;
  tools: string;
  image?: string;
  color?: string;
  demoLink?: string;
  codeLink?: string;
  detailSlug?: string;
};

export type ProjectCategoryItem = {
  title: string;
  color: string;
  projects: ProjectItem[];
};

export type DesignProjectDetail = {
  slug: string;
  title: string;
  brand: string;
  summary: string;
  accent: string;
  cards: DesignDeckCard[];
};

const designProjectDetailsByLanguage: Record<Language, DesignProjectDetail[]> = {
  en: [
    {
      slug: "caseizone",
      title: "Caseizone Product & Social Media Design",
      brand: "Caseizone",
      summary:
        "A collection of design explorations for the Caseizone brand presented as an interactive card stack.",
      accent: "#E86BA3",
      cards: [
        { title: "Caseizone 01", subtitle: "Feed Design", image: "/projects/design/caseizone-01.png" },
        { title: "Caseizone 02", subtitle: "Hoodie Design", image: "/projects/design/hoodie.png" },
        { title: "Caseizone 03", subtitle: "Keyring Design", image: "/projects/design/keyring.png" },
        { title: "Caseizone 04", subtitle: "Slip On Design", image: "/projects/design/slipon.png" },
      ],
    },
    {
      slug: "nelayan-ikan-hias",
      title: "Nelayan Ikan Hias Brand Design",
      brand: "Nelayan Ikan Hias",
      summary:
        "A visual identity and brand material exploration for Nelayan Ikan Hias, a channa ornamental fish feed brand.",
      accent: "#2D8C7D",
      cards: [
        { title: "Nelayan Ikan Hias 01", subtitle: "Logo Design", image: "/projects/design/nihlogo.png" },
        { title: "Nelayan Ikan Hias 02", subtitle: "Packaging Design", image: "/projects/design/nihdesain1.png" },
        { title: "Nelayan Ikan Hias 03", subtitle: "Packaging Design", image: "/projects/design/nihdesain2.png" },
        { title: "Nelayan Ikan Hias 04", subtitle: "Mockup Design", image: "/projects/design/nihmockup.png" },
      ],
    },
    {
      slug: "crazy-gang-barber-studio",
      title: "CRAZY GANG! Brand Design",
      brand: "CRAZY GANG! BARBER STUDIO",
      summary:
        "A visual identity and promotional material exploration for CRAZY GANG! BARBER STUDIO, a hair studio brand in Pekanbaru.",
      accent: "#1F3C88",
      cards: [
        { title: "CRAZY GANG! 01", subtitle: "Logo Design", image: "/projects/design/cglogo.png" },
        { title: "CRAZY GANG! 02", subtitle: "Neon Box Design", image: "/projects/design/cgneonbox.png" },
        { title: "CRAZY GANG! 03", subtitle: "Promotion Design", image: "/projects/design/cgprom.png" },
        { title: "CRAZY GANG! 04", subtitle: "Price List Design", image: "/projects/design/cgpricelist.png" },
      ],
    },
    {
      slug: "sweetdessertdesire",
      title: "SweetDessertDesire Brand Design",
      brand: "SweetDessertDesire",
      summary:
        "A visual identity and promotional material exploration for SweetDessertDesire, a molten pancong F&B business in Makassar.",
      accent: "#B8860B",
      cards: [
        { title: "SweetDessertDesire 01", subtitle: "Logo Design", image: "/projects/design/sdd1.png" },
        { title: "SweetDessertDesire 02", subtitle: "Instagram Story Design", image: "/projects/design/sdd2.png" },
        { title: "SweetDessertDesire 03", subtitle: "Batik-Themed Business Card", image: "/projects/design/sdd3.png" },
        { title: "SweetDessertDesire 04", subtitle: "Greeting Card Design", image: "/projects/design/sdd4.png" },
      ],
    },
    {
      slug: "stand-banner",
      title: "Stand Banner Design Collection",
      brand: "Stand Banner",
      summary:
        "A collection of stand banner designs for academic milestones such as proposal seminars, thesis defense seminars, and comprehensive exams.",
      accent: "#C0392B",
      cards: [
        { title: "Stand Banner 01", subtitle: "Stand Banner Design", image: "/projects/design/banner1.png" },
        { title: "Stand Banner 02", subtitle: "Stand Banner Design", image: "/projects/design/banner2.png" },
        { title: "Stand Banner 03", subtitle: "Stand Banner Design", image: "/projects/design/banner3.png" },
        { title: "Stand Banner 04", subtitle: "Stand Banner Design", image: "/projects/design/banner4.png" },
        { title: "Stand Banner 05", subtitle: "Stand Banner Design", image: "/projects/design/banner5.png" },
      ],
    },
  ],
  id: [
    {
      slug: "caseizone",
      title: "Desain Produk & Sosial Media Caseizone",
      brand: "Caseizone",
      summary:
        "Eksplorasi desain konten untuk brand Caseizone yang ditampilkan sebagai tumpukan kartu interaktif.",
      accent: "#E86BA3",
      cards: [
        { title: "Caseizone 01", subtitle: "Desain Feed", image: "/projects/design/caseizone-01.png" },
        { title: "Caseizone 02", subtitle: "Desain Hoodie", image: "/projects/design/hoodie.png" },
        { title: "Caseizone 03", subtitle: "Desain Gantungan Kunci", image: "/projects/design/keyring.png" },
        { title: "Caseizone 04", subtitle: "Desain Slip On", image: "/projects/design/slipon.png" },
      ],
    },
    {
      slug: "nelayan-ikan-hias",
      title: "Desain Brand Nelayan Ikan Hias",
      brand: "Nelayan Ikan Hias",
      summary:
        "Eksplorasi identitas visual dan materi brand untuk Nelayan Ikan Hias, brand pakan ikan hias channa.",
      accent: "#2D8C7D",
      cards: [
        { title: "Nelayan Ikan Hias 01", subtitle: "Desain Logo", image: "/projects/design/nihlogo.png" },
        { title: "Nelayan Ikan Hias 02", subtitle: "Desain Kemasan", image: "/projects/design/nihdesain1.png" },
        { title: "Nelayan Ikan Hias 03", subtitle: "Desain Kemasan", image: "/projects/design/nihdesain2.png" },
        { title: "Nelayan Ikan Hias 04", subtitle: "Desain Mockup", image: "/projects/design/nihmockup.png" },
      ],
    },
    {
      slug: "crazy-gang-barber-studio",
      title: "Desain Brand CRAZY GANG!",
      brand: "CRAZY GANG! BARBER STUDIO",
      summary:
        "Eksplorasi identitas visual dan materi promosi untuk CRAZY GANG! BARBER STUDIO, brand hair studio di Pekanbaru.",
      accent: "#1F3C88",
      cards: [
        { title: "CRAZY GANG! 01", subtitle: "Desain Logo", image: "/projects/design/cglogo.png" },
        { title: "CRAZY GANG! 02", subtitle: "Desain Neon Box", image: "/projects/design/cgneonbox.png" },
        { title: "CRAZY GANG! 03", subtitle: "Desain Promosi", image: "/projects/design/cgprom.png" },
        { title: "CRAZY GANG! 04", subtitle: "Desain Daftar Harga", image: "/projects/design/cgpricelist.png" },
      ],
    },
    {
      slug: "sweetdessertdesire",
      title: "Desain Brand SweetDessertDesire",
      brand: "SweetDessertDesire",
      summary:
        "Eksplorasi identitas visual dan materi promosi untuk SweetDessertDesire, bisnis F&B pancong lumer di Makassar.",
      accent: "#B8860B",
      cards: [
        { title: "SweetDessertDesire 01", subtitle: "Desain Logo", image: "/projects/design/sdd1.png" },
        { title: "SweetDessertDesire 02", subtitle: "Desain Instastory", image: "/projects/design/sdd2.png" },
        { title: "SweetDessertDesire 03", subtitle: "Kartu Nama Tema Batik", image: "/projects/design/sdd3.png" },
        { title: "SweetDessertDesire 04", subtitle: "Desain Kartu Ucapan", image: "/projects/design/sdd4.png" },
      ],
    },
    {
      slug: "stand-banner",
      title: "Koleksi Desain Stand Banner",
      brand: "Stand Banner",
      summary:
        "Kumpulan desain stand banner untuk momen akademik setelah ujian seperti sempro, semhas, dan kompre.",
      accent: "#C0392B",
      cards: [
        { title: "Stand Banner 01", subtitle: "Desain Stand Banner", image: "/projects/design/banner1.png" },
        { title: "Stand Banner 02", subtitle: "Desain Stand Banner", image: "/projects/design/banner2.png" },
        { title: "Stand Banner 03", subtitle: "Desain Stand Banner", image: "/projects/design/banner3.png" },
        { title: "Stand Banner 04", subtitle: "Desain Stand Banner", image: "/projects/design/banner4.png" },
        { title: "Stand Banner 05", subtitle: "Desain Stand Banner", image: "/projects/design/banner5.png" },
      ],
    },
  ],
};

const projectCategoriesByLanguage: Record<Language, ProjectCategoryItem[]> = {
  en: [
    {
      title: "Design",
      color: "#444444",
      projects: [
        {
          title: "CASEIZONE",
          description:
            "CASEIZONE is a custom K-Pop merchandise brand for the girl group IZ*ONE. I created merchandise designs, catalog layouts, and Instagram content such as feed posts and stories to support branding and promotion.",
          tools: "PhotoShop, Canva",
          image: "/projects/caseizone.png",
          color: "#E86BA3",
          detailSlug: "caseizone",
        },
        {
          title: "NELAYAN IKAN HIAS",
          description:
            "NELAYAN IKAN HIAS is a channa ornamental fish feed brand. I created the logo, catalog designs, and packaging to support the brand's visual identity.",
          tools: "PhotoShop, Canva",
          image: "/projects/nelayanikanhias.png",
          color: "#2D8C7D",
          detailSlug: "nelayan-ikan-hias",
        },
        {
          title: "CRAZY GANG! BARBER STUDIO",
          description:
            "CRAZY GANG! BARBER STUDIO is a hair studio brand in Pekanbaru. I created the logo, neon box, promotional materials, and price list.",
          tools: "PhotoShop, Canva",
          image: "/projects/crazygang.png",
          color: "#1F3C88",
          detailSlug: "crazy-gang-barber-studio",
        },
        {
          title: "SWEET DESSERT DESIRE",
          description:
            "SWEET DESSERT DESIRE is a molten pancong F&B business in Makassar. I created the logo, Instagram stories, feed content, greeting cards, and business cards.",
          tools: "PhotoShop, Canva",
          image: "/projects/sweetdessertdesire.png",
          color: "#B8860B",
          detailSlug: "sweetdessertdesire",
        },
        {
          title: "STAND BANNER",
          description:
            "I created several stand banner designs for academic events after exams, such as proposal seminars, thesis defense seminars, and comprehensive exams.",
          tools: "Figma, Canva",
          image: "/projects/standbanner.png",
          color: "#C0392B",
          detailSlug: "stand-banner",
        },
      ],
    },
    {
      title: "Tech",
      color: "#444444",
      projects: [
        {
          title: "Slip Gaji Generator",
          description:
            "A web app for generating salary slips quickly and neatly, covering employee data, earnings, deductions, and take-home pay calculations. The final output is a print-ready PDF file.",
          tools: "React, Vite, Tailwind CSS, html2canvas, jsPDF",
          image: "/projects/slipgajigenerator.png",
          demoLink: "https://slipgajigenerator.vercel.app/",
        },
        {
          title:
            "Implementation of Deep Learning and Machine Learning Methods for Sentiment Analysis of Emergency Warning Discussions on YouTube",
          description:
            "An undergraduate thesis comparing the performance of LSTM, CNN, SVM, and Naive Bayes for sentiment analysis on YouTube comments related to emergency warning issues.",
          tools:
            "Python, LSTM, CNN, SVM, Naive Bayes, GPT-4o Zero-Shot & Few-Shot Labeling, Lexicon-Based, TextBlob, SMOTE",
          image: "/projects/skripsi.png",
          demoLink: "https://repository.uir.ac.id/28740/",
        },
      ],
    },
  ],
  id: [
    {
      title: "Desain",
      color: "#444444",
      projects: [
        {
          title: "CASEIZONE",
          description:
            "CASEIZONE adalah brand custom merch K-Pop untuk girl group IZ*ONE. Saya membuat desain merch, katalog, serta konten Instagram seperti feed dan instastory untuk mendukung branding dan promosi.",
          tools: "PhotoShop, Canva",
          image: "/projects/caseizone.png",
          color: "#E86BA3",
          detailSlug: "caseizone",
        },
        {
          title: "NELAYAN IKAN HIAS",
          description:
            "NELAYAN IKAN HIAS adalah brand pakan ikan hias channa. Saya membuat logo, desain katalog, dan juga packaging untuk mendukung identitas visual brand.",
          tools: "PhotoShop, Canva",
          image: "/projects/nelayanikanhias.png",
          color: "#2D8C7D",
          detailSlug: "nelayan-ikan-hias",
        },
        {
          title: "CRAZY GANG! BARBER STUDIO",
          description:
            "CRAZY GANG! BARBER STUDIO adalah brand hair studio di Pekanbaru. Saya membuat logo, neon box, materi promosi, dan price list.",
          tools: "PhotoShop, Canva",
          image: "/projects/crazygang.png",
          color: "#1F3C88",
          detailSlug: "crazy-gang-barber-studio",
        },
        {
          title: "SWEET DESSERT DESIRE",
          description:
            "SWEET DESSERT DESIRE adalah bisnis F&B pancong lumer di Makassar. Saya membuat logo, instastory, feed Instagram, kartu ucapan, dan business card.",
          tools: "PhotoShop, Canva",
          image: "/projects/sweetdessertdesire.png",
          color: "#B8860B",
          detailSlug: "sweetdessertdesire",
        },
        {
          title: "STAND BANNER",
          description:
            "Saya beberapa kali membuat desain stand banner untuk kebutuhan akademik setelah ujian seperti sempro, semhas, dan kompre.",
          tools: "Figma, Canva",
          image: "/projects/standbanner.png",
          color: "#C0392B",
          detailSlug: "stand-banner",
        },
      ],
    },
    {
      title: "Tech",
      color: "#444444",
      projects: [
        {
          title: "Slip Gaji Generator",
          description:
            "Aplikasi web untuk membuat slip gaji secara cepat dan rapi, mencakup data karyawan, pendapatan, potongan, hingga perhitungan take-home pay. Hasil akhirnya berupa file PDF yang siap dicetak.",
          tools: "React, Vite, Tailwind CSS, html2canvas, jsPDF",
          image: "/projects/slipgajigenerator.png",
          demoLink: "https://slipgajigenerator.vercel.app/",
        },
        {
          title:
            "Implementasi Metode Deep Learning Dan Machine Learning Untuk Analisis Sentimen Peringatan Darurat Pada Media Sosial YouTube",
          description:
            "Skripsi yang membandingkan performa LSTM, CNN, SVM, dan Naive Bayes untuk analisis sentimen komentar YouTube terkait isu Peringatan Darurat.",
          tools:
            "Python, LSTM, CNN, SVM, Naive Bayes, Labelling GPT-4o Zero-Shot & Few-Shot, Lexicon Based, TextBlob, SMOTE",
          image: "/projects/skripsi.png",
          demoLink: "https://repository.uir.ac.id/28740/",
        },
      ],
    },
  ],
};

export function getDesignProjectDetails(language: Language) {
  return designProjectDetailsByLanguage[language];
}

export function getProjectCategories(language: Language) {
  return projectCategoriesByLanguage[language];
}
