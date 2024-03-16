/**
 * Sovereign Computing For a Brighter Future
 * Copyright (C) 2024 Nodetec.co
 *
 * This file is part of Hackr News.
 *
 * Hackr News is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Hackr News is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Hackr News. If not, see <https://www.gnu.org/licenses/>.
 *
 * Contact information:
 * chris.machine@pm.me
 */

import { useId } from "react";
import { twJoin, twMerge } from "tailwind-merge";

// FIXME: not working
export default function Switch({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return (
    <div className={twMerge("space-x-2 disabled:opacity-40", className)}>
      <label
        id="switch-3-label"
        className="relative inline-flex cursor-pointer items-center h-7 p-1 hover:bg-surface2 rounded-lg"
      >
        <input id="switch-3" type="checkbox" className="peer sr-only" />
        <label htmlFor="switch-3" className="sr-only">
          Enable this relay
        </label>
        <div
          className={twJoin(
            "peer h-2 w-10 rounded border dark:border-black bg-slate-300 dark:bg-neutral-700 after:absolute",
            "after:bottom-1 after:left-1 after:h-5 after:w-5 after:rounded-md after:border",
            "after:border-surface3 dark:after-border-black after:bg-white dark:after:bg-neutral-500",
            "after:transition-all after:content-[''] peer-checked:after:bg-success",
            "peer-checked:after:translate-x-full peer-focus:ring-secundary",
            "peer-disabled:opacity-40 peer-disabled:cursor-not-allowed pointer-events-auto",
          )}
        />
        <label htmlFor="switch-3" className="text-xs text-subText">
          {label}
        </label>
      </label>
    </div>
  );
}
