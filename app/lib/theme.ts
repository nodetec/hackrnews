"use client";
import { setCookie,getCookie } from "./cookieHandlers";
window.matchMedia("(prefers-color-scheme: dark)").onchange = function(){
  let theme = getCookie("theme");
  const htmlEl = document.documentElement;
  if(theme === "system"){
    const darkMedia = window.matchMedia("(prefers-color-scheme: dark)" );
    theme = darkMedia.matches?'dark':'light';
    htmlEl.className = theme;
  }
}
export function themeResolver(theme: string) {
  if (typeof document === "undefined") return;
  const htmlEl = document.documentElement;
  if(theme !== 'system')
    htmlEl.className = theme;
  else{
    const darkMedia = window.matchMedia("(prefers-color-scheme: dark)" );
    theme = darkMedia.matches?'dark':'light';
    htmlEl.className = theme;
  }
}
