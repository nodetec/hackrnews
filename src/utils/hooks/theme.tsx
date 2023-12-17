"use client";

import React from "react";
import { addCookie, getCookie } from "@utils/fns/cookies";
import { themeStore } from "@/stores/theme";

export function useTheme() {
  const { theme, setTheme } = themeStore();

  React.useEffect(() => {
    const themeCookie = getCookie("theme") ?? "system";
    setTheme(themeCookie);
  }, [setTheme]);

  const toggleTheme = (themeName: string) => {
    setTheme(themeName);
    handleThemeToggle(themeName);
  };

  return { theme, toggleTheme };
}

export function handleThemeToggle(theme: string) {
  addCookie("theme", theme);

  const themeListener = (e: MediaQueryListEvent | MediaQueryList) => {
    if (e.matches) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

  switch (theme) {
    case "system":
      themeListener(prefersDark);
      prefersDark.addEventListener("change", themeListener);
      break;
    case "dark":
      prefersDark.removeEventListener("change", themeListener);
      document.documentElement.classList.add("dark");
      break;
    case "light":
      prefersDark.removeEventListener("change", themeListener);
      document.documentElement.classList.remove("dark");
      break;
  }
}
