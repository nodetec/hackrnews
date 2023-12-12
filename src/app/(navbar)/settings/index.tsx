import { RoundButton } from "@/components/buttons";
import { SettingsIcon } from "lucide-react";
import { twJoin } from "tailwind-merge";
import styles from "../styles.module.css";

export default function Settings() {
	return (
		<>
			<RoundButton
				// @ts-ignore
				popovertarget="settings"
				variant="ghost"
				className={"ml-auto group"}
			>
				<SettingsIcon className="transition-all group-hover:rotate-45" />
			</RoundButton>
			<div
				id="settings"
				// @ts-ignore
				popover="auto"
				style={{
					inset: "unset",
					position: "absolute",
					right: 0,
					top: 0,
					margin: 0,
				}}
				className={twJoin(
					"h-screen bg-surface1 text-textColor w-96",
					styles.slideIn, 
				)}
			>
				Settings
			</div>
		</>
	);
}
