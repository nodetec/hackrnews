"use client";
import { getCookie } from "./cookieHandlers";

function addThemeOnChange() {
  if (typeof document === "undefined") return;
  let theme = getCookie("theme");
  const htmlEl = document.documentElement;
  if (theme === "system") {
    const darkMedia = window.matchMedia("(prefers-color-scheme: dark)");
    theme = darkMedia.matches ? 'dark' : 'light';
    htmlEl.className = theme;
  }
}

export function themeResolver(theme: string) {
  if (typeof window === "undefined" || typeof document === "undefined") return;
  const htmlEl = document.documentElement;
  if (theme === 'system') {
    window.matchMedia("(prefers-color-scheme: dark)").onchange = addThemeOnChange;
    const darkMedia = window.matchMedia("(prefers-color-scheme: dark)");
    theme = darkMedia.matches ? 'dark' : 'light';
  }
  htmlEl.className = theme;
}
