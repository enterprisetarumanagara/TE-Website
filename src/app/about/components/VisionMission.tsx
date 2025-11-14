"use client";

import { useLanguage } from "@/context/LanguageContext";

const VisionMission = () => {
  const { t } = useLanguage();

  const missionKeys = [
    "about.mission.item1",
    "about.mission.item2",
    "about.mission.item3",
  ];

  return (
    <section className="px-5 md:px-8 lg:px-10 py-10 md:py-16">
        <div className="mx-auto max-w-5xl">
            <div className="flex justify-center">
                <div className="text-center max-w-[700px] px-4">
                    <p className="text-sm md:text-base font-semibold underline">
                        {t("about.vision.title")}
                    </p>
                    <h2 className="mt-4 text-2xl md:text-3xl lg:text-[36px] leading-snug font-medium whitespace-pre-line">
                        {t("about.vision.heading")}
                    </h2>
                </div>
            </div>

            <div className="mt-10 border-t border-neutral-300" />
            <div className="mt-10 flex justify-center">
                <div className="text-center max-w-[700px] px-4">
                    <p className="text-sm md:text-base font-semibold underline">
                    {t("about.mission.title")}
                    </p>
                </div>
            </div>

            <div className="mt-6 flex flex-col md:flex-row gap-6 md:gap-0 md:divide-x md:divide-neutral-300">
            {missionKeys.map((key) => (
                <div
                key={key}
                className="flex-1 px-0 md:px-6 text-sm md:text-base leading-relaxed text-center"
                >
                <p>{t(key)}</p>
                </div>
            ))}
            </div>

        </div>
    </section>
  );
};

export default VisionMission;
