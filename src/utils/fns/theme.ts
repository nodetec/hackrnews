import { addCookie } from "@utils/fns/cookies";

/*
 To set toggle a theme a few steps are necessary:
 1: add the cookie, so whenever the page is visited next time it can be 
 rendered from the server with the correct theme

 2: update global state so the UI can represent the selected theme
 */

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
