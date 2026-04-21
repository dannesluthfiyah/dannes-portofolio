"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ProjectCard({
  title,
  description,
  tools,
  image,
  projectColor,
  detailSlug,
  onOpenDetail,
  demoLink,
  codeLink,
  category,
  color,
}: {
  title: string;
  description: string;
  tools: string;
  image?: string;
  projectColor?: string;
  detailSlug?: string;
  onOpenDetail?: (slug: string) => void;
  demoLink?: string;
  codeLink?: string;
  category: string;
  color: string;
}) {
  const href = demoLink;
  const isInternal = Boolean(detailSlug && onOpenDetail);
  const accentColor = projectColor ?? color;

  const cardContent = (
    <>
      <div>
        <div className="w-full h-[130px] sm:h-[150px] mb-4 relative">
          {image ? (
            <Image
              src={image}
              alt="Project Thumbnail"
              fill
              unoptimized
              className="object-cover rounded-md"
            />
          ) : (
            <div className="flex h-full items-center justify-center rounded-md bg-gradient-to-br from-[#EEF4FF] via-white to-[#F7F9D9] px-6 text-center">
              <p
                className="text-sm sm:text-base font-semibold"
                style={{ color: accentColor }}
              >
                {title}
              </p>
            </div>
          )}
        </div>

        <h3 className="font-semibold text-gray-800 text-sm sm:text-base mb-2">
          {title}
        </h3>
        <p className="text-gray-600 text-xs sm:text-sm mb-3">{description}</p>
        <p className="text-[10px] sm:text-xs text-gray-500">
          <span className="font-medium">Tools:</span> {tools}
        </p>
      </div>

      {(href || codeLink || isInternal) && (
        <div className="flex items-center gap-3 sm:gap-4 mt-4">
          {(href || isInternal) && (
            <span
              className="text-xs sm:text-sm font-semibold"
              style={{ color: accentColor }}
            >
              {isInternal
                ? "View Gallery"
                : category === "Design" || category === "Etc"
                  ? "Open Project"
                  : "Live Demo"}
            </span>
          )}
          {codeLink && category !== "Design" && category !== "Etc" && (
            <span className="text-xs sm:text-sm font-semibold text-gray-600">
              Code
            </span>
          )}
        </div>
      )}
    </>
  );

  if (isInternal && detailSlug) {
    return (
      <motion.button
        type="button"
        onClick={() => onOpenDetail?.(detailSlug)}
        whileHover={{ boxShadow: "0 16px 32px rgba(15, 23, 42, 0.14)" }}
        className="mx-auto h-full w-full max-w-[320px] text-left bg-white rounded-xl border p-4 sm:max-w-none sm:p-5 min-h-[320px] sm:min-h-[340px] flex flex-col justify-between transition-all shadow-sm cursor-pointer"
        style={{ borderColor: accentColor }}
      >
        {cardContent}
      </motion.button>
    );
  }

  if (href) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ boxShadow: "0 16px 32px rgba(15, 23, 42, 0.14)" }}
        className="mx-auto h-full w-full max-w-[320px] bg-white rounded-xl border p-4 sm:max-w-none sm:p-5 min-h-[320px] sm:min-h-[340px] flex flex-col justify-between transition-all shadow-sm cursor-pointer"
        style={{ borderColor: accentColor }}
      >
        {cardContent}
      </motion.a>
    );
  }

  return (
    <motion.div
      whileHover={{ boxShadow: "0 16px 32px rgba(15, 23, 42, 0.14)" }}
      className="mx-auto h-full w-full max-w-[320px] bg-white rounded-xl border p-4 sm:max-w-none sm:p-5 min-h-[320px] sm:min-h-[340px] flex flex-col justify-between transition-all shadow-sm"
      style={{ borderColor: accentColor }}
    >
      {cardContent}
    </motion.div>
  );
}
