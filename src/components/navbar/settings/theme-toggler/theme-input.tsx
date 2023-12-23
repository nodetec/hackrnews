"use client";

import { setPreferenceCookie } from "@/utils/actions/user-preferences";
import React from "react";

export default function ThemeInput({
  themeName,
  currentTheme,
}: {
  themeName: string;
  currentTheme: string;
}) {
  return (
    <input
      onChange={async () => {
        setPreferenceCookie("theme", themeName);
      }}
      checked={currentTheme === themeName}
      className="appearance-none"
      type="radio"
      id={themeName}
      name="theme"
      value={themeName}
    />
  );
}
