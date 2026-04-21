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

export const designProjectDetails: DesignProjectDetail[] = [
  {
    slug: "caseizone",
    title: "Caseizone Product & Socmed Design",
    brand: "Caseizone",
    summary:
      "Eksplorasi desain konten untuk brand Caseizone yang ditampilkan sebagai tumpukan kartu interaktif.",
    accent: "#E86BA3",
    cards: [
      {
        title: "Caseizone 01",
        subtitle: "Feed Design",
        image: "/projects/design/caseizone-01.png",
      },
      {
        title: "Caseizone 02",
        subtitle: "Hoodie Design",
        image: "/projects/design/hoodie.png",
      },
      {
        title: "Caseizone 03",
        subtitle: "Keyring Design",
        image: "/projects/design/keyring.png",
      },
      {
        title: "Caseizone 04",
        subtitle: "Slip On Design",
        image: "/projects/design/slipon.png",
      },
    ],
  },
  {
    slug: "nelayan-ikan-hias",
    title: "Nelayan Ikan Hias Brand Design",
    brand: "Nelayan Ikan Hias",
    summary:
      "Eksplorasi identitas visual dan materi brand untuk Nelayan Ikan Hias, brand pakan ikan hias channa.",
    accent: "#2D8C7D",
    cards: [
      {
        title: "Nelayan Ikan Hias 01",
        subtitle: "Logo Design",
        image: "/projects/design/nihlogo.png",
      },
      {
        title: "Nelayan Ikan Hias 02",
        subtitle: "Packaging Design",
        image: "/projects/design/nihdesain1.png",
      },
      {
        title: "Nelayan Ikan Hias 03",
        subtitle: "Packaging Design",
        image: "/projects/design/nihdesain2.png",
      },
      {
        title: "Nelayan Ikan Hias 04",
        subtitle: "Mockup Design",
        image: "/projects/design/nihmockup.png",
      },
    ],
  },
  {
    slug: "crazy-gang-barber-studio",
    title: "CRAZY GANG! Brand Design",
    brand: "CRAZY GANG! BARBER STUDIO",
    summary:
      "Eksplorasi identitas visual dan materi promosi untuk CRAZY GANG! BARBER STUDIO, brand hair studio di Pekanbaru.",
    accent: "#1F3C88",
    cards: [
      {
        title: "CRAZY GANG! 01",
        subtitle: "Logo Design",
        image: "/projects/design/cglogo.png",
      },
      {
        title: "CRAZY GANG! 02",
        subtitle: "Neon Box Design",
        image: "/projects/design/cgneonbox.png",
      },
      {
        title: "CRAZY GANG! 03",
        subtitle: "Promotion Design",
        image: "/projects/design/cgprom.png",
      },
      {
        title: "CRAZY GANG! 04",
        subtitle: "Price List Design",
        image: "/projects/design/cgpricelist.png",
      },
    ],
  },
  {
    slug: "sweetdessertdesire",
    title: "SweetDessertDesire Brand Design",
    brand: "SweetDessertDesire",
    summary:
      "Eksplorasi identitas visual dan materi promosi untuk SweetDessertDesire, bisnis F&B pancong lumer di Makassar.",
    accent: "#B8860B",
    cards: [
      {
        title: "SweetDessertDesire 01",
        subtitle: "Logo Design",
        image: "/projects/design/sdd1.png",
      },
      {
        title: "SweetDessertDesire 02",
        subtitle: "Instastory Design",
        image: "/projects/design/sdd2.png",
      },
      {
        title: "SweetDessertDesire 03",
        subtitle: "Business Card Batik Theme",
        image: "/projects/design/sdd3.png",
      },
      {
        title: "SweetDessertDesire 04",
        subtitle: "Greeting Card Design",
        image: "/projects/design/sdd4.png",
      },
    ],
  },
  {
    slug: "stand-banner",
    title: "Stand Banner Design Collection",
    brand: "Stand Banner",
    summary:
      "Kumpulan desain stand banner untuk momen akademik setelah ujian seperti sempro, semhas, dan kompre.",
    accent: "#C0392B",
    cards: [
      {
        title: "Stand Banner 01",
        subtitle: "Stand Banner Design",
        image: "/projects/design/banner1.png",
      },
      {
        title: "Stand Banner 02",
        subtitle: "Stand Banner Design",
        image: "/projects/design/banner2.png",
      },
      {
        title: "Stand Banner 03",
        subtitle: "Stand Banner Design",
        image: "/projects/design/banner3.png",
      },
      {
        title: "Stand Banner 04",
        subtitle: "Stand Banner Design",
        image: "/projects/design/banner4.png",
      },
      {
        title: "Stand Banner 05",
        subtitle: "Stand Banner Design",
        image: "/projects/design/banner5.png",
      },
    ],
  },
];

export const projectCategories: ProjectCategoryItem[] = [
  {
    title: "Design",
    color: "#444444",
    projects: [
      {
        title: "CASEIZONE",
        description:
          "CASEIZONE adalah brand custom merch K-Pop untuk GirlGroup IZ*ONE. Saya membuat desain merch, katalog serta konten instagram seperti feed dan instastory untuk mendukung branding dan promosi.",
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
          "SWEET DESSERT DESIRE adalah bisnis F&B pancong lumer di Makassar. Saya membuat logo, instastory, feed instagram, kartu ucapan, dan business card.",
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
          "Aplikasi web untuk membuat slip gaji secara cepat dan rapi, mencakup data karyawan, pendapatan, potongan, hingga perhitungan Take Home Pay. Hasil akhirnya berupa file PDF yang siap dicetak.",
        tools: "React, Vite, Tailwind CSS, html2canvas, jsPDF",
        image: "/projects/slipgajigenerator.png",
        demoLink: "https://slipgajigenerator.vercel.app/",
      },
      {
        title:
          "Implementasi Metode Deep Learning Dan Machine Learning Untuk Analisis Sentimen Peringatan Darurat Pada Media Sosial Youtube",
        description:
          "Skripsi yang membandingkan performa LSTM, CNN, SVM, dan Naive Bayes untuk analisis sentimen komentar YouTube terkait isu Peringatan Darurat.",
        tools:
          "Python, LSTM, CNN, SVM, Naive Bayes, Labelling GPT-4o ZeroShot & FewShot, Lexicon Based, TextBlob, SMOTE",
        image: "/projects/skripsi.png",
        demoLink: "https://repository.uir.ac.id/28740/",
      },
    ],
  },
];
