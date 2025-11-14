"use client";

import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

type EventCard = {
  id: string;
  image: string;
  orgKey: string;
  titleKey: string;
  dateDayKey: string;
  dateMonthKey: string;
  categoriesKeys: string[];
};

const EVENTS: EventCard[] = [
  {
    id: "ceo-bootcamp-2025",
    image: "/events/dummy1.jpeg",
    orgKey: "eventsPage.ceoBootcamp.org",
    titleKey: "eventsPage.ceoBootcamp.title",
    dateDayKey: "eventsPage.ceoBootcamp.dateDay",
    dateMonthKey: "eventsPage.ceoBootcamp.dateMonth",
    categoriesKeys: [
      "eventsPage.categories.catA",
      "eventsPage.categories.catB",
      "eventsPage.categories.catC",
    ],
  },
  {
    id: "immersion-2025",
    image: "/events/dummy2.jpeg",
    orgKey: "eventsPage.immersion.org",
    titleKey: "eventsPage.immersion.title",
    dateDayKey: "eventsPage.immersion.dateDay",
    dateMonthKey: "eventsPage.immersion.dateMonth",
    categoriesKeys: [
      "eventsPage.categories.catA",
      "eventsPage.categories.catD",
    ],
  },
  {
    id: "event-tourist-2025",
    image: "/events/dummy3.jpeg",
    orgKey: "eventsPage.eventTour.org",
    titleKey: "eventsPage.eventTour.title",
    dateDayKey: "eventsPage.eventTour.dateDay",
    dateMonthKey: "eventsPage.eventTour.dateMonth",
    categoriesKeys: [
      "eventsPage.categories.catE",
      "eventsPage.categories.catF",
    ],
  },
];

const EventsPageCarousel = () => {
  const { t } = useLanguage();
  const [index, setIndex] = useState(0);

  const current = EVENTS[index];

  const prev = () => {
    setIndex((prev) => (prev - 1 + EVENTS.length) % EVENTS.length);
  };

  const next = () => {
    setIndex((prev) => (prev + 1) % EVENTS.length);
  };

  return (
    <section className="px-5 md:px-8 lg:px-10 py-10 md:py-16">
      <div className="mx-auto max-w-6xl">
        <header className="mb-6 md:mb-8">
          <h1 className="text-[28px] md:text-[36px] lg:text-[40px] font-semibold leading-tight">
            {t("eventsPage.heading")}
          </h1>
        </header>

        <div className="relative">
          <div className="relative w-full h-[220px] sm:h-[280px] md:h-[340px] lg:h-[380px] overflow-hidden rounded-[24px] bg-neutral-200 shadow-[0_18px_40px_rgba(0,0,0,0.25)]">
            <div
              className="flex h-full transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {EVENTS.map((ev) => (
                <div key={ev.id} className="relative min-w-full h-full">
                  <Image
                    src={ev.image}
                    alt={t(ev.titleKey)}
                    fill
                    className="object-cover"
                    priority={ev.id === current.id}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
                </div>
              ))}
            </div>

            <div className="absolute top-4 right-4">
              <div className="rounded-xl bg-white/90 px-3 py-2 text-center shadow">
                <p className="text-sm md:text-base font-semibold leading-none">
                  {t(current.dateDayKey)}
                </p>
                <p className="mt-1 text-[10px] md:text-xs uppercase tracking-wide text-neutral-600">
                  {t(current.dateMonthKey)}
                </p>
              </div>
            </div>

            <div className="pointer-events-none absolute inset-x-0 bottom-0 p-4 sm:p-6 lg:p-8 text-white">
              <p className="text-xs sm:text-[11px] font-medium opacity-85">
                {t(current.orgKey)}
              </p>
              <h2 className="mt-2 text-lg sm:text-xl lg:text-2xl font-semibold">
                {t(current.titleKey)}
              </h2>

              <div className="mt-3 flex flex-wrap gap-2">
                {current.categoriesKeys.map((ckey) => (
                  <span
                    key={ckey}
                    className="pointer-events-auto inline-flex items-center rounded-full border border-white/70 bg-black/25 px-3 py-1 text-[10px] sm:text-xs font-medium"
                  >
                    {t(ckey)}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={prev}
            className="
              hidden sm:flex
              absolute top-1/2 -left-6 -translate-y-1/2
              h-11 w-11 items-center justify-center
              rounded-full border border-neutral-300
              bg-white/90 shadow-md
              hover:bg-neutral-100 transition-colors
            "
            aria-label="Previous event"
          >
            <span className="text-lg">←</span>
          </button>

          <button
            type="button"
            onClick={next}
            className="
              hidden sm:flex
              absolute top-1/2 -right-6 -translate-y-1/2
              h-11 w-11 items-center justify-center
              rounded-full border border-neutral-300
              bg-white/90 shadow-md
              hover:bg-neutral-100 transition-colors
            "
            aria-label="Next event"
          >
            <span className="text-lg">→</span>
          </button>

          <div className="mt-4 flex justify-center gap-2">
            {EVENTS.map((ev, i) => (
              <button
                key={ev.id}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2 w-2 rounded-full transition-all ${
                  i === index
                    ? "bg-neutral-900 w-5"
                    : "bg-neutral-400 hover:bg-neutral-600"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsPageCarousel;
