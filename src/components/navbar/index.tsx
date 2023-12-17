import Divider from "@/ui/divider";
import Logo from "@/components/logo";
import { twJoin } from "tailwind-merge";
import Accounts from "./accounts";
import MenuLinks from "./menu-links";
import MobileMenu from "./mobile";
import ThemeSwitch from "./theme-switch";
import Settings from "./settings";

export default function Navbar() {
  return (
    <nav
      className={twJoin(
        "w-full bg-surface1 ring-1 ring-black/5 drop-shadow-md rounded-3xl h-24 p-4 px-6",
        "md:p-[2em] md:px-[2em]",
        "flex items-center justify-between",
        "dark:ring-white/5",
      )}
    >
      <Logo />
      <MobileMenu />
      <MenuLinks />
      <ThemeSwitch />
      <div className="hidden gap-4 justify-center items-center lg:flex">
        <Accounts />
        <Divider vertical />

        <Settings />
      </div>
    </nav>
  );
}
