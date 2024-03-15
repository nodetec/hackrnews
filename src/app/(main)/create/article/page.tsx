"use client";

import useEditor from "@/utils/hooks/useEditor";
import { ElementRef, useRef } from "react";

export default function Page() {
	const editorRef = useRef<ElementRef<"div"> | null>(null);
	const { toggleVimMode, themeName, themeNames, setThemeName } =
		useEditor(editorRef);

	return (
		<div>
			<button onClick={toggleVimMode}>vim</button>
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
			<div
				className="float-border overflow-auto bg-surface1 h-screen min-h-[10rem] max-h-[70vh]"
				ref={editorRef}
			/>
		</div>
	);
}
