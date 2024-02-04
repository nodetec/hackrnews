import Divider from "@ui/divider";
import Logo from "@components/logo";
import { twJoin } from "tailwind-merge";
import Accounts from "@components/navbar/accounts";
import MenuLinks from "./menu-links";
import React from "react";
import { cookies } from "next/headers";
import ThemeMenu from "./theme-menu";
import MobileDrawer from "./mobile-drawer";
import DesktopDrawer from "./desktop-drawer"

export default function Navbar() {
  const isPinned = cookies().get("pinned")?.value === "true" ?? false;
  const currTheme = cookies().get("theme")?.value ?? "system";

  return (
    <>
      <nav
        className={twJoin(
          "bg-surface1 ring-1 ring-black/5 drop-shadow-md rounded-3xl p-4 px-6",
          "md:p-[1rem] md:px-[2rem] dark:ring-white/5 flex items-center",
          "sticky top-0 z-10",
        )}
      >
        <Logo />
        <MenuLinks />
        <div className="lg:hidden ml-auto">
          <MobileDrawer />
        </div>
        <div className={twJoin("hidden ml-auto mr-6", isPinned && "lg:block")}>
          {isPinned && <ThemeMenu currTheme={currTheme} />}
        </div>

        <div className="hidden gap-4 justify-center items-center lg:flex">
          <Accounts />
          <Divider vertical />

          <DesktopDrawer />
        </div>
      </nav>
    </>
  );
}
