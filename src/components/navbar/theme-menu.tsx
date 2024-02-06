"use client";

import { RoundButton } from "@/ui/buttons";
import { floatClasses } from "@/ui/prestyled";
import { themes } from "@/utils/themes";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { PaletteIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useState } from "react";
import { twJoin } from "tailwind-merge";

export default function ThemeMenu() {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenu.Root open={open} onOpenChange={setOpen}>
      <span className="sr-only">Color Theme</span>
      <DropdownMenu.Trigger asChild>
        {/* NOTE: This Rounded Button doesn't work as intended. Passing classes in braces ruins the merge */}
        <RoundButton
          className={twJoin(open ? "bg-surface3" : "hover:bg-surface2")}
        >
          <PaletteIcon className="w-6 h-6" />
        </RoundButton>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className={twJoin("bg-surface2 rounded-xl z-10 float-border", floatClasses)}
          sideOffset={5}
        >
          <div className="p-1.5 space-y-1">
            {themes.map((t) => (
              <DropdownMenu.Item
                key={t.name}
                className={twJoin(
                  "flex items-center gap-3 px-4 py-2 cursor-pointer",
                  "rounded-lg bg-background",
                  "hover:bg-primary/20 ",
                  theme === t.name && "text-primary ring-1 ring-primary",
                )}
                onClick={() => {
                  setTheme(t.name);
                }}
              >
                {t.icon} {t.name}
              </DropdownMenu.Item>
            ))}
          </div>
          <DropdownMenu.Arrow className="fill-surface2" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
