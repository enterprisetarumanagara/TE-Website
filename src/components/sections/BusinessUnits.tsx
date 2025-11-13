"use client";

import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

type BusinessUnit = {
  id: string;
  image: string;
  titleKey: string;
  descriptionKey: string;
};

const units: BusinessUnit[] = [
  {
    id: "unit1",
    image: "/businessunits/dummy1.jpeg",
    titleKey: "units.unit1.title",
    descriptionKey: "units.unit1.description",
  },
  {
    id: "unit2",
    image: "/businessunits/dummy2.jpeg",
    titleKey: "units.unit2.title",
    descriptionKey: "units.unit2.description",
  },
  {
    id: "unit3",
    image: "/businessunits/dummy3.jpeg",
    titleKey: "units.unit3.title",
    descriptionKey: "units.unit3.description",
  },
{
    id: "unit4",
    image: "/businessunits/dummy4.jpeg",
    titleKey: "units.unit3.title",
    descriptionKey: "units.unit3.description",
  },
{
    id: "unit5",
    image: "/businessunits/dummy5.jpeg",
    titleKey: "units.unit3.title",
    descriptionKey: "units.unit3.description",
  },
];

const BusinessUnits = () => {
  const { t } = useLanguage();
  const [index, setIndex] = useState(0);

  const current = units[index];

  const next = () => {
    setIndex((prev) => (prev + 1) % units.length);
  };

  return (
    <section className="px-5 md:px-8 lg:px-10 py-10 md:py-14 bg-neutral-100">
      <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div>
          <h2 className="text-[28px] md:text-[32px] lg:text-[36px] font-semibold mb-3">
            {t("units.headingMain")}
          </h2>
          <p className="text-sm md:text-base text-neutral-700 leading-relaxed">
            {t("units.subheading")}
          </p>
        </div>

        <div className="flex flex-col">
          <div className="relative w-full h-[180px] sm:h-[210px] md:h-[230px] lg:h-[260px]">
            <div className="relative w-full h-full overflow-hidden rounded-[20px] bg-black shadow-[0_10px_24px_rgba(0,0,0,0.18)]">
              <Image
                src={current.image}
                alt={t(current.titleKey)}
                fill
                className="object-cover"
              />
            </div>

            <button
              type="button"
              onClick={next}
              aria-label="Next unit"
              className="absolute top-1/2 -translate-y-1/2 -right-4 h-10 w-10 rounded-full flex items-center justify-center bg-white border border-neutral-300 shadow-md hover:bg-neutral-100 transition-colors">
              <span className="text-base">→</span>
            </button>
          </div>

          <div className="mt-4">
            <h3 className="text-base md:text-lg font-semibold mb-2">
              {t(current.titleKey)}
            </h3>
            <p className="text-xs md:text-sm text-neutral-700 leading-relaxed text-justify">
              {t(current.descriptionKey)}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessUnits;
