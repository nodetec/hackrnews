"use client";

import { handleThemeToggle } from "@/components/navbar/fns";
import React from "react";

export default function ThemeLoader() {
	React.useEffect(() => {
		const html = document.documentElement;
		const mode = html.dataset.mode;

		handleThemeToggle(mode ?? "system");
	}, []);

	return null;
}
