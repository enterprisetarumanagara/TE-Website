"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";

const Header: React.FC = () => {
  const pathname = usePathname();
  const { language, toggleLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "/", key: "nav.home" },
    { href: "/about", key: "nav.about" },
    { href: "/event", key: "nav.events" },
    { href: "/contact", key: "nav.contact" },
    { href: "/tpc", key: "nav.tpc" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-30 bg-white/100 border-b border-neutral-200">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logos/TE-Logo.svg"
            alt="Tarumanagara Enterprise Logo"
            width={90}
            height={200}
            className="h-8 w-auto"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={
                "transition-colors" +
                (isActive(item.href)
                  ? " font-semibold text-black"
                  : " text-neutral-500 hover:text-black")
              }
            >
              {t(item.key)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleLanguage}
            className="
              inline-flex items-center gap-1.5 rounded-lg border border-neutral-300
              px-2 py-1 text-[11px] font-semibold hover:bg-neutral-100 transition-colors
              md:px-3 md:py-1 md:text-xs
            "
          >
            <Image
              src={language === "id" ? "/flags/id.svg" : "/flags/us.svg"}
              alt={language === "id" ? "Indonesian Flag" : "American Flag"}
              width={20}
              height={20}
              className="h-4 w-4 md:h-5 md:w-5 rounded-sm object-cover"
            />

            <span className="text-black font-semibold">
              {language === "id" ? t("language.ina") : t("language.eng")}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="md:hidden inline-flex items-center justify-center rounded-md border border-neutral-300 p-1.5 hover:bg-neutral-100 transition-colors"
            aria-label="Toggle navigation"
          >
            <span className="flex flex-col gap-[3px]">
              <span className="block h-[2px] w-4 bg-neutral-900" />
              <span className="block h-[2px] w-4 bg-neutral-900" />
              <span className="block h-[2px] w-4 bg-neutral-900" />
            </span>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t border-neutral-200 bg-white">
          <nav className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-2 text-sm">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={
                  "py-1.5 transition-colors" +
                  (isActive(item.href)
                    ? " font-semibold text-black"
                    : " text-neutral-600 hover:text-black")
                }
                onClick={() => setIsMenuOpen(false)}
              >
                {t(item.key)}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
