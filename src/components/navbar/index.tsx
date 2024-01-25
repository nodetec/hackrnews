'use client'
import Divider from "@/ui/divider";
import Logo from "@/components/logo";
import { twJoin } from "tailwind-merge";
import Accounts from "./accounts";
import MenuLinks from "./menu-links";
import MobileMenu from "./mobile";
import Settings from "./settings";
import ThemeSwitch from "./theme-menu";

export default function Navbar() {
  return (
    <nav
      className={twJoin(
        "w-full bg-surface1 ring-1 ring-black/5 drop-shadow-md rounded-3xl",
        "md:p-[1rem] md:px-[2rem]",
        "flex items-center justify-between sticky top-0 z-50",
        "dark:ring-white/5",
      )}
    >
      <Logo />
      {/* <MobileMenu /> */}
      {/* <MenuLinks /> */}
      {/* <ThemeSwitch /> */}
      <div className="hidden gap-4 justify-center items-center lg:flex">
        <Accounts />
        <Divider vertical />

        <Settings />
      </div>
    </nav>
  );
}
