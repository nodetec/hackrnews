import { Button, RoundButton } from "@/ui/buttons";
import styles from "@components/navbar/styles.module.css";
import { ArrowLeftIcon, Settings2Icon } from "lucide-react";
import React from "react";
import { twJoin } from "tailwind-merge";
import RelaySettings from "./relay-settings";
import ThemeSelect from "./theme-select";
import { closeHandler } from "@/utils/fns/modals";
import { openHandler } from "@/utils/fns/modals";

export default function MobileSettings() {
	const dialog = React.useRef<HTMLDialogElement>(null);
	const openFn = openHandler.bind(null, dialog, false);
	const closeFn = closeHandler.bind(null, dialog, false);

	return (
		<>
			<Button className="justify-start gap-3" flat onClick={openFn}>
				<Settings2Icon className="w-5 h-5" />
				Settings
			</Button>

			<dialog
				id="mobile-settings"
				ref={dialog}
				data-dialog="mobile-settings"
				aria-modal
				className={twJoin(
					"rounded-3xl p-4 bg-background w-full h-full text-textColor",
					"space-y-4 backdrop:blur-md backdrop:bg-black/50 backdrop:w-full backdrop:h-full",
					styles.slideIn,
				)}
			>
				{/* Close Button */}
				<RoundButton flat onClick={closeFn}>
					<ArrowLeftIcon />
				</RoundButton>

				<div className="space-y-8">
					<ThemeSelect />
					<RelaySettings />
				</div>
			</dialog>
		</>
	);
}
