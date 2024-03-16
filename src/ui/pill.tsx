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

import React from "react";
import { twJoin } from "tailwind-merge";

type PillProps = {
  variant?: "primary" | "ghost";
  children?: React.ReactNode;
};

export default function Pill(props: PillProps) {
  return (
    <span
      className={twJoin(
        "inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium",
        "border border-primary cursor-pointer",
        props.variant === "primary"
          ? "bg-primary text-surface1"
          : "bg-surface1 text-primary",
        props.variant === "primary" && "active:bg-background active:text-primary",
        "active:bg-primary/20 transition-colors duration-75",
      )}
    >
      {props.children}
    </span>
  );
}
