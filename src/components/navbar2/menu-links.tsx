"use client";

import { Button } from "@/ui/buttons";
import { closeHandler } from "@/utils/fns/modals";
import { routes } from "@/utils/routes";
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

  const wrapperClasses = twJoin(
    "lg:ml-6 xl:ml-12 gap-2 lg:gap-0 xl:gap-4",
    "focus-within:ring-primary lg:grow",
    isMobile ? "flex flex-col" : "hidden lg:flex ",
  );

  const buttonClasses = twJoin(
    "gap-3 active:bg-primary/30",
    isMobile ? "justify-start w-full" : "justify-center items-center",
  );

  return (
    <div className={wrapperClasses}>
      {routes.map((route) => (
        <Link href={route.path} key={route.name}>
          <Button
            onClick={() => {
              setIsOpen?.(false);
              router.push(route.path);
            }}
            tabIndex={-1}
            flat
            className={buttonClasses}
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
