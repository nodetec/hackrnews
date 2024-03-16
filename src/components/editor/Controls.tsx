"use client";

import { useEditor } from "@/providers/editor";

export default function Controls() {
	const { themeName, setThemeName, themeNames } = useEditor();

	return (
		<div>
			<select
				value={themeName}
				onChange={(e) => setThemeName(e.target.value as typeof themeName)}
			>
				{themeNames.map((theme) => (
					<option key={theme} value={theme}>
						{theme}
					</option>
				))}
			</select>
		</div>
	);
}
