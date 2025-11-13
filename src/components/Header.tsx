"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";

const Header: React.FC = () => {
  const pathname = usePathname();
  const { language, toggleLanguage, t } = useLanguage();

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

        <button
          onClick={toggleLanguage}
          className="inline-flex items-center gap-2 rounded-lg border border-neutral-300 px-3 py-1 text-xs font-semibold hover:bg-neutral-100 transition-colors"
        >
          <Image
            src={language === "id" ? "/flags/id.svg" : "/flags/us.svg"}
            alt={language === "id" ? "Indonesian Flag" : "American Flag"}
            width={20}
            height={20}
            className="rounded-sm object-cover"
          />

          <span className="text-black font-semibold">
            {language === "id"
              ? t("language.ina")
              : t("language.eng")}
          </span>
        </button>
      </div>
    </header>
  );
};

export default Header;
