import React from "react";
import { twJoin } from "tailwind-merge";

export default function Divider({ vertical }: { vertical?: boolean }) {
	return (
		<div
			className={twJoin(
				"p-[1.5px] bg-stone-300 dark:bg-stone-600",
				vertical ? "h-full min-h-[2rem]" : "w-full h-[1px]",
			)}
		/>
	);
}
