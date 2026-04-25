"use client";
import { motion } from "framer-motion";
import SkillCard from "./SkillCard";
import { siteContent } from "../data/siteContent";
import { useLanguage } from "./LanguageProvider";

export default function Skills() {
  const { language } = useLanguage();
  const content = siteContent[language].skills;

  const skills = [
    { name: "HR Administration", img: "/skills/hr.png" },
    { name: "Ms. Office", img: "/skills/office.png" },
    { name: "Figma", img: "/skills/figma.png" },
    { name: "Canva", img: "/skills/canva.png" },
    { name: "PhotoShop", img: "/skills/ps.png" },
    { name: "Adobe Illustrator", img: "/skills/ai.png" },
    { name: "Data Analytics", img: "/skills/data.png" },
    { name: "Python", img: "/skills/python.png" },
    { name: "SQL", img: "/skills/sql.png" },
    { name: "HTML", img: "/skills/html.png" },
    { name: "CSS", img: "/skills/css.png" },
    { name: "JavaScript", img: "/skills/js.png" },
    { name: "TypeScript", img: "/skills/ts.png" },
    { name: "Next.JS", img: "/skills/next.png" },
    { name: "Tailwind CSS", img: "/skills/tailwind.png" },
    { name: "Git / GitHub", img: "/skills/git.png" },
  ];

  return (
    <section className="min-h-screen bg-[#F6F9FE] px-6 sm:px-12 py-20 flex flex-col items-center">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl sm:text-4xl font-bold text-[#225EA8] mb-14 text-center"
        style={{ fontFamily: "SF Pro Rounded, sans-serif" }}
        >
        {content.title}
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 sm:gap-6 md:gap-8 max-w-6xl"
      >
        {skills.map((skill, idx) => (
          <SkillCard key={idx} name={skill.name} img={skill.img} />
        ))}
      </motion.div>
    </section>
  );
}
