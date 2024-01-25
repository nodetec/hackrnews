"use client";

import { routes } from "@utils/routes";
import { twJoin } from "tailwind-merge";
import { Button } from "@ui/buttons";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MenuLinks() {
  const pathname = usePathname();

  return (
    <div className="ml-6 xl:ml-12 hidden lg:flex xl:gap-4 grow">
      {routes.map((route) => (
        <Link key={route.name} href={route.path}>
          <Button
            tabIndex={-1}
            flat
            className={twJoin(
              "gap-3 items-center text-lg",
              "active:bg-primary/30 items-center justify-center",
            )}
          >
            {route.icon}
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
