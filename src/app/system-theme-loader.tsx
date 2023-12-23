"use client";

import { handleSystemTheme } from "@/utils/themes";
import React from "react";

export default function SystemThemeLoader({ theme }: { theme: string }) {
  React.useEffect(() => {
    if (theme === "system") {
      handleSystemTheme(true);
    }
  }, []);

  return null;
}
