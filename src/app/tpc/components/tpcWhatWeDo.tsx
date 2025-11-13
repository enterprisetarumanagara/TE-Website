"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const WhatWeDo = () => {
    const { t } = useLanguage();

    return (
        <section className="px-5 md:px-8 lg:px-10">
            <div className="mx-auto max-w-6xl">
                <header className="mb-8 md:mb-10">
                    <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-semibold">
                        {t("TPCwhatWeDo.headingMain")}
                    </h2>
                    <p className="mt-1 text-lg md:text-xl lg:text-[24px] text-neutral-600">
                        {t("TPCwhatWeDo.subheading")}
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">

                    <article className="flex flex-col">
                        <div className="w-full h-[260px] md:h-[390px] lg:h-[660px] overflow-hidden rounded-sm bg-neutral-200 mb-4 relative">
                            <Image
                                src="/whatwedo/datadummy1.jpeg"
                                alt="Immersion"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <h3 className="text-lg font-semibold mb-2">
                            {t("TPCwhatWeDo.tpcEvent1.title")}
                        </h3>

                        <p className="text-xs md:text-sm text-neutral-700 leading-relaxed mb-3 text-justify">
                            {t("TPCwhatWeDo.tpcEvent1.description")}
                        </p>

                        <div className="flex justify-end">
                            <button className="inline-flex items-center rounded-full border border-neutral-300 px-4 py-1.5 text-xs md:text-sm font-semibold hover:bg-neutral-100 transition-colors">
                                {t("TPCwhatWeDo.seeMore")}
                            </button>
                        </div>
                    </article>

                    <article className="flex flex-col lg:mt-15">
                        <div className="w-full h-[260px] md:h-[390px] lg:h-[660px] overflow-hidden rounded-sm bg-neutral-200 mb-4 relative">
                            <Image
                                src="/whatwedo/datadummy2.jpeg"
                                alt="CEO Bootcamp"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <h3 className="text-lg font-semibold mb-2">
                            {t("TPCwhatWeDo.tpcEvent2.title")}
                        </h3>

                        <p className="text-xs md:text-sm text-neutral-700 leading-relaxed mb-3 text-justify">
                            {t("TPCwhatWeDo.tpcEvent2.description")}
                        </p>

                        <div className="flex justify-end">
                            <button className="inline-flex items-center rounded-full border border-neutral-300 px-4 py-1.5 text-xs md:text-sm font-semibold hover:bg-neutral-100 transition-colors">
                                {t("TPCwhatWeDo.seeMore")}
                            </button>
                        </div>
                    </article>

                    <article className="flex flex-col">
                        <div className="w-full h-[260px] md:h-[390px] lg:h-[660px] overflow-hidden rounded-sm bg-neutral-200 mb-4 relative">
                            <Image
                                src="/whatwedo/datadummy3.jpeg"
                                alt="Event Tourist"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <h3 className="text-lg font-semibold mb-2">
                            {t("TPCwhatWeDo.tpcEvent3.title")}
                        </h3>

                        <p className="text-xs md:text-sm text-neutral-700 leading-relaxed mb-3 text-justify">
                            {t("TPCwhatWeDo.tpcEvent3.description")}
                        </p>

                        <div className="flex justify-end">
                            <button className="inline-flex items-center rounded-full border border-neutral-300 px-4 py-1.5 text-xs md:text-sm font-semibold hover:bg-neutral-100 transition-colors">
                                {t("TPCwhatWeDo.seeMore")}
                            </button>
                        </div>
                    </article>  

                </div>
            </div>
        </section>
    );
};

export default WhatWeDo;
