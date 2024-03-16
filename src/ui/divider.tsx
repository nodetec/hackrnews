/**
 * Sovereign Computing For a Brighter Future
 * Copyright (C) 2024 Nodetec.co
 *
 * This file is part of HackrNews.
 *
 * HackrNews is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * HackrNews is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with HackrNews. If not, see <https://www.gnu.org/licenses/>.
 *
 * Contact information:
 * luis..f.carvalho20+hackrnews@gmail.com
 */

import React from "react";
import { twJoin, twMerge } from "tailwind-merge";

export default function Divider({
  vertical,
  className,
}: {
  vertical?: boolean;
  className?: string;
}) {
  return (
    <div
      className={twMerge(
        twJoin(
          "p-[1.5px] bg-stone-300 dark:bg-stone-600",
          vertical ? "h-full min-h-[2rem]" : "w-full h-[1px]",
        ),
        className,
      )}
    />
  );
}
