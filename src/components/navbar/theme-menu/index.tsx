import { cookies } from "next/headers";
import ThemeMenu from "./theme-popover";
import { twJoin } from "tailwind-merge";

export default function ThemeSwitch() {
  const isPinned = cookies().get("pinned")?.value === "true" ?? false;
  const currTheme = cookies().get("theme")?.value ?? "system";

  return (
    <div className={twJoin("hidden ml-auto mr-6", isPinned && "lg:block")}>
      {isPinned && <ThemeMenu currTheme={currTheme} />}
    </div>
  );
}
