import { themes } from "@/utils/themes";
import { ChevronDownIcon } from "lucide-react";
import { cookies } from "next/headers";
import { twJoin } from "tailwind-merge";
import Select from "./select";

export default function ThemeSelect() {
  const currentTheme = cookies().get("theme")?.value ?? "system";
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
          {themes.find((theme) => theme.name === currentTheme)?.icon}
        </span>
        <Select currentTheme={currentTheme} />
        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
          <ChevronDownIcon className="w-5 h-5" />
        </span>
      </div>
    </div>
  );
}
