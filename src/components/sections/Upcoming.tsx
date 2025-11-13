"use client";

import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

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

    return (
        <section className="px-5 md:px-8 lg:px-10 pt-4 pb-16 md:pb-20 py-10 md:py-10 lg:py-15">
            <div className="mx-auto max-w-5xl flex flex-col items-center">
                <header className="mb-6 md:mb-8 text-center">
                    <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-semibold">
                        {t("events.headingMain")}
                    </h2>
                    <p className="mt-1 text-lg md:text-xl lg:text-[24px] text-neutral-600">
                        {t("events.subheading")}
                    </p>
                </header>

                <div className="w-full relative">
                    <div
                        className="relative w-full h-[220px] sm:h-[260px] md:h-[320px] lg:h-[360px] overflow-hidden rounded-[20px] bg-neutral-200">
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
                        type="button"
                        onClick={prev}
                        className="hidden sm:flex absolute top-1/2 -left-6 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full border border-neutral-300 bg-white shadow-md hover:bg-neutral-100 transition-colors"
                        aria-label="Previous event">
                        <span className="text-lg">←</span>
                    </button>

                    <button
                        type="button"
                        onClick={next}
                        className="hidden sm:flex absolute top-1/2 -right-6 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full border border-neutral-300 bg-white shadow-md hover:bg-neutral-100 transition-colors"
                        aria-label="Next event">
                        <span className="text-lg">→</span>
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

                <button className="mt-6 inline-flex items-center rounded-full border border-neutral-300 px-5 py-2 text-xs md:text-sm font-semibold hover:bg-neutral-100 transition-colors">
                    {t("events.seeAll")}
                </button>
            </div>
        </section>
    );
};

export default UpcomingEvents;
