"use client";

import { AnimatePresence, motion } from "framer-motion";
import Slider, { Settings } from "react-slick";
import ProjectCard from "./ProjectCard";
import DesignCardDeck from "./DesignCardDeck";
import { useEffect, useRef, useState } from "react";
import {
  getDesignProjectDetails,
  getProjectCategories,
  type DesignProjectDetail,
  type ProjectItem,
} from "../data/projects";
import { useLanguage } from "./LanguageProvider";
import { siteContent } from "../data/siteContent";

export default function Projects() {
  const { language } = useLanguage();
  const content = siteContent[language].projects;
  const designProjectDetails = getDesignProjectDetails(language);
  const projectCategories = getProjectCategories(language);
  const slidesToShow = 3;
  const [activeDesignProject, setActiveDesignProject] =
    useState<DesignProjectDetail | null>(null);

  useEffect(() => {
    if (!activeDesignProject) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [activeDesignProject]);

  const baseSettings: Settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    arrows: false,
  };

  const handleOpenDetail = (slug: string) => {
    const matchedProject = designProjectDetails.find((item) => item.slug === slug);
    if (matchedProject) {
      setActiveDesignProject(matchedProject);
    }
  };

  return (
    <>
      <section className="min-h-screen bg-[#F6F9FE] px-4 sm:px-8 py-20 relative overflow-hidden">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl font-bold text-[#225EA8] mb-14 text-center"
          style={{ fontFamily: "SF Pro Rounded, sans-serif" }}
        >
          {content.title}
        </motion.h1>

        <div className="space-y-28 max-w-7xl mx-auto relative">
          {projectCategories.map((category, index) => (
            <ProjectCategory
              key={category.title}
              title={category.title}
              color={category.color}
              projects={category.projects}
              baseSettings={baseSettings}
              slidesToShow={slidesToShow}
              index={index}
              onOpenDetail={handleOpenDetail}
              language={language}
            />
          ))}
        </div>
      </section>

      <AnimatePresence>
        {activeDesignProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[120] bg-[rgba(15,23,42,0.72)] backdrop-blur-sm px-0 py-0 sm:px-8 sm:py-10"
            onClick={() => setActiveDesignProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: 16 }}
              transition={{ duration: 0.28 }}
              className="relative mx-auto flex h-full w-full max-w-5xl items-end sm:items-center justify-center"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="w-full h-[92dvh] sm:h-auto sm:max-h-[88vh] overflow-y-auto rounded-t-[28px] sm:rounded-[32px] border border-white/35 bg-[linear-gradient(135deg,rgba(255,255,255,0.97),rgba(248,250,252,0.9))] px-4 py-5 shadow-[0_28px_90px_rgba(15,23,42,0.24)] sm:px-6 sm:py-5">
                <div className="mb-4 sm:mb-4 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                  <div className="max-w-2xl pr-10 sm:pr-0">
                    <p
                      className="text-[11px] sm:text-sm font-semibold uppercase tracking-[0.22em] sm:tracking-[0.24em]"
                      style={{ color: activeDesignProject.accent }}
                    >
                      {activeDesignProject.brand}
                    </p>
                    <h2 className="mt-2 text-xl sm:text-3xl font-bold text-slate-800 leading-tight">
                      {activeDesignProject.title}
                    </h2>
                  </div>

                  <button
                    type="button"
                    onClick={() => setActiveDesignProject(null)}
                    className="absolute right-4 top-4 sm:static shrink-0 rounded-full border border-slate-300 bg-white px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5"
                  >
                    {content.close}
                  </button>
                </div>

                <DesignCardDeck
                  cards={activeDesignProject.cards}
                  accent={activeDesignProject.accent}
                  language={language}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function ProjectCategory({
  title,
  color,
  projects,
  baseSettings,
  slidesToShow,
  index,
  onOpenDetail,
  language,
}: {
  title: string;
  color: string;
  projects: ProjectItem[];
  baseSettings: Settings;
  slidesToShow: number;
  index: number;
  onOpenDetail: (slug: string) => void;
  language: "en" | "id";
}) {
  const totalSlides = projects.length;
  const sliderRef = useRef<Slider | null>(null);
  const [visibleSlides, setVisibleSlides] = useState(slidesToShow);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(totalSlides > slidesToShow);

  useEffect(() => {
    const updateVisibleSlides = () => {
      if (window.innerWidth < 768) {
        setVisibleSlides(1);
        return;
      }

      if (window.innerWidth < 1280) {
        setVisibleSlides(2);
        return;
      }

      setVisibleSlides(slidesToShow);
    };

    updateVisibleSlides();
    window.addEventListener("resize", updateVisibleSlides);

    return () => window.removeEventListener("resize", updateVisibleSlides);
  }, [slidesToShow]);

  useEffect(() => {
    setShowLeft(false);
    setShowRight(totalSlides > visibleSlides);
    sliderRef.current?.slickGoTo(0);
  }, [totalSlides, visibleSlides]);

  const handleAfterChange = (currentSlide: number) => {
    setShowLeft(currentSlide > 0);
    setShowRight(currentSlide < totalSlides - visibleSlides);
  };

  const settings: Settings = {
    ...baseSettings,
    slidesToShow: visibleSlides,
    slidesToScroll: 1,
    afterChange: handleAfterChange,
  };

  const shouldUseSlider = totalSlides > visibleSlides;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="relative w-full"
    >
      <div className="flex items-center gap-2 mb-4 sm:mb-6 ml-1 sm:ml-2">
        <span
          className="font-bold text-lg sm:text-xl md:text-2xl"
          style={{ color }}
        >
          {title}
        </span>
        <div
          className="w-0 h-0 border-t-[7px] border-b-[7px] border-l-[10px]"
          style={{
            borderColor: `transparent transparent transparent ${color}`,
          }}
        ></div>
      </div>

      <div className="relative w-full px-8 sm:px-10 md:px-12">
        <button
          onClick={() => showLeft && sliderRef.current?.slickPrev()}
          disabled={!showLeft}
          aria-label={`Previous ${title} project`}
          className="absolute left-0 sm:left-1 md:left-0 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full shadow-md backdrop-blur-md transition"
          style={{
            backgroundColor: `${color}20`,
            color,
            opacity: showLeft ? 1 : 0.35,
            cursor: showLeft ? "pointer" : "not-allowed",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="currentColor"
            className="w-4 h-4 sm:w-5 sm:h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>

        <button
          onClick={() => showRight && sliderRef.current?.slickNext()}
          disabled={!showRight}
          aria-label={`Next ${title} project`}
          className="absolute right-0 sm:right-1 md:right-0 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full shadow-md backdrop-blur-md transition"
          style={{
            backgroundColor: `${color}20`,
            color,
            opacity: showRight ? 1 : 0.35,
            cursor: showRight ? "pointer" : "not-allowed",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="currentColor"
            className="w-4 h-4 sm:w-5 sm:h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>

        <div className="absolute right-8 sm:right-10 md:right-12 top-0 h-full w-[72px] sm:w-[96px] z-10 pointer-events-none bg-gradient-to-l from-[#F6F9FE] to-transparent"></div>

        {shouldUseSlider ? (
          <Slider key={`${title}-${visibleSlides}`} ref={sliderRef} {...settings}>
            {projects.map((project, projectIndex) => (
              <div key={`${title}-${projectIndex}`} className="px-2 sm:px-3">
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  tools={project.tools}
                  image={project.image}
                  projectColor={project.color}
                  detailSlug={project.detailSlug}
                  onOpenDetail={onOpenDetail}
                  demoLink={project.demoLink}
                  codeLink={project.codeLink}
                  category={title}
                  color={color}
                  language={language}
                />
              </div>
            ))}
          </Slider>
        ) : (
          <div className="flex flex-wrap gap-4 sm:gap-5 md:gap-6">
            {projects.map((project, projectIndex) => (
              <div
                key={`${title}-${projectIndex}`}
                className="w-full md:w-[calc(33.333%-16px)] lg:w-[calc(33.333%-18px)]"
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  tools={project.tools}
                  image={project.image}
                  projectColor={project.color}
                  detailSlug={project.detailSlug}
                  onOpenDetail={onOpenDetail}
                  demoLink={project.demoLink}
                  codeLink={project.codeLink}
                  category={title}
                  color={color}
                  language={language}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
