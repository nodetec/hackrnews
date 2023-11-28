"use client";

import { addCookie } from "@/utils/cookies";
import React from "react";

export default function ThemeLoader() {
  const handleTheme = (theme: string) => {
    switch (theme) {
      case "system":
        if (
          window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
        ) {
          document.documentElement.classList.add("dark");
        }
        break;
      case "dark":
        document.documentElement.classList.add("dark");
        break;
      case "light":
        document.documentElement.classList.remove("dark");
        break;
    }

    addCookie("theme", theme);
    document.documentElement.dataset["mode"] = theme;
  };

  React.useEffect(() => {
    const html = document.documentElement;
    let mode = html.dataset["mode"];

    if (mode === "system") {
      handleTheme(mode);
    }

    document.addEventListener("change", (_) => {
      mode = html.dataset["mode"];
      handleTheme(mode ?? "system");
    });
  }, []);

  return null;
}
