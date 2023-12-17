"use client";

import { handleThemeToggle } from "@/utils/fns/theme";
import React from "react";

export default function ThemeInput({ theme }: { theme: string }) {
	React.useEffect(() => {
		console.log(theme === document.documentElement.dataset.mode)
	},[])
	return (
		<input
			onChange={() => {
				handleThemeToggle(theme);
			}}
			className="appearance-none"
			type="radio"
			id={theme}
			name="theme"
			value={theme}
		/>
	);
}
