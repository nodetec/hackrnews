import { LaptopIcon, MoonIcon, SunIcon } from "lucide-react";

export const themes = [
  {
    name: "system",
    icon: <LaptopIcon className="w-5 h-5" />,
  },
  {
    name: "light",
    icon: <SunIcon className="w-5 h-5" />,
  },
  {
    name: "dark",
    icon: <MoonIcon className="w-5 h-5" />,
  },
];

export function handleSystemTheme(isSystem: boolean) {
  const themeListener = (e: MediaQueryListEvent | MediaQueryList) => {
    if (e.matches) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

  if (isSystem) {
    themeListener(prefersDark);
    prefersDark.addEventListener("change", themeListener);
    return;
  }

  prefersDark.removeEventListener("change", themeListener);
}
