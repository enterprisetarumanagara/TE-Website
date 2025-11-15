"use client";

import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import EventModal from "../../tpc/components/tpcEventMore";

type GridEvent = {
  id: string;
  image: string;
  orgKey: string;
  titleKey: string;
  dateDayKey: string;
  dateMonthKey: string;
  categoriesKeys: string[];
  descriptionKey: string; 
  detailKey: string;      
  detailImage: string;    
};

const BASE_EVENTS: GridEvent[] = [
  {
    id: "ceo-bootcamp-2025",
    image: "/events/dummy1.jpeg",
    orgKey: "eventsPage.ceoBootcamp.org",
    titleKey: "eventsPage.ceoBootcamp.title",
    dateDayKey: "eventsPage.ceoBootcamp.dateDay",
    dateMonthKey: "eventsPage.ceoBootcamp.dateMonth",
    descriptionKey: "eventsPage.ceoBootcamp.description",
    detailKey: "eventsPage.ceoBootcamp.detail",
    detailImage: "/events/dummy1.jpeg",
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
    descriptionKey: "eventsPage.immersion.description",
    detailKey: "eventsPage.immersion.detail",
    detailImage: "/events/dummy2.jpeg",
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
    descriptionKey: "eventsPage.eventTour.description",
    detailKey: "eventsPage.eventTour.detail",
    detailImage: "/events/dummy3.jpeg",
    categoriesKeys: [
      "eventsPage.categories.catE",
      "eventsPage.categories.catF",
    ],
  },
];

const ALL_EVENTS: GridEvent[] = BASE_EVENTS;

const EVENTS_PER_PAGE = 6; 

const AllEvents = () => {
  const { t } = useLanguage();

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedEvent, setSelectedEvent] = useState<GridEvent | null>(null);

  const isModalOpen = selectedEvent !== null;

  const totalPages = Math.max(
    1,
    Math.ceil(ALL_EVENTS.length / EVENTS_PER_PAGE)
  );

  const startIndex = (currentPage - 1) * EVENTS_PER_PAGE;
  const currentEvents = ALL_EVENTS.slice(
    startIndex,
    startIndex + EVENTS_PER_PAGE
  );

  const goToPage = (page: number) => {
    const safe = Math.min(Math.max(page, 1), totalPages);
    setCurrentPage(safe);
  };

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const prevPage = currentPage > 1 ? currentPage - 1 : null;
  const nextPage = currentPage < totalPages ? currentPage + 1 : null;

  const openModal = (event: GridEvent) => {
    setSelectedEvent(event);
  };

  const closeModal = () => {
    setSelectedEvent(null);
  };

  return (
    <section className="px-5 md:px-8 lg:px-10 pb-12 md:pb-16">
      <div className="mx-auto max-w-6xl">
        <header className="mb-6 md:mb-8 text-center">
          <h2 className="text-[22px] md:text-[26px] lg:text-[28px] font-semibold">
            {t("eventsPage.allHeading")}
          </h2>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {currentEvents.map((ev) => (
            <article
              key={ev.id}
              className="flex flex-col overflow-hidden rounded-[18px] border border-neutral-200 bg-white shadow-sm"
            >
              <div className="relative h-[180px] sm:h-[190px] md:h-[200px] bg-neutral-200">
                <Image
                  src={ev.image}
                  alt={t(ev.titleKey)}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 right-3">
                  <div className="rounded-xl bg-white/95 px-2.5 py-1.5 text-center shadow">
                    <p className="text-xs font-semibold leading-none">
                      {t(ev.dateDayKey)}
                    </p>
                    <p className="mt-1 text-[10px] uppercase tracking-wide text-neutral-600">
                      {t(ev.dateMonthKey)}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-1 flex-col px-4 pt-3 pb-4">
                <p className="text-[11px] font-medium text-neutral-600">
                  {t(ev.orgKey)}
                </p>
                <h3 className="mt-1 text-sm md:text-[15px] font-semibold">
                  {t(ev.titleKey)}
                </h3>

                <div className="mt-2 flex flex-wrap gap-1.5">
                  {ev.categoriesKeys.map((ckey) => (
                    <span
                      key={ckey}
                      className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-[10px] text-neutral-700"
                    >
                      {t(ckey)}
                    </span>
                  ))}
                </div>

                <p className="mt-2 text-[11px] text-neutral-700 leading-relaxed line-clamp-3">
                  {t(ev.descriptionKey)}
                </p>

                <div className="mt-3">
                  <button
                    type="button"
                    onClick={() => openModal(ev)}
                    className="inline-flex items-center rounded-full border border-neutral-300 px-4 py-1.5 text-[11px] font-medium hover:bg-neutral-100 transition-colors"
                  >
                    {t("eventsPage.moreInfo")}
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 md:mt-8 flex flex-col items-center gap-3">
          <div className="flex sm:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="rounded-md border border-neutral-300 px-2 py-1 text-xs disabled:opacity-40"
            >
              {t("eventsPage.pagination.prev")}
            </button>
            <span className="text-xs">
              {t("eventsPage.pagination.pageCurrent")} {currentPage}{" "}
              {t("eventsPage.pagination.pageOf")} {totalPages}
            </span>
            <button
              type="button"
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="rounded-md border border-neutral-300 px-2 py-1 text-xs disabled:opacity-40"
            >
              {t("eventsPage.pagination.next")}
            </button>
          </div>

          <div className="hidden sm:flex lg:hidden items-center gap-1">
            {prevPage && (
              <button
                type="button"
                onClick={() => goToPage(prevPage)}
                className="h-8 min-w-[32px] rounded-md border border-neutral-300 px-2 text-xs hover:bg-neutral-100"
              >
                {prevPage}
              </button>
            )}
            <button
              type="button"
              className="h-8 min-w-[32px] rounded-md border border-neutral-900 bg-neutral-900 px-2 text-xs font-semibold text-white"
            >
              {currentPage}
            </button>
            {nextPage && (
              <button
                type="button"
                onClick={() => goToPage(nextPage)}
                className="h-8 min-w-[32px] rounded-md border border-neutral-300 px-2 text-xs hover:bg-neutral-100"
              >
                {nextPage}
              </button>
            )}
          </div>

          <div className="hidden lg:flex items-center gap-1">
            {pages.map((page) => (
              <button
                key={page}
                type="button"
                onClick={() => goToPage(page)}
                className={`h-8 min-w-[32px] rounded-md border px-2 text-xs transition-colors ${
                  page === currentPage
                    ? "border-neutral-900 bg-neutral-900 text-white font-semibold"
                    : "border-neutral-300 hover:bg-neutral-100"
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        </div>
      </div>

      <EventModal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={selectedEvent ? t(selectedEvent.titleKey) : ""}
        description={selectedEvent ? t(selectedEvent.detailKey) : ""}
        image={selectedEvent?.detailImage}
      />
    </section>
  );
};

export default AllEvents;
