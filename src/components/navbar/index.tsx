import Divider from "@ui/divider";
import Logo from "@components/logo";
import { twJoin } from "tailwind-merge";
import MenuLinks from "./menu-links";
import React from "react";
import { cookies } from "next/headers";
import ThemeMenu from "./theme-menu";
import MobileDrawer from "./mobile-drawer";
import DesktopDrawer from "./desktop-drawer"
import Accounts from "./accounts";

export default function Navbar() {
  const isPinned = cookies().get("pinned")?.value === "true" ?? false;

  return (
    <>
      <nav
        className={twJoin(
          "bg-surface1 drop-shadow-md rounded-3xl p-4 px-6",
          "md:p-[1rem] md:px-[2rem] flex items-center",
          "sticky top-0 z-10 float-border",
          
        )}
      >
        <Logo />
        <MenuLinks />
        <div className="lg:hidden ml-auto">
          <MobileDrawer />
        </div>
        <div className={twJoin("hidden ml-auto mr-6", isPinned && "lg:block")}>
          {isPinned && <ThemeMenu />}
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
