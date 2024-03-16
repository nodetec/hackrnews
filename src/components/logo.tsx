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

import { silkScreen } from "@/utils/fonts";
import Link from "next/link";
import { twJoin } from "tailwind-merge";

export default function Logo() {
  return (
    <Link href="/">
      <h1
        className={twJoin(
          "text-3xl uppercase",
          silkScreen.className,
          // tourney.className,
        )}
      >
        <span className="text-primary">Hackr</span>news
      </h1>
    </Link>
  );
}
