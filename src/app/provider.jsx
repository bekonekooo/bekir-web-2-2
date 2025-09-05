"use client";
import { CountryProvider } from "./context/CountryContext";

export default function Providers({ children }) {
  return <CountryProvider>{children}</CountryProvider>;
}