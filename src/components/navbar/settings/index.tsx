import { RoundButton } from "@/components/buttons";
import { SettingsIcon } from "lucide-react";
import { twJoin } from "tailwind-merge";

export default function Settings() {
	return (
		<RoundButton 
			variant="ghost" 
			className={
				twJoin(
					"hidden md:flex ml-auto",
					"group",
			)}>
			<SettingsIcon className="transition-all group-hover:rotate-45" />
		</RoundButton>
	);
}
