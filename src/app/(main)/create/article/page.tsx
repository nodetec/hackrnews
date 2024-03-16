/**
 * Sovereign Computing For a Brighter Future
 * Copyright (C) 2024 Nodetec.co
 *
 * This file is part of HackrNews.
 *
 * HackrNews is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * HackrNews is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with HackrNews. If not, see <https://www.gnu.org/licenses/>.
 *
 * Contact information:
 * luis..f.carvalho20+hackrnews@gmail.com
 */

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
