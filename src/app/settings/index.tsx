import React from "react";
import { twJoin } from "tailwind-merge";
import styles from "./styles.module.css";
import { UserIcon, XIcon } from "lucide-react";
import { Button, RoundButton } from "@/ui/buttons";
import ThemeToggler from "./theme-toggler";

export default function SettingsSidebar() {
	return (
		<div
			// @ts-ignore
			popover="auto"
			aria-modal
			aria-labelledby="settings-sidebar"
			id="settings-sidebar"
			className={twJoin(
				"h-screen m-0 ml-auto p-2 bg-transparent w-96",
				styles.animation,
			)}
		>
			<div className="bg-background text-textColor rounded-lg h-full w-full p-2">
				<ActionBar />
				<ThemeToggler />

				{/* Action bar with close and manage accounts button */}
				{/* Prefered theme */}
				{/* Prefered Layout */}
				{/* Relay Settings */}
			</div>
		</div>
	);
}

function ActionBar() {
	return (
		<div className="flex justify-between">
			<button type="button">asldfjdask</button>
			<RoundButton
				// @ts-ignore
				popovertarget="settings-sidebar"
				className="text-error"
				flat
			>
				<XIcon className="w-6 h-6" />
			</RoundButton>
			<Button variant="primary" className="">
				<UserIcon className="w-5 h-5" /> Manage
			</Button>
		</div>
	);
}
