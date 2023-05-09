"use client";
import {
  MagnifyingGlassIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/solid";
import "@/styles/globals.css";
import Link from "next/link";
import Logo from "@/app/Logo";
import { ColorTheme } from "../ColorTheme";
import { links } from "./links";
import LoginModal from "../LoginModal";
import { userStore } from "@/app/stores/user";
import { Avatar } from "../Avatar";

const Header = () => {
  const pubkey = userStore((state) => state.pubkey);

  return (
    <header className="z-30 py-1 px-4 txt-color bg-bg-accent shadow-lg top-0 dark:bg-zinc-700">
      
      <nav className="flex items-center body-content justify-evenly">
        {/* Logo */}
        <div className="h-full flex grow ">
          <Logo />
        </div>

        {/* links */}
        <div className="hidden md:flex space-x-1  items-center justify-center grow-0">
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
          <Link href={"/post"} className="bordered-button">
            <PencilSquareIcon className="h-5 w-5" />
            Post
          </Link>
        </div>

        <div className="flex gap-4 items-center grow justify-end relative">
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

          {pubkey ?
          <Avatar /> : 
          <LoginModal />
          }

        </div>
      </nav>
    </header>
  );
};

export default Header;
