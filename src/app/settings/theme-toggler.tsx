"use client";

import { themes } from "@/utils/themes";
import { twJoin } from "tailwind-merge";

export default function ThemeToggler() {
  return (
    <div>
      <fieldset>
        <legend className="text-2xl">Prefered Theme</legend>
        <div className="flex gap-2 justify-around">
          {themes.map((theme) => (
            <label
              key={theme.name}
              htmlFor={theme.name}
              className={twJoin(
                "inline-flex flex-col items-center justify-center",
                "bg-surface1 shadow cursor-pointer select-none",
                "w-20 p-2 rounded-lg",
                "focus-within:ring-2 ring-primary hover:bg-primary/5",
                //Checked styles
                "[&:has(input:checked)]:bg-primary/20",
                // "[&:has(input:checked)]:text-primary",
              )}
            >
              <span className="[&>svg]:w-6 [&>svg]:h-6">{theme.icon}</span>
              <span className="text-sm mt-4">{theme.name}</span>

              {/* TODO: Move this input to a separate client component so the parent is ssr */}
              {/* TODO: Add functionality*/}
              <input
                onChange={() => {
                  document.documentElement.setAttribute(
                    "data-theme",
                    theme.name,
                  );
                }}
                className="appearance-none"
                type="radio"
                id={theme.name}
                name="theme"
                value={theme.name}
              />
            </label>
          ))}
        </div>
      </fieldset>
    </div>
  );
}
