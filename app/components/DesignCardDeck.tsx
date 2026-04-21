"use client";

import { motion, PanInfo } from "framer-motion";
import Image from "next/image";
import { useMemo, useState } from "react";
import type { DesignDeckCard } from "../data/projects";

export default function DesignCardDeck({
  cards,
  accent,
}: {
  cards: DesignDeckCard[];
  accent: string;
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  const visibleCards = useMemo(() => {
    return cards.map((card, index) => {
      const offset = (index - activeIndex + cards.length) % cards.length;
      return { card, index, offset };
    });
  }, [activeIndex, cards]);

  const goNext = () => {
    setActiveIndex((current) => (current + 1) % cards.length);
  };

  const goPrev = () => {
    setActiveIndex((current) => (current - 1 + cards.length) % cards.length);
  };

  const handleDragEnd = (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (info.offset.x < -80) {
      goNext();
      return;
    }

    if (info.offset.x > 80) {
      goPrev();
    }
  };

  const handleCardClick = (index: number, isActive: boolean) => {
    if (isActive) {
      goNext();
      return;
    }

    setActiveIndex(index);
  };

  return (
    <div className="w-full">
      <div className="relative h-[320px] sm:h-[410px] md:h-[450px] lg:h-[480px]">
        {visibleCards
          .sort((first, second) => second.offset - first.offset)
          .map(({ card, index, offset }) => {
            const isActive = offset === 0;
            const isVisible = offset < 3;

            if (!isVisible) {
              return null;
            }

            return (
              <motion.div
                key={`${card.title}-${index}`}
                drag={isActive ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={handleDragEnd}
                onClick={() => handleCardClick(index, isActive)}
                whileTap={{ scale: isActive ? 0.98 : 0.96 }}
                animate={{
                  x: offset * 16,
                  y: offset * 10,
                  rotate: offset * 2.5,
                  scale: 1 - offset * 0.06,
                }}
                transition={{ type: "spring", stiffness: 260, damping: 26 }}
                className={`absolute left-1/2 top-0 w-[205px] sm:w-[255px] md:w-[280px] lg:w-[300px] -translate-x-1/2 ${
                  isActive
                    ? "cursor-grab active:cursor-grabbing"
                    : "cursor-pointer"
                }`}
                style={{ zIndex: cards.length - offset }}
              >
                <div
                  className="rounded-[18px] sm:rounded-[20px] border-2 bg-white p-2.5 sm:p-3 shadow-[0_18px_40px_rgba(15,23,42,0.16)] sm:shadow-[0_24px_60px_rgba(15,23,42,0.16)]"
                  style={{ borderColor: accent }}
                >
                  <div className="relative overflow-hidden rounded-[12px] sm:rounded-[14px] bg-[#EEF4FF] aspect-[3/4]">
                    {card.image ? (
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center px-6 text-center">
                        <div>
                          <p
                            className="text-lg font-bold"
                            style={{ color: accent }}
                          >
                            {card.title}
                          </p>
                          {card.subtitle && (
                            <p className="mt-2 text-sm text-slate-600">
                              {card.subtitle}
                            </p>
                          )}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="px-1.5 sm:px-2 pt-3 sm:pt-3.5 pb-1 sm:pb-1.5">
                    {card.subtitle && (
                      <p className="text-xs sm:text-sm font-semibold text-slate-700">
                        {card.subtitle}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
      </div>

      <div className="mt-4 sm:mt-5 flex items-center justify-center gap-2 sm:gap-4">
        <button
          onClick={goPrev}
          className="rounded-full border px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold transition hover:bg-white"
          style={{ borderColor: accent, color: accent }}
        >
          Prev
        </button>
        <div className="flex items-center gap-2">
          {cards.map((_, index) => (
            <span
              key={index}
              className="h-2.5 w-2.5 rounded-full transition-all"
              style={{
                backgroundColor: index === activeIndex ? accent : `${accent}40`,
                transform: index === activeIndex ? "scale(1.15)" : "scale(1)",
              }}
            />
          ))}
        </div>
        <button
          onClick={goNext}
          className="rounded-full border px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold transition hover:bg-white"
          style={{ borderColor: accent, color: accent }}
        >
          Next
        </button>
      </div>
    </div>
  );
}
