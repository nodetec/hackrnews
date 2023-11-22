"use client";
import Logo from "@/components/Logo";
import { IconButton, LinkButton } from "@/components/buttons";
import { routes } from "@/utils/routes";
import Link from "next/link";
import { twJoin } from "tailwind-merge";

export default function Page() {
  return (
    <div
      className={twJoin(
        "rounded-3xl p-4 bg-background w-full h-full space-y-4 menu-open",
        "",
      )}
    >
      <div className="flex justify-between items-center">
        <Logo />
        <Link href="/">
          <IconButton>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </Link>
      </div>

      <div className="flex flex-col gap-4">
        {routes.map((route) => (
          <LinkButton key={route.name} href={route.path}>
            {route.icon}
            {route.name}
          </LinkButton>
        ))}
      </div>
    </div>
  );
}
