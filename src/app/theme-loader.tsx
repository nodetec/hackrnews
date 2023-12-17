"use client";

import { getCookie } from "@/utils/fns/cookies";
import { handleThemeToggle } from "@/utils/hooks/theme";
import React from "react";

export default function ThemeLoader() {

  React.useEffect(() => {
    const themeCookie = getCookie("theme");
    if (!themeCookie || themeCookie === "system") {
      handleThemeToggle("system");
    }
  }, []);

  return null;
}
