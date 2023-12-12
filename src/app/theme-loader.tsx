"use client";

import React from "react";
import { handleThemeToggle } from "@/app/(navbar)/fns";

export default function ThemeLoader() {
	React.useEffect(() => {
		const html = document.documentElement;
		const mode = html.dataset.mode;

		handleThemeToggle(mode ?? "system");
	}, []);

	return null;
}
