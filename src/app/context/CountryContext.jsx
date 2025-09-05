"use client";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

const CountryContext = createContext(null);

const DEFAULT_CODE = "TR";
const COOKIE_NAME = "country";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365; // 1 yıl

// Ülke -> locale haritası
export const COUNTRY_TO_LOCALE = {
  TR: "tr",
  US: "en",
  DE: "de",
  FR: "fr",
  ES: "es",
  RU: "ru",
};

export function CountryProvider({ children }) {
  const [country, setCountry] = useState(DEFAULT_CODE);

  // ilk yükleme: cookie → localStorage → default
  useEffect(() => {
    try {
      const fromStorage =
        typeof window !== "undefined" ? localStorage.getItem(COOKIE_NAME) : null;
      const fromCookie =
        typeof document !== "undefined"
          ? document.cookie
              .split("; ")
              .find((r) => r.startsWith(`${COOKIE_NAME}=`))
              ?.split("=")[1]
          : null;

      const initial = fromCookie || fromStorage || DEFAULT_CODE;
      setCountry(initial);
    } catch (_) {}
  }, []);

  // locale'i ülkeye göre hesapla
  const locale = useMemo(
    () => COUNTRY_TO_LOCALE[country] || "en",
    [country]
  );

  // değişimi kalıcı yaz + html[lang] güncelle + sekmeler arası senkron
  useEffect(() => {
    if (!country) return;
    try {
      // localStorage
      localStorage.setItem(COOKIE_NAME, country);
      // cookie (client-side)
      const expires = new Date(
        Date.now() + COOKIE_MAX_AGE * 1000
      ).toUTCString();
      document.cookie = `${COOKIE_NAME}=${country}; Path=/; Expires=${expires}; SameSite=Lax`;
      // html lang
      document.documentElement.setAttribute("lang", locale);
      // diğer sekmelere sinyal
      window.dispatchEvent(
        new StorageEvent("storage", { key: COOKIE_NAME, newValue: country })
      );
    } catch (_) {}
  }, [country, locale]);

  const value = useMemo(
    () => ({
      country,
      setCountry,
      locale, // ⬅️ tüketiciler buradan dili alacak
    }),
    [country, locale]
  );

  return (
    <CountryContext.Provider value={value}>{children}</CountryContext.Provider>
  );
}

export function useCountry() {
  const ctx = useContext(CountryContext);
  if (!ctx) throw new Error("useCountry must be used within CountryProvider");
  return ctx;
}
