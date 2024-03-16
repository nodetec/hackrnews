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

"use client";

import { Button } from "@/ui/buttons";
import { ROUTES } from "@/utils/routes";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { twJoin } from "tailwind-merge";

export default function MenuLinks({
  isMobile,
  setIsOpen,
}: {
  isMobile?: boolean;
  setIsOpen?: (open: boolean) => void;
}) {
  const pathname = usePathname();
  const router = useRouter();

  const buttonClasses = twJoin(
    "gap-3 active:bg-primary/30",
    isMobile ? "justify-start w-full" : "justify-center items-center",
  );

  return (
    <div
      className={twJoin(
        "lg:ml-6 xl:ml-12 gap-2 lg:gap-1 xl:gap-4",
        "focus-within:ring-primary lg:grow",
        isMobile ? "flex flex-col" : "hidden lg:flex ",
      )}
    >
      {ROUTES.map((route) => (
        <Link href={route.path} key={route.name}>
          <Button
            onClick={() => {
              setIsOpen?.(false);
              router.push(route.path);
            }}
            tabIndex={-1}
            className={buttonClasses}
          >
            {route.Icon}
            <span
              className={twJoin(
                pathname === route.path &&
                "underline underline-offset-2 decoration-primary decoration-2",
              )}
            >
              {route.name}
            </span>
          </Button>
        </Link>
      ))}
    </div>
  );
}
