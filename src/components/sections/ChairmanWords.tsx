"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const ChairmanMessage = () => {
  const { t } = useLanguage();

  return (
    <section className="px-5 md:px-8 lg:px-10 py-10 md:py-16">
      <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="relative w-full h-[260px] sm:h-[300px] md:h-[340px] lg:h-[380px]">
          <div className="relative w-full h-full rounded-[32px] bg-neutral-200 overflow-hidden">
            <Image
              src="/leaders/datadummy1.jpeg"
              alt={t("chairman.alt")}
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="text-sm md:text-base leading-relaxed text-neutral-800">
          <div className="space-y-4 text-justify">
            <p>{t("chairman.paragraph1")}</p>
            <p>{t("chairman.paragraph2")}</p>
            <p>{t("chairman.paragraph3")}</p>
          </div>

          <div className="mt-6">
            <p className="text-[11px] md:text-xs font-semibold text-neutral-700 underline">
              {t("chairman.role")}
            </p>
            <p className="text-sm md:text-base font-semibold mt-1">
              {t("chairman.name")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChairmanMessage;
