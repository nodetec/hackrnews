"use client";

import { RoundButton } from "@/ui/buttons";
import Tooltip from "@/ui/tooltip";
import {
  getPreferenceCookie,
  setPreferenceCookie,
} from "@/utils/actions/user-preferences";
import { themes } from "@utils/themes";
import anime from "animejs";
import { PinIcon, PinOffIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useCallback, useEffect, useRef, useState } from "react";
import { twJoin } from "tailwind-merge";
import { Drawer } from "vaul";

export default function ThemeToggler() {
  const { theme: currTheme, setTheme } = useTheme();
  const indicatorRef = useRef<HTMLDivElement>(null);
  const [isPinned, setIsPinned] = useState(false);

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

    getPreferenceCookie("pinned").then((value) => {
      setIsPinned(value === "true");
    });
  }, []);

  return (
    <div className="flex-shrink-0">
      <div className="flex justify-between items-center mb-2 w-3/4 mx-auto">
        <Drawer.Title className="text-lg font-bold font-mono">
          Theme Preferences
        </Drawer.Title>
        <Tooltip
          trigger={
            <RoundButton
              onClick={() => {
                setPreferenceCookie("pinned", String(!isPinned));
                setIsPinned(!isPinned);
              }}
            >
              {isPinned ? (
                <PinIcon className="w-4 h-4 text-textColor fill-warn" />
              ) : (
                <PinOffIcon className="w-4 h-4 [&>not(:peer-checked)]:text-primary" />
              )}
            </RoundButton>
          }
        >
          <p className="text-xs">
            {isPinned ? "Unpin from the Menu Bar" : "Pin to the Menu Bar"}
          </p>
        </Tooltip>
      </div>
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
