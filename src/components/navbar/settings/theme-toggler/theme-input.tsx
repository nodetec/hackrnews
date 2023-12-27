"use client";

import { setPreferenceCookie } from "@/utils/actions/user-preferences";
import { handleSystemTheme } from "@/utils/themes";
import React from "react";

export default function ThemeInput({
  themeName,
  currTheme,
}: {
  themeName: string;
  currTheme: string;
}) {
  const [pending, startTransition] = React.useTransition();
  console.log(currTheme, themeName);

  const setTheme = async (theme: string) => {
    startTransition(() => {
      setPreferenceCookie("theme", theme);
    });
  };

  React.useEffect(() => {
    if (currTheme === "system" && !pending) {
      handleSystemTheme(true);
    }

    handleSystemTheme(false);
  }, [currTheme, pending]);

  return (
    <input
      onChange={async () => {
        setTheme(themeName);
      }}
      checked={currTheme === themeName}
      className="appearance-none"
      type="radio"
      id={themeName}
      name="theme"
      value={themeName}
    />
  );
}
