"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

import en from "@/lang/en.json";
import id from "@/lang/id.json";

type Language = "id" | "en";
type Messages = typeof en;

type LanguageContextValue = {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined
);

const DICTIONARIES: Record<Language, Messages> = {
  en,
  id,
};

function getInitialLanguage(): Language {
  if (typeof window === "undefined") return "id";
  const saved = window.localStorage.getItem("language");
  return saved === "en" || saved === "id" ? saved : "id";
}

export const LanguageProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => getInitialLanguage());

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("language", language);
    }
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "id" ? "en" : "id"));
  };

  const t = (key: string): string => {
    const segments = key.split(".");
    let current: unknown = DICTIONARIES[language];

    for (const segment of segments) {
      if (
        typeof current === "object" &&
        current !== null &&
        segment in (current as Record<string, unknown>)
      ) {
        current = (current as Record<string, unknown>)[segment];
      } else {
        return key;
      }
    }

    return typeof current === "string" ? current : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
};
