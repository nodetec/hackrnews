"use client";

import { themes } from "@utils/themes";
import anime from "animejs";
import { useTheme } from "next-themes";
import { useCallback, useEffect, useRef } from "react";
import { twJoin } from "tailwind-merge";
import { Drawer } from "vaul";

export default function ThemeToggler() {
  const { theme: currTheme, setTheme } = useTheme();
  const indicatorRef = useRef<HTMLDivElement>(null);

  const calculatePosition = useCallback((theme: string | undefined) => {
    switch (theme) {
      case "light":
        return "100%";
      case "dark":
        return "200%";
      default:
        return 0;
    }
  }, []);

  function handleThemeChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTheme(e.target.value);

    anime({
      targets: indicatorRef.current,
      translateX: [
        calculatePosition(currTheme),
        calculatePosition(e.target.value),
      ],
      easing: "spring(1, 80, 10, 0)",
    });
  }

  useEffect(() => {
    if (indicatorRef.current) {
      indicatorRef.current.style.transform = `translateX(${calculatePosition(currTheme)})`;
    }
  }, []);

  return (
    <div>
      <Drawer.Title className="text-xl font-bold font-mono mb-2 w-3/4 mx-auto">
        Theme Preferences
      </Drawer.Title>
      <fieldset>
        <div className="rounded-xl p-2 bg-surface1">
          <div className="relative grid grid-cols-3 rounded-xl overflow-hidden">
            <div
              ref={indicatorRef}
              className={twJoin(
                "absolute h-full w-1/3 bg-primary/30 shadow-lg",
                "transform rounded-xl",
              )}
            />
            {themes.map((theme, idx) => (
              <div key={theme.name}>
                <label
                  key={theme.name}
                  htmlFor={idx.toString()}
                  className={twJoin(
                    "col-span-1 w-full p-6 inline-flex cursor-pointer",
                    "items-center flex-col gap-3 bg-transparent",
                    "select-none",
                  )}
                >
                  <input
                    id={idx.toString()}
                    checked={currTheme === theme.name}
                    onChange={handleThemeChange}
                    type="radio"
                    className="hidden"
                    // name={theme.name}
                    value={theme.name}
                  />

                  <span>{theme.icon}</span>
                  <span>{theme.name}</span>
                </label>
              </div>
            ))}
          </div>
        </div>
      </fieldset>
    </div>
  );
}
