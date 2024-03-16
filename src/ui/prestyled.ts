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

import { twJoin } from "tailwind-merge";

// This applies shadow and animations to all small floats (menu, dropdown, tooltip, ...)
export const floatClasses = twJoin(
  "shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]",
  "will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade",
  "data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade",
  "data-[side=left]:animate-slideRightAndFade",
);

