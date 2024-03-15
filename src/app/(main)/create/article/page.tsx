"use client";

import { Button } from "@/ui/buttons";
import useEditor from "@/utils/hooks/useEditor";
import { ElementRef, useRef } from "react";

export default function Page() {
	const editorRef = useRef<ElementRef<"div"> | null>(null);
	const { toggleVimMode, themeName, themeNames, setThemeName, toggleOption } =
		useEditor(editorRef);

	return (
		<div>
			<Button variant="ghost" onClick={toggleVimMode}>toggle vim</Button>
			<Button variant="ghost" onClick={() => toggleOption("lineNumbers")}>
				toggle lineNumbers
			</Button>
			<Button variant="ghost" onClick={() => toggleOption("autocompletion")}>
				toggle autocompletion
			</Button>
			<Button variant="ghost" onClick={() => toggleOption("highlightActiveLine")}>
				toggle highlightActiveLine
			</Button>
			<Button variant="ghost" onClick={() => toggleOption("highlightActiveLineGutter")}>
				toggle highlightActiveLineGutter
			</Button>
			<Button variant="ghost" onClick={() => toggleOption("foldGutter")}>
				toggle foldGutter
			</Button>
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
