"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";

type EventItem = {
  id: string;
  image: string;
  titleKey: string;
  dateKey: string;
};

const events: EventItem[] = [
  {
    id: "ceo-bootcamp-batch-3",
    image: "/events/dummy1.jpeg",
    titleKey: "events.ceoBootcampBatch3.title",
    dateKey: "events.ceoBootcampBatch3.date",
  },
  {
    id: "immersion-2025",
    image: "/events/dummy2.jpeg",
    titleKey: "events.immersion2025.title",
    dateKey: "events.immersion2025.date",
  },
  {
    id: "event-tourist-2025",
    image: "/events/dummy3.jpeg",
    titleKey: "events.eventTourist2025.title",
    dateKey: "events.eventTourist2025.date",
  },
];

const UpcomingEvents = () => {
  const { t } = useLanguage();
  const [index, setIndex] = useState(0);

  const current = events[index];

  const prev = () => {
    setIndex((prev) => (prev - 1 + events.length) % events.length);
  };

  const next = () => {
    setIndex((prev) => (prev + 1) % events.length);
  };

  const headerRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="px-5 md:px-8 lg:px-10 py-10 md:py-14">
      <div className="mx-auto max-w-5xl flex flex-col items-center">

        <header ref={headerRef} className="mb-6 md:mb-8 text-center">
          <div className="flex items-center justify-center gap-4 md:gap-6">

            <span
              className={`
                hidden sm:block h-[2px] w-10 md:w-16 lg:w-24 bg-neutral-300 
                transition-all duration-700
                ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}
              `}
            />

            <h2 className="text-[32px] md:text-[36px] lg:text-[40px] font-semibold">
              {t("events.headingMain")}
            </h2>

            <span
              className={`
                hidden sm:block h-[2px] w-10 md:w-16 lg:w-24 bg-neutral-300 
                transition-all duration-700
                ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}
              `}
            />
          </div>

          <p className="mt-1 text-sm md:text-base lg:text-lg text-neutral-600">
            {t("events.subheading")}
          </p>
        </header>

        <div className="w-full relative">
          <div className="relative w-full h-[220px] sm:h-[260px] md:h-[320px] lg:h-[360px] overflow-hidden rounded-[20px] bg-neutral-200">
            <div
              className="flex h-full transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {events.map((ev) => (
                <div key={ev.id} className="relative min-w-full h-full">
                  <Image
                    src={ev.image}
                    alt={t(ev.titleKey)}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prev}
            className="hidden sm:flex absolute top-1/2 -left-6 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full border border-neutral-300 bg-white shadow-md hover:bg-neutral-100 transition-colors"
          >
            ←
          </button>

          <button
            onClick={next}
            className="hidden sm:flex absolute top-1/2 -right-6 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full border border-neutral-300 bg-white shadow-md hover:bg-neutral-100 transition-colors"
          >
            →
          </button>
        </div>

        <div className="mt-5 text-center">
          <h3 className="text-base md:text-lg font-semibold">
            {t(current.titleKey)}
          </h3>
          <p className="mt-1 text-xs md:text-sm text-neutral-600">
            {t(current.dateKey)}
          </p>
        </div>

        <Link
          href="/event"
          className="mt-6 inline-flex items-center rounded-full border border-neutral-300 px-5 py-2 text-xs md:text-sm font-semibold hover:bg-neutral-100 transition-colors"
        >
          {t("events.seeAll")}
        </Link>
      </div>
    </section>
  );
};

export default UpcomingEvents;
