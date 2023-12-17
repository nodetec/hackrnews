import React from "react";
import { themes } from "@utils/themes";
import { addCookie, getCookie } from "@utils/fns/cookies";

export function useTheme() {
  const [theme, setTheme] = React.useState(themes[0]);

  React.useEffect(() => {
    const themeCookie = getCookie("theme");
    setTheme(themes.find((t) => t.name === themeCookie) || themes[0]);
  }, [setTheme]);

  const toggleTheme = (themeName: string) => {
    setTheme(themes.find((t) => t.name === themeName) || themes[0]);
    handleThemeToggle(themeName);
  };

  return { theme, toggleTheme };
}

function handleThemeToggle(theme: string) {
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
