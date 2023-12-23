"use client";

import { setPreferenceCookie } from "@/utils/actions/user-preferences";
import { themes } from "@/utils/themes";
import React from "react";
import { twJoin } from "tailwind-merge";

export default function Select({ currentTheme }: { currentTheme: string }) {
  return (
    <select
      name="theme-btn"
      id="theme-btn"
      className={twJoin(
        "w-full bg-inherit flex-grow appearance-none",
        "outline-none pl-10 py-2.5 pr-4 rounded-lg",
      )}
      value={currentTheme}
      onChange={async (e) => {
        setPreferenceCookie("theme", e.target.value);
      }}
    >
      {themes.map((theme) => (
        <option key={theme.name} value={theme.name} data-icon={theme.icon}>
          {theme.name}
        </option>
      ))}
    </select>
  );
}
