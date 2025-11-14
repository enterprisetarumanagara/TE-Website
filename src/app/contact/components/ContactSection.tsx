"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const ContactSection = () => {
  const { t } = useLanguage();

  return (
    <section className="px-5 md:px-8 lg:px-10 py-10 md:py-16">
      <div className="mx-auto max-w-6xl">
        {/* TITLE */}
        <header className="mb-8">
          <h1 className="text-[28px] md:text-[36px] lg:text-[40px] font-semibold leading-tight">
            {t("contact.headingLine1")}
            <br />
            {t("contact.headingLine2")}
          </h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] gap-8 md:gap-10 items-start">
          <div className="w-full">
            <div className="relative w-full h-[260px] sm:h-[320px] md:h-[360px] lg:h-[400px] rounded-[20px] overflow-hidden bg-neutral-200">
              <iframe
                title="Tarumanagara Enterprise Location"
                src={
                  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7933.426114215297!2d106.78900409020073!3d-6.1691643282948565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f65c8572640d%3A0xc0a066d78372614e!2sUniversitas%20Tarumanagara!5e0!3m2!1sid!2sid!4v1763101373076!5m2!1sid!2sid"
                }
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>

          <div className="flex flex-col gap-4 text-sm md:text-base text-neutral-900">
            <div className="flex items-start gap-3">
              <Image
                src="/logos/TE-Logo.svg"
                alt="Tarumanagara Enterprise Logo"
                width={64}
                height={64}
                className="h-12 w-auto"
              />
            </div>

            <div className="mt-2">
              <p className="font-medium">
                {t("contact.campusLine1")}
              </p>
            </div>

            <div>
              <p>
                {t("contact.addressLine1")}
                <br />
                {t("contact.addressLine2")}
                <br />
                {t("contact.addressLine3")}
              </p>
            </div>

            <div className="mt-2">
              <p>{t("contact.phone")}</p>
            </div>

            <div className="mt-2">
              <p className="font-semibold">{t("contact.hoursLabel")}</p>
              <p>{t("contact.hoursValue")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
