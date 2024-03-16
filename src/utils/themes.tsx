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

import { LaptopIcon, MoonIcon, SunIcon } from "lucide-react";

export const themes = [
  {
    name: "system",
    icon: <LaptopIcon className="w-5 h-5" />,
  },
  {
    name: "light",
    icon: <SunIcon className="w-5 h-5 text-warn" />,
  },
  {
    name: "dark",
    icon: <MoonIcon className="w-5 h-5 text-info" />,
  },
];

