// import PostButton from "./PostButton";
import { UserIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import "@/styles/globals.css";
import Link from "next/link";
import Logo from "@/app/Logo";
import { ColorTheme } from "../ColorTheme";
import { links } from "./links";
import LoginModal from "../LoginModal";

const Header = () => {
  return (
    <header className="z-30 py-3 px-4 txt-color bg-bg-accent shadow-lg sticky top-0 dark:bg-zinc-700">
      <nav className="flex items-center body-content justify-evenly">
        {/* Logo */}
        <div className="h-full flex grow ">
          <Logo />
        </div>

        {/* links */}
        <div className="flex items-center justify-center grow-0">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex gap-2 ghost-button items-center"
            >
              <span
                className="w-5 h-5"
                dangerouslySetInnerHTML={{ __html: link.icon }}
              ></span>
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex gap-4 items-center grow justify-end">
          <form className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
              <MagnifyingGlassIcon className="h-6 w-6" />
            </span>
            <input
              type="text"
              placeholder="Search"
              className="py-1 px-2 ring-1 ring-gray-500 rounded-md bg-transparent cursor-pointer focus:cursor-auto focus:w-auto block pl-9"
            />
          </form>

          <ColorTheme />

          <LoginModal />
        </div>
      </nav>
    </header>
  );
};

export default Header;

