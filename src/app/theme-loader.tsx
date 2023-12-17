"use client";

import { getCookie } from "@/utils/fns/cookies";
import { handleThemeToggle } from "@/utils/fns/theme";
import React from "react";

export default function ThemeLoader() {
	React.useEffect(() => {
		const theme = getCookie("theme");
		console.log("theme cookie ", theme);
		
		const html = document.documentElement;
		const mode = html.dataset.mode;
		console.log(mode);

		handleThemeToggle(mode ?? "system");
	}, []);

	return null;
}
