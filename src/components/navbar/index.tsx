import Link from "next/link";
import React from "react";
import { twJoin } from "tailwind-merge";
import Logo from "../logo";
import MobileMenu from "./mobile";
import MenuLinks from "./menu-links";
import ThemeSwitch from "./theme-switch";

export default function Navbar() {
	return (
		<nav
			className={twJoin(
				"w-full bg-surface1 ring-1 ring-black/5 drop-shadow-md rounded-3xl min-h-[3.5rem] p-4 px-6",
				"md:p-[2em] md:px-[2em]",
				"flex items-center justify-between",
				"dark:ring-white/5",
			)}
		>
			<Logo />
			<MobileMenu />
			<MenuLinks />
			<ThemeSwitch />
			<Settings />
		</nav>
	);
}


function Settings() {
	return (
		<div className="gap-4 hidden ml-auto">
			<Link href="/settings">Settings</Link>
		</div>
	);
}
