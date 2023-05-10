"use client";

import { setCookie } from "./cookieHandlers";

function mediaListner(ev: MediaQueryListEvent) {
  if (typeof document === "undefined") return;
  const htmlEl = document.documentElement;
  const resolver = ev.matches ? "dark" : "light";
  htmlEl.className = resolver;
}

export function themeResolver(theme: string) {
  if (typeof document === "undefined") return;
  const htmlEl = document.documentElement;
  const darkMedia = window.matchMedia("(prefers-color-scheme: dark)");
  if (theme !== "system") {
    darkMedia.removeEventListener("change", mediaListner);
    htmlEl.className = theme;
  } else {
    const resolver = darkMedia.matches ? "dark" : "light";

    darkMedia.addEventListener("change", mediaListner);
    htmlEl.className = resolver;
  }
  setCookie("theme", theme);
}
