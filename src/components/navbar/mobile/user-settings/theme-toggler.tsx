"use client";

import { themes } from "@/utils/themes";
import { ChevronDownIcon } from "lucide-react";
import { twJoin } from "tailwind-merge";
import { useTheme } from "next-themes";

export default function ThemeSelect() {
  const { setTheme, theme : currTheme } = useTheme();

  return (
    <div>
      <label htmlFor="theme-btn" className="text-md">
        Preferred Theme
      </label>
      <div
        className={twJoin(
          "relative bg-surface2 rounded-lg",
          "focus-within:ring-2 ring-primary relative",
        )}
      >
        <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2">
          {themes.find((t) => t.name === currTheme)?.icon}
        </span>

        <select
          name="theme-btn"
          id="theme-btn"
          className={twJoin(
            "w-full bg-inherit flex-grow appearance-none",
            "outline-none pl-10 py-2.5 pr-4 rounded-lg",
          )}
          value={currTheme}
          onChange={async (e) => {
            setTheme(e.target.value);
          }}
        >
          {themes.map((theme) => (
            <option key={theme.name} value={theme.name}>
              {theme.name}
            </option>
          ))}
        </select>
        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
          <ChevronDownIcon className="w-5 h-5" />
        </span>
      </div>
    </div>
  );
}
