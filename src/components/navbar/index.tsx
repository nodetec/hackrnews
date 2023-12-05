import Link from "next/link";
import React from "react";
import { twJoin } from "tailwind-merge";
import Logo from "../logo";
import MobileMenu from "./mobile";

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
			<Links />
			<Settings />
		</nav>
	);
}

function Links() {
	return (
		<div className="hidden md:block space-x-4">
			<Link href="/">Home</Link>
			<Link href="/about">About</Link>
		</div>
	);
}

function Settings() {
	return (
		<div className="gap-4 hidden ml-auto">
			<Link href="/settings">Settings</Link>
		</div>
	);
}
