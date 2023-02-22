"use client"
function mediaListner(ev: MediaQueryListEvent) {
  const htmlEl = document.documentElement;
  const resolver = ev.matches ? "dark" : "light";
  htmlEl.className = resolver;
}

export function themeResolver(theme: string) {
  const htmlEl = document.documentElement;
  const darkMedia = window.matchMedia("(prefers-color-scheme: dark)");
  if (theme !== "system") {
    darkMedia.removeEventListener("change", mediaListner);
    htmlEl.className = theme;
  } else {
    const resolver = darkMedia.matches ? "dark" : "light";

    darkMedia.addEventListener("change", mediaListner);
    htmlEl.className = resolver;
  }
  setCookie("theme", theme, 20)
}

// These two functions below are just copied from w3schools
export function getCookie(cname: string) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

export function setCookie(cname: string, cvalue: string, exdays: number) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
